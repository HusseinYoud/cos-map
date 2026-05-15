import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { locations, entries } from "./data/locations.js";
import "./App.css";
import TopOverlay from "./assets/components/TopOverlay";


const BASE_URL = import.meta.env.BASE_URL;

function getIconPath(type) {
  const base = import.meta.env.BASE_URL;

  switch (type) {
    case "town":
    case "village":
    case "settlement":
      return `${base}icons/town-icon.png`;

    case "misc":
      return `${base}icons/misc-icon.png`;

    case "quest":
      return `${base}icons/quest-icon.jpg`;

    default:
      return `${base}icons/town-icon.png`;
  }
}

function createLocationIcon(type = "town", size = 28) {
  const haloSize = size;
  const ringSize = Math.round(size * 0.78);
  const coreSize = Math.round(size * 0.5);

  return L.divIcon({
    className: "custom-marker-wrapper",
    html: `
      <div
        class="custom-marker"
        style="width:${size}px; height:${size}px;"
      >
        <div
          class="marker-halo"
          style="width:${haloSize}px; height:${haloSize}px;"
        ></div>

        <div
          class="marker-ring"
          style="width:${ringSize}px; height:${ringSize}px;"
        ></div>

        <div
          class="marker-core"
          style="width:${coreSize}px; height:${coreSize}px;"
        >
          <img
            src="${getIconPath(type)}"
            alt="${type}"
            style="width:${coreSize}px; height:${coreSize}px;"
          />
        </div>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -Math.round(size * 0.45)],
  });
}
function DescriptionRenderer({ description }) {
  if (!description) {
    return <p>No description available.</p>;
  }

  if (typeof description === "string") {
    return <p>{description}</p>;
  }

  if (Array.isArray(description)) {
    return (
      <div className="description-text">
        {description.map((block, index) => {
          if (typeof block === "string") {
            return <p key={index}>{block}</p>;
          }

          if (block.type === "text") {
            return <p key={index}>{block.text}</p>;
          }

          if (block.type === "redacted") {
            if (block.revealed) {
              return <p key={index}>{block.text}</p>;
            }

            const length = block.length ?? Math.min(block.text.length, 80);

            return (
              <p key={index}>
                <span className="redacted">
                  {"█".repeat(length)}
                </span>
              </p>
            );
          }

          return null;
        })}
      </div>
    );
  }

  return <p>No description available.</p>;
}

const playerCharacters = [
  { name: "Sir Lloyd", class: "Fighter / Warlock", level: "5/3" },
  { name: "Torinn", class: "Paladin", level: "8" },
  { name: "Renoux", class: "Cleric", level: "8" },
  { name: "Talgrim", class: "Bard", level: "8" },
  { name: "Quinn", class: "Wizard", level: "8" },
];

export default function App() {
  function getMarkerSize(zoom) {
  const baseSize = 30;
  const scale = Math.pow(1.2, zoom);
  const size = baseSize * scale;

  return Math.max(12, Math.min(42, Math.round(size)));
}
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [selectedEntryId, setSelectedEntryId] = useState(null);
  const [debugCoords, setDebugCoords] = useState(null);
 const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

useEffect(() => {
  if (mapInstanceRef.current) return;

  const map = L.map(mapRef.current, {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 3,
  });

  mapInstanceRef.current = map;

  const imageWidth = 5025;
  const imageHeight = 3225;
  const bounds = [[0, 0], [imageHeight, imageWidth]];

  L.imageOverlay(`${BASE_URL}barovia-map.jpg`, bounds).addTo(map);
  map.fitBounds(bounds);

  const markers = [];

  locations.forEach((location) => {
    if (location.x == null || location.y == null) return;

    const marker = L.marker([location.y, location.x], {
      icon: createLocationIcon(location.type, getMarkerSize(map.getZoom())),
    }).addTo(map);

    markers.push({
      marker,
      type: location.type,
    });

    const shortText =
      location.shortDescription ||
      location.description ||
      "";

    marker.bindPopup(`
      <div>
        <h3 style="margin:0 0 0.5rem 0;">${location.name}</h3>
        <div style="font-size:0.85rem; color:#666; margin-bottom:0.5rem;">
          ${location.type}
        </div>
        <p style="margin:0;">${shortText}</p>
      </div>
    `);

    marker.on("click", () => {
      setSelectedEntryId(null);
      setSelectedLocationId(location.id);
    });
  });

  function updateMarkerSizes() {
    const zoom = map.getZoom();
    const size = getMarkerSize(zoom);

    markers.forEach(({ marker, type }) => {
      marker.setIcon(createLocationIcon(type, size));
    });
  }

  updateMarkerSizes();
  map.on("zoomend", updateMarkerSizes);

  map.on("click", (e) => {
    setDebugCoords({
      x: Math.round(e.latlng.lng),
      y: Math.round(e.latlng.lat),
    });
  });

  return () => {
    map.off("zoomend", updateMarkerSizes);
    map.remove();
    mapInstanceRef.current = null;
  };
}, []);

  const selectedLocation = selectedLocationId
    ? locations.find((loc) => loc.id === selectedLocationId)
    : null;

  const selectedEntry = selectedEntryId
    ? entries[selectedEntryId]
    : null;

  function renderOverviewPanel() {
    return (
      <>
        <h2>Curse of Strahd Interactive Map</h2>

        <div className="panel-header-placeholder">
          Header image placeholder
        </div>

        <hr />

        <section>
          <h3>Map Guide</h3>
          <p>Click any marker to open its details.</p>

          <table className="legend-table">
            <thead>
              <tr>
                <th>Icon</th>
                <th>Description</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src={`${BASE_URL}icons/town-icon.png`} alt="Town Icon" style={{ width: "20px", height: "20px" }} /></td>
                <td>Settlements</td>
                <td>Town / Settlement</td>
              </tr>
              <tr>
                  <td>
                    <img
                      src={`${BASE_URL}icons/misc-icon.png`}
                      alt="Misc Icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </td>
                  <td>Location of note</td>
                  <td>Special / notable location</td>
                </tr>
              <tr>
                <td><img src={`${BASE_URL}icons/quest-icon.jpg`} alt="Quest Icon" style={{ width: "20px", height: "20px" }} /></td>
                <td>Quest Icon</td>
                <td>Important quest location</td>
              </tr>

            </tbody>
          </table>
        </section>

        <hr />

        <section>
          <h3>Player Characters</h3>

          <table className="pc-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Class</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {playerCharacters.map((pc) => (
                <tr key={pc.name}>
                  <td>
                    <div className="pc-image-placeholder">No image</div>
                  </td>
                  <td>{pc.name}</td>
                  <td>{pc.class}</td>
                  <td>{pc.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <hr />

        <section>
          <h3>Debug Coordinates</h3>
          <p>x: {debugCoords?.x ?? "-"}</p>
          <p>y: {debugCoords?.y ?? "-"}</p>
        </section>
      </>
    );
  }
  
  function renderLocationPanel(location) {
    const longText =
      location.longDescription ||
      location.shortDescription ||
      location.description ||
      "No description available.";

    const noteworthyLocations = location.noteworthyLocations || [];
    const noteworthyNpcs = location.noteworthyNpcs || [];

    return (
      <>
        <button
          className="back-btn"
          onClick={() => {
            setSelectedEntryId(null);
            setSelectedLocationId(null);
          }}
        >
          Back
        </button>
        
        <h2>{location.name}</h2>
        <div className="entry-type">{location.type}</div>
        <DescriptionRenderer description={longText} />

        <hr />

        <section>
          <h3>Noteworthy Locations</h3>
          {noteworthyLocations.length > 0 ? (
            <ul className="entry-list">
              {noteworthyLocations.map((item) => (
                <li key={item.id}>
                  <button
                    className="entry-link-button"
                    onClick={() => setSelectedEntryId(item.id)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No noteworthy locations listed yet.</p>
          )}
        </section>

        <hr />

        <section>
          <h3>Noteworthy NPCs</h3>
          {noteworthyNpcs.length > 0 ? (
            <ul className="entry-list">
              {noteworthyNpcs.map((item) => (
                <li key={item.id}>
                  <button
                    className="entry-link-button"
                    onClick={() => setSelectedEntryId(item.id)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No noteworthy NPCs listed yet.</p>
          )}
        </section>

        {location.detailPage && (
          <>
            <hr />
        <a
          className="read-more-btn"
          href={`${BASE_URL}${location.detailPage.replace(/^\/+/, "")}`}
        >
          Open local map
        </a>
          </>
        )}

        <hr />

        <section>
          <h3>Debug Coordinates</h3>
          <p>x: {debugCoords?.x ?? "-"}</p>
          <p>y: {debugCoords?.y ?? "-"}</p>
        </section>
      </>
    );
  }

function renderEntryPanel(entry) {
  const entryText =
    entry.longDescription ||
    entry.shortDescription ||
    entry.description ||
    "No description available.";

  return (
    <>
      <button
        className="back-btn"
        onClick={() => setSelectedEntryId(null)}
      >
        Back
      </button>

      <h2>{entry.name}</h2>
      <div className="entry-type">{entry.type}</div>
      <DescriptionRenderer description={entryText} />

      <hr />

      <section>
        <h3>Debug Coordinates</h3>
        <p>x: {debugCoords?.x ?? "-"}</p>
        <p>y: {debugCoords?.y ?? "-"}</p>
      </section>
    </>
  );
}

  return (
    <div className="app-shell">
      <div className="map-wrapper">
        <div ref={mapRef} id="map" />
        <TopOverlay />

        {!isSidePanelOpen && (
          <button
            className="panel-reopen-btn"
            onClick={() => setIsSidePanelOpen(true)}
          >
            Open Panel
          </button>
        )}
      </div>

      {isSidePanelOpen && (
        <aside className="side-panel">
          <button
            className="panel-collapse-btn"
            onClick={() => setIsSidePanelOpen(false)}
          >
            Close
          </button>

          {!selectedLocation && !selectedEntry && renderOverviewPanel()}
          {selectedLocation && !selectedEntry && renderLocationPanel(selectedLocation)}
          {selectedEntry && renderEntryPanel(selectedEntry)}
        </aside>
      )}
    </div>
  );
}
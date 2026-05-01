import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { locations, entries } from "./data/locations.js";
import "./App.css";
import TopOverlay from "./assets/components/TopOverlay";


const BASE_URL = import.meta.env.BASE_URL;

function getIconPath(type) {
  switch (type) {
    case "town":
    case "village":
    case "settlement":
    default:
      return `${BASE_URL}icons/town-icon.png`;
  }
}

function createLocationIcon(type = "town") {
  return L.divIcon({
    className: "custom-marker-wrapper",
    html: `
      <div class="custom-marker">
        <div class="marker-halo"></div>
        <div class="marker-ring"></div>
        <div class="marker-core">
          <img src="${getIconPath(type)}" alt="${type}" />
        </div>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -12],
  });
}

const playerCharacters = [
  { name: "Sir Lloyd", class: "Fighter / Warlock", level: "5/3" },
  { name: "Torinn", class: "Paladin", level: "8" },
  { name: "Renoux", class: "Cleric", level: "8" },
  { name: "Talgrim", class: "Bard", level: "8" },
  { name: "Quinn", class: "Wizard", level: "8" },
];

export default function App() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [selectedEntryId, setSelectedEntryId] = useState(null);
  const [debugCoords, setDebugCoords] = useState(null);

  useEffect(() => {
    if (mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      crs: L.CRS.Simple,
      minZoom: -2.5,
      maxZoom: 3,
    });

    mapInstanceRef.current = map;

    const imageWidth = 5025;
    const imageHeight = 3225;
    const bounds = [[0, 0], [imageHeight, imageWidth]];

    L.imageOverlay(`${BASE_URL}barovia-map.jpg`, bounds).addTo(map);
    map.fitBounds(bounds);

    map.on("click", (e) => {
      setDebugCoords({
        x: Math.round(e.latlng.lng),
        y: Math.round(e.latlng.lat),
      });
    });

    locations.forEach((location) => {
      if (location.x == null || location.y == null) return;

      const marker = L.marker([location.y, location.x], {
        icon: createLocationIcon(location.type),
      }).addTo(map);

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

    return () => {
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
                <td><img src={`${BASE_URL}icons/quest-icon.png`} alt="Quest Icon" style={{ width: "20px", height: "20px" }} /></td>
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
        <p>{longText}</p>

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
        <a className="read-more-btn" href={`${BASE_URL}${location.detailPage.replace(/^\/+/, "")}`}>
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
        <p>{entry.description || "No description available."}</p>

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
      </div>

      <aside className="side-panel">
        {!selectedLocation && !selectedEntry && renderOverviewPanel()}
        {selectedLocation && !selectedEntry && renderLocationPanel(selectedLocation)}
        {selectedEntry && renderEntryPanel(selectedEntry)}
      </aside>
    </div>
  );
}
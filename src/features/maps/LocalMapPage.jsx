import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { locations, npcs, items } from "../../content";
import { getNPCsAtLocation } from "../../domain/queries/npcs";
import { getChildLocations } from "../../domain/queries/locations";
import NPCPortrait from "../../shared/components/NPCPortrait";

import ContentDescription from "../../shared/components/ContentDescription";
import ShopInventory from "../shops/ShopInventory";
import ServiceList from "../shops/ServiceList";

import "./local-map.css";

const baseUrl = import.meta.env.BASE_URL;

const iconFiles = {
  town: "town-icon.png",
  shop: "shop-icon.png",
  tavern: "tavern-icon.png",
  church: "church-icon.jpg",
  quest: "quest-icon.jpg",
  misc: "misc-icon.png",
};

const locationById = new Map(
  locations.map((location) => [location.id, location])
);

const npcById = new Map(
  npcs.map((npc) => [npc.id, npc])
);

function createIcon(type, size) {
  const filename = iconFiles[type] ?? iconFiles.misc;

  return L.divIcon({
    className: "campaign-marker",
    html:
      `<span class="campaign-marker-ring">` +
      `<img src="${baseUrl}icons/${filename}" alt="" />` +
      `</span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

function markerSize(zoom) {
  return Math.max(
    16,
    Math.min(52, Math.round(34 * Math.pow(1.15, zoom)))
  );
}

export default function LocalMapPage({ definition, initialLocationId }) {
  const mapElement = useRef(null);
  const mapInstance = useRef(null);

  const [selection, setSelection] = useState(
    initialLocationId
      ? { kind: "location", id: initialLocationId }
      : null
  );

  const [panelOpen, setPanelOpen] = useState(true);
  const [coordinates, setCoordinates] = useState(null);

  const areaLocations = locations.filter(
    (location) => location.areaId === definition.id
  );

  const areaIds = new Set([
    definition.id,
    ...areaLocations.map((location) => location.id),
  ]);

  const overviewLocations = areaLocations.filter(
    (location) => !location.parentLocationId || !areaIds.has(location.parentLocationId)
  );

  const areaNPCs = npcs.filter((npc) =>
    npc.locationLinks.some((link) => areaIds.has(link.locationId))
  );

  const selectedLocation =
    selection?.kind === "location"
      ? locationById.get(selection.id)
      : undefined;

  const selectedNPC =
    selection?.kind === "npc"
      ? npcById.get(selection.id)
      : undefined;

  const relatedNPCs = selectedLocation
    ? getNPCsAtLocation(npcs, selectedLocation.id)
    : [];

  const childLocations = selectedLocation
    ? getChildLocations(locations, selectedLocation.id)
    : [];

  const parentLocation = selectedLocation?.parentLocationId
    ? locationById.get(selectedLocation.parentLocationId)
    : undefined;

  useEffect(() => {
    const map = L.map(mapElement.current, {
      crs: L.CRS.Simple,
      minZoom: definition.minZoom,
      maxZoom: definition.maxZoom,
    });

    mapInstance.current = map;

    const bounds = [
      [0, 0],
      [definition.imageHeight, definition.imageWidth],
    ];

    L.imageOverlay(
      `${baseUrl}${definition.image}`,
      bounds
    ).addTo(map);

    map.fitBounds(bounds);

    const markers = definition.markers.map((entry) => {
      const location = locationById.get(entry.locationId);

      const marker = L.marker([entry.y, entry.x], {
        icon: createIcon(entry.icon, markerSize(map.getZoom())),
      }).addTo(map);

      // Use textContent so descriptions and names are never treated as HTML.
      const popup = document.createElement("div");
      const title = document.createElement("strong");
      const summary = document.createElement("p");

      title.textContent = location.name;
      summary.textContent = location.description.summary;

      popup.append(title, summary);
      marker.bindPopup(popup);

      marker.on("click", () => {
        setSelection({
          kind: "location",
          id: entry.locationId,
        });
        setPanelOpen(true);
      });

      return { marker, icon: entry.icon };
    });

    map.on("zoomend", () => {
      const size = markerSize(map.getZoom());

      for (const entry of markers) {
        entry.marker.setIcon(createIcon(entry.icon, size));
      }
    });

    map.on("click", (event) => {
      setCoordinates({
        x: Math.round(event.latlng.lng),
        y: Math.round(event.latlng.lat),
      });
    });

    return () => {
      mapInstance.current = null;
      map.remove();
    };
  }, [definition]);

  function showLocation(id) {
    setSelection({ kind: "location", id });
    setPanelOpen(true);

    const marker = definition.markers.find(
      (entry) => entry.locationId === id
    );

    if (marker) {
      mapInstance.current?.panTo([marker.y, marker.x]);
    }
  }

  function showNPC(id) {
    setSelection({ kind: "npc", id });
    setPanelOpen(true);
  }

  return (
    <main className="campaign-map-page">
      <div
        ref={mapElement}
        className="campaign-map-canvas"
        aria-label={definition.title}
      />

      <a className="campaign-world-link" href={baseUrl}>
        Back to world map
      </a>

      {!panelOpen && (
        <button
          className="campaign-reopen"
          onClick={() => setPanelOpen(true)}
        >
          Open panel
        </button>
      )}

      {panelOpen && (
        <aside className="campaign-panel">
          <div className="campaign-panel-actions">
            {selection && (
              <button onClick={() => setSelection(null)}>
                Overview
              </button>
            )}

            <button onClick={() => setPanelOpen(false)}>
              Close
            </button>
          </div>

          {!selection && (
            <>
              <h1>{definition.title}</h1>

              <ContentDescription
                description={locationById.get(definition.id)?.description}
              />

              <h2>Map guide</h2>

              <ul className="campaign-legend">
                {Object.entries(iconFiles).map(([type, filename]) => (
                  <li key={type}>
                    <img
                      src={`${baseUrl}icons/${filename}`}
                      alt=""
                      width="20"
                      height="20"
                    />
                    {type}
                  </li>
                ))}
              </ul>

              <h2>Locations and nearby shops</h2>

              <ul>
                {overviewLocations.map((location) => (
                  <li key={location.id}>
                    <button onClick={() => showLocation(location.id)}>
                      {location.name}
                    </button>
                  </li>
                ))}
              </ul>

              <h2>NPCs</h2>

              <ul>
                {areaNPCs.map((npc) => (
                  <li key={npc.id}>
                    <button className="campaign-npc-button" onClick={() => showNPC(npc.id)}>
                      <NPCPortrait npc={npc} size="small" />
                      {npc.name}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}

          {selectedLocation && (
            <>
              <h1>{selectedLocation.name}</h1>
              <p>{selectedLocation.kind}</p>

              <ContentDescription
                description={selectedLocation.description}
              />

              {parentLocation && (
                <p>
                  Located in: {" "}
                  <button onClick={() => showLocation(parentLocation.id)}>
                    {parentLocation.name}
                  </button>
                </p>
              )}

              {childLocations.length > 0 && (
                <section>
                  <h2>Places here</h2>
                  <ul>
                    {childLocations.map((location) => (
                      <li key={location.id}>
                        <button onClick={() => showLocation(location.id)}>
                          {location.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <h2>Related NPCs</h2>

              {relatedNPCs.length > 0 ? (
                <ul>
                  {relatedNPCs.map((npc) => (
                    <li key={npc.id}>
                      <button className="campaign-npc-button" onClick={() => showNPC(npc.id)}>
                        <NPCPortrait npc={npc} size="small" />
                        {npc.name}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No NPCs listed yet.</p>
              )}

              {selectedLocation.inventory !== undefined && (
                <>
                  <h2>Inventory</h2>
                  <ShopInventory
                    shop={selectedLocation}
                    items={items}
                  />
                </>
              )}

              <ServiceList services={selectedLocation.services} />
            </>
          )}

          {selectedNPC && (
            <>
              <header className="campaign-npc-profile">
                <NPCPortrait npc={selectedNPC} />
                <h1>{selectedNPC.name}</h1>
              </header>

              <ContentDescription
                description={selectedNPC.description}
              />

              <h2>Associated locations</h2>

              <ul>
                {selectedNPC.locationLinks.map((link) => (
                  <li key={link.locationId}>
                    <button
                      onClick={() => showLocation(link.locationId)}
                    >
                      {locationById.get(link.locationId)?.name}
                    </button>
                    {" — "}
                    {link.role}
                  </li>
                ))}
              </ul>
            </>
          )}

          {selection && !selectedLocation && !selectedNPC && (
            <p>The requested entry could not be found.</p>
          )}

          <section className="campaign-coordinates">
            <h2>Coordinates</h2>
            <p>
              x: {coordinates?.x ?? "—"}
              {" · "}
              y: {coordinates?.y ?? "—"}
            </p>
            <small>Click the map to inspect coordinates.</small>
          </section>
        </aside>
      )}
    </main>
  );
}
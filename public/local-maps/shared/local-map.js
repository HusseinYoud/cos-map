(function () {
  const config = window.LOCAL_MAP_CONFIG;

  if (!config) {
    console.error("LOCAL_MAP_CONFIG is missing.");
    return;
  }

  const basePath = window.location.hostname.endsWith("github.io")
    ? "/cos-map/"
    : "/";

  const backLink = document.getElementById("back-link");
  const infoPanel = document.getElementById("info-panel");
  const panelContent = document.getElementById("panel-content");
  const collapseBtn = document.getElementById("collapse-panel-btn");
  const reopenBtn = document.getElementById("reopen-panel-btn");

  if (backLink) {
    backLink.href = basePath;
  }

  if (collapseBtn && infoPanel && reopenBtn) {
    collapseBtn.addEventListener("click", () => {
      infoPanel.hidden = true;
      reopenBtn.hidden = false;
    });

    reopenBtn.addEventListener("click", () => {
      infoPanel.hidden = false;
      reopenBtn.hidden = true;
    });
  }

  let latestCoords = { x: "-", y: "-" };

  const locations = config.locations || [];
  const npcs = config.npcs || [];

  const locationById = Object.fromEntries(
    locations.map((location) => [location.id, location])
  );

  const npcById = Object.fromEntries(
    npcs.map((npc) => [npc.id, npc])
  );

  function getIconPath(type) {
    switch (type) {
      case "shop":
        return `${basePath}icons/shop-icon.png`;
      case "tavern":
      case "inn":
        return `${basePath}icons/tavern-icon.png`;
      case "church":
        return `${basePath}icons/church-icon.jpg`;
      case "quest":
        return `${basePath}icons/quest-icon.jpg`;
      case "noteworthy":
        return `${basePath}icons/misc-icon.png`;
      case "residence":
        return `${basePath}icons/residence-icon.png`;
      case "misc":
      default:
        return `${basePath}icons/misc-icon.png`;
    }
  }

  function createMarkerIcon(type, size) {
    const haloSize = size;
    const ringSize = Math.round(size * 0.78);
    const coreSize = Math.round(size * 0.5);

    return L.divIcon({
      className: "local-marker-wrapper",
      html: `
        <div class="local-marker" style="width:${size}px; height:${size}px;">
          <div
            class="local-marker-halo"
            style="width:${haloSize}px; height:${haloSize}px;"
          ></div>

          <div
            class="local-marker-ring"
            style="width:${ringSize}px; height:${ringSize}px;"
          ></div>

          <div
            class="local-marker-core"
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

  function getMarkerSize(zoom) {
    const baseSize = 34;
    const scale = Math.pow(1.15, zoom);
    const size = baseSize * scale;
    return Math.max(16, Math.min(52, Math.round(size)));
  }
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function descriptionToHtml(description) {
  if (!description) {
    return "<p>No description available.</p>";
  }

  if (typeof description === "string") {
    return `<p>${escapeHtml(description)}</p>`;
  }

  if (Array.isArray(description)) {
    return description
      .map((block) => {
        if (typeof block === "string") {
          return `<p>${escapeHtml(block)}</p>`;
        }

        if (block.type === "text") {
          return `<p>${escapeHtml(block.text)}</p>`;
        }

        if (block.type === "redacted") {
          if (block.revealed) {
            return `<p>${escapeHtml(block.text)}</p>`;
          }

          const length = block.length ?? Math.min(block.text.length, 80);

          return `
            <p>
              <span class="redacted">${"█".repeat(length)}</span>
            </p>
          `;
        }

        return "";
      })
      .join("");
  }

  return "<p>No description available.</p>";
}
  function renderOverviewPanel() {
    const legendRows = (config.iconLegend || [])
      .map(
        (item) => `
          <tr>
            <td>
              <img
                src="${getIconPath(item.type)}"
                alt="${item.type}"
                style="width:20px; height:20px;"
              />
            </td>
            <td>${item.label}</td>
          </tr>
        `
      )
      .join("");

    const locationItems = locations
      .map(
        (location) => `
          <li>
            <button class="entry-link-button" data-location-id="${location.id}">
              ${location.name}
            </button>
          </li>
        `
      )
      .join("");

    const npcItems = npcs
      .map(
        (npc) => `
          <li>
            <button class="entry-link-button" data-npc-id="${npc.id}">
              ${npc.name}
            </button>
          </li>
        `
      )
      .join("");

    panelContent.innerHTML = `
      <h2>${config.title || "Local Map"}</h2>
      <div class="entry-type">Local Map</div>
      ${descriptionToHtml(config.description || "No description available.")}

      <div class="sub-panel">
        <h3>Map Guide</h3>
        <table class="legend-table">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            ${legendRows}
          </tbody>
        </table>
      </div>

      <div class="sub-panel">
        <h3>Locations</h3>
        ${
          locationItems
            ? `<ul class="entry-list">${locationItems}</ul>`
            : "<p>No locations added yet.</p>"
        }
      </div>

      <div class="sub-panel">
        <h3>NPCs</h3>
        ${
          npcItems
            ? `<ul class="entry-list">${npcItems}</ul>`
            : "<p>No NPCs added yet.</p>"
        }
      </div>

      <div class="sub-panel" id="debug-coordinates">
        <h3>Debug Coordinates</h3>
        <div class="coord-line">x: ${latestCoords.x}</div>
        <div class="coord-line">y: ${latestCoords.y}</div>
        <div class="coord-hint">Click anywhere on the map to inspect coordinates.</div>
      </div>
    `;

    wirePanelButtons();
  }

  function renderLocationPanel(location) {
    const relatedNpcButtons = (location.npcs || [])
      .map((npcId) => {
        const npc = npcById[npcId];
        if (!npc) return "";
        return `
          <li>
            <button class="entry-link-button" data-npc-id="${npc.id}">
              ${npc.name}
            </button>
          </li>
        `;
      })
      .join("");

    panelContent.innerHTML = `
      <button class="back-btn" id="panel-back-btn">Back</button>

      <h2>${location.name}</h2>
      <div class="entry-type">${location.type || "location"}</div>
    ${descriptionToHtml(
    location.longDescription ||
    location.shortDescription ||
    location.description ||
    "No description available."
  )}

      <div class="sub-panel">
        <h3>Related NPCs</h3>
        ${
          relatedNpcButtons
            ? `<ul class="entry-list">${relatedNpcButtons}</ul>`
            : "<p>No NPCs listed yet.</p>"
        }
      </div>

      <div class="sub-panel" id="debug-coordinates">
        <h3>Debug Coordinates</h3>
        <div class="coord-line">x: ${latestCoords.x}</div>
        <div class="coord-line">y: ${latestCoords.y}</div>
        <div class="coord-hint">Click anywhere on the map to inspect coordinates.</div>
      </div>
    `;

    document
      .getElementById("panel-back-btn")
      .addEventListener("click", renderOverviewPanel);

    wirePanelButtons();
  }

  function renderNpcPanel(npc) {
    panelContent.innerHTML = `
      <button class="back-btn" id="panel-back-btn">Back</button>

      <h2>${npc.name}</h2>
      <div class="entry-type">NPC</div>
      ${descriptionToHtml(npc.description || "No description available.")}

      <div class="sub-panel" id="debug-coordinates">
        <h3>Debug Coordinates</h3>
        <div class="coord-line">x: ${latestCoords.x}</div>
        <div class="coord-line">y: ${latestCoords.y}</div>
        <div class="coord-hint">Click anywhere on the map to inspect coordinates.</div>
      </div>
    `;

    document
      .getElementById("panel-back-btn")
      .addEventListener("click", renderOverviewPanel);
  }

  function wirePanelButtons() {
    document.querySelectorAll("[data-location-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const location = locationById[btn.dataset.locationId];
        if (location) renderLocationPanel(location);
      });
    });

    document.querySelectorAll("[data-npc-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const npc = npcById[btn.dataset.npcId];
        if (npc) renderNpcPanel(npc);
      });
    });
  }

  const map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: config.minZoom ?? -2,
    maxZoom: config.maxZoom ?? 3,
  });

  const imageWidth = config.imageWidth;
  const imageHeight = config.imageHeight;
  const bounds = [[0, 0], [imageHeight, imageWidth]];

  L.imageOverlay(config.image, bounds).addTo(map);
  map.fitBounds(bounds);

  const markers = [];

  locations.forEach((entry) => {
    if (entry.x == null || entry.y == null) return;

    const marker = L.marker([entry.y, entry.x], {
      icon: createMarkerIcon(entry.type || "misc", 34),
    }).addTo(map);

    markers.push({
      marker,
      type: entry.type || "misc",
    });

    const popupHtml = `
      <div>
        <h3>${entry.name || "Unnamed location"}</h3>
        <div style="font-size:0.85rem; color:#666; margin-bottom:0.5rem;">
          ${entry.type || "misc"}
        </div>
        <p>${entry.shortDescription || entry.description || "No description available."}</p>
      </div>
    `;

    marker.bindPopup(popupHtml);

    marker.on("click", () => {
      renderLocationPanel(entry);
    });
  });

  function updateMarkerSizes() {
    const zoom = map.getZoom();
    const size = getMarkerSize(zoom);

    markers.forEach(({ marker, type }) => {
      marker.setIcon(createMarkerIcon(type, size));
    });
  }

  updateMarkerSizes();
  map.on("zoomend", updateMarkerSizes);

  map.on("click", (e) => {
    latestCoords = {
      x: Math.round(e.latlng.lng),
      y: Math.round(e.latlng.lat),
    };

    const debugCoordinates = document.getElementById("debug-coordinates");
    if (debugCoordinates) {
      debugCoordinates.innerHTML = `
        <h3>Debug Coordinates</h3>
        <div class="coord-line">x: ${latestCoords.x}</div>
        <div class="coord-line">y: ${latestCoords.y}</div>
        <div class="coord-hint">Latest clicked position on the local map.</div>
      `;
    }
  });

  renderOverviewPanel();
})();
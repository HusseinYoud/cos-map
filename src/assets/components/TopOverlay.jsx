import { useState } from "react";
import { quests } from "../../data/quests/quests";
import { locations } from "../../data/locations";

function getDistance(pointA, pointB) {
  const dx = pointB.x - pointA.x;
  const dy = pointB.y - pointA.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function formatDays(days) {
  if (days == null || Number.isNaN(days)) return "Unknown";
  return Number.isInteger(days) ? `${days}` : `${days.toFixed(1)}`;
}

export default function TopOverlay() {
  const [openPanel, setOpenPanel] = useState(null);
  const [start, setStart] = useState("baroviaVillage");
  const [destination, setDestination] = useState("vallaki");
  const [travelMode, setTravelMode] = useState("onFoot");
  const [travelPace, setTravelPace] = useState("normal");

  const togglePanel = (panelName) => {
    setOpenPanel((prev) => (prev === panelName ? null : panelName));
  };

  const travelLocations = locations.filter(
    (location) => location.x != null && location.y != null
  );

  const referenceStart = travelLocations.find(
    (location) => location.id === "baroviaVillage"
  );
  const referenceEnd = travelLocations.find(
    (location) => location.id === "vallaki"
  );

  const startLocation = travelLocations.find(
    (location) => location.id === start
  );
  const destinationLocation = travelLocations.find(
    (location) => location.id === destination
  );

  const travelModifiers = {
    onFoot: {
      slow: 1.2,
      normal: 1.0,
      fast: 0.8,
    },
    horse: {
      slow: 0.7,
      normal: 0.6,
      fast: 0.5,
    },
  };

  let travelResult = "Unknown";
  let baseDays = null;

  if (
    referenceStart &&
    referenceEnd &&
    startLocation &&
    destinationLocation
  ) {
    if (start === destination) {
      travelResult = "0 days";
    } else {
      const referenceDistance = getDistance(referenceStart, referenceEnd);
      const currentDistance = getDistance(startLocation, destinationLocation);

      baseDays = (currentDistance / referenceDistance) * 5;

      const modifier = travelModifiers[travelMode][travelPace];
      const adjustedDays = baseDays * modifier;

      travelResult = `${formatDays(adjustedDays)} days`;
    }
  }

  return (
    <div className="top-overlay">
      <div className="top-overlay-bar">
        <button onClick={() => togglePanel("quests")}>Quest Log</button>
        <button onClick={() => togglePanel("travel")}>Travel Calculator</button>
        <button onClick={() => togglePanel("journal")}>Party Journal</button>
      </div>

    {openPanel === "quests" && (
      <div className="overlay-panel">
        <h3>Active Quests</h3>

        {quests
          .filter((quest) => quest.status.toLowerCase() === "active")
          .map((quest) => {
            const isRedacted = quest.redacted === true;

            const displayedTitle = isRedacted ? "?" : quest.title;
            const displayedSummary = isRedacted
              ? ["A quest taken/found, but what could it be?"]
              : quest.summary;

            return (
              <details
                key={quest.id}
                className={`quest-entry ${isRedacted ? "quest-redacted" : ""}`}
              >
                <summary>{displayedTitle}</summary>

                <div className="quest-summary">
                  {Array.isArray(displayedSummary) ? (
                    displayedSummary.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  ) : (
                    <p>{displayedSummary}</p>
                  )}
                </div>
              </details>
            );
          })}
      </div>
    )}

      {openPanel === "travel" && (
        <div className="overlay-panel">
          <h3>Travel Calculator</h3>

          <label>
            From
            <select value={start} onChange={(e) => setStart(e.target.value)}>
              {travelLocations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            To
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              {travelLocations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Travel Mode
            <select
              value={travelMode}
              onChange={(e) => setTravelMode(e.target.value)}
            >
              <option value="onFoot">On Foot</option>
              <option value="horse">Horse</option>
            </select>
          </label>

          <label>
            Pace
            <select
              value={travelPace}
              onChange={(e) => setTravelPace(e.target.value)}
            >
              <option value="slow">Slow</option>
              <option value="normal">Normal</option>
              <option value="fast">Fast</option>
            </select>
          </label>

          <p className="travel-result">
            Travel time: <strong>{travelResult}</strong>
          </p>

          {baseDays != null && start !== destination && (
            <p className="travel-result">
              Base time (normal pace on foot):{" "}
              <strong>{formatDays(baseDays)} days</strong>
            </p>
          )}
        </div>
      )}

      {openPanel === "journal" && (
        <div className="overlay-panel">
          <h3>Party Journal</h3>
          <a
            href="https://drive.google.com/drive/u/1/folders/1eOvxP19wPzsDCniXRZ9nW-bJ6_to8Kb1"
            target="_blank"
            rel="noreferrer"
          >
            Open Google Docs
          </a>
        </div>
      )}
    </div>
  );
}
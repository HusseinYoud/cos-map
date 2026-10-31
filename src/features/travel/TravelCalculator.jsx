import { useState } from "react";
import { calculateTravelTime } from "../../domain/travel/calculateTravelTime.js";

function formatDays(days) {
  return Number.isInteger(days)
    ? `${days}`
    : days.toFixed(1);
}

export default function TravelCalculator({ locations, isOpen }) {
  const [start, setStart] = useState("baroviaVillage");
  const [destination, setDestination] = useState("vallaki");
  const [travelMode, setTravelMode] = useState("onFoot");
  const [travelPace, setTravelPace] = useState("normal");

  // Behold formularens tilstand, selv når panelet ikke vises.
  if (!isOpen) {
    return null;
  }

  const travelLocations = locations.filter(
    (location) =>
      Number.isFinite(location.x) &&
      Number.isFinite(location.y)
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

  const result = calculateTravelTime({
    startLocation,
    destinationLocation,
    referenceStart,
    referenceEnd,
    travelMode,
    travelPace,
  });

  const travelResult = result
    ? `${formatDays(result.adjustedDays)} days`
    : "Unknown";

  return (
    <div className="overlay-panel">
      <h3>Travel Calculator</h3>

      <label>
        From
        <select
          value={start}
          onChange={(event) => setStart(event.target.value)}
        >
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
          onChange={(event) => setDestination(event.target.value)}
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
          onChange={(event) => setTravelMode(event.target.value)}
        >
          <option value="onFoot">On Foot</option>
          <option value="horse">Horse</option>
        </select>
      </label>

      <label>
        Pace
        <select
          value={travelPace}
          onChange={(event) => setTravelPace(event.target.value)}
        >
          <option value="slow">Slow</option>
          <option value="normal">Normal</option>
          <option value="fast">Fast</option>
        </select>
      </label>

      <p className="travel-result">
        Travel time: <strong>{travelResult}</strong>
      </p>

      {result && start !== destination && (
        <p className="travel-result">
          Base time (normal pace on foot):{" "}
          <strong>{formatDays(result.baseDays)} days</strong>
        </p>
      )}
    </div>
  );
}
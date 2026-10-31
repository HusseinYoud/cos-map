const REFERENCE_DAYS = 5;

const TRAVEL_MODIFIERS = {
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

function hasCoordinates(location) {
  return (
    location != null &&
    Number.isFinite(location.x) &&
    Number.isFinite(location.y)
  );
}

function getDistance(pointA, pointB) {
  const dx = pointB.x - pointA.x;
  const dy = pointB.y - pointA.y;

  return Math.sqrt(dx * dx + dy * dy);
}

export function calculateTravelTime({
  startLocation,
  destinationLocation,
  referenceStart,
  referenceEnd,
  travelMode,
  travelPace,
}) {
  if (
    !hasCoordinates(startLocation) ||
    !hasCoordinates(destinationLocation) ||
    !hasCoordinates(referenceStart) ||
    !hasCoordinates(referenceEnd)
  ) {
    return null;
  }

  const modifier = TRAVEL_MODIFIERS[travelMode]?.[travelPace];

  if (!Number.isFinite(modifier)) {
    return null;
  }

  const referenceDistance = getDistance(referenceStart, referenceEnd);

  if (referenceDistance <= 0) {
    return null;
  }

  const currentDistance = getDistance(
    startLocation,
    destinationLocation
  );

  const baseDays =
    (currentDistance / referenceDistance) * REFERENCE_DAYS;

  return {
    baseDays,
    adjustedDays: baseDays * modifier,
  };
}
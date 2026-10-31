import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App.jsx";
import LocalMapPage from "./features/maps/LocalMapPage.jsx";
import { maps } from "./content";

import "./index.css";

const parameters = new URLSearchParams(window.location.search);

const mapId = parameters.get("map");
const initialLocationId = parameters.get("place");

const definition = maps.find((map) => map.id === mapId);

function Root() {
  if (mapId && !definition) {
    return (
      <main>
        <h1>Map not found</h1>
        <p>The requested map does not exist.</p>
        <a href={import.meta.env.BASE_URL}>Back to world map</a>
      </main>
    );
  }

  if (definition) {
    return (
      <LocalMapPage
        definition={definition}
        initialLocationId={initialLocationId}
      />
    );
  }

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
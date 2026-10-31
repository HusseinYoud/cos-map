import { useState } from "react";

import { quests } from "../../data/quests/quests.js";
import { locations } from "../../data/locations.js";
import { campaignSettings } from "../../content/campaign-settings.js";

import QuestLog from "../../features/quests/QuestLog.jsx";
import TravelCalculator from "../../features/travel/TravelCalculator.jsx";
import JournalLink from "../../features/party/JournalLink.jsx";

export default function TopOverlay() {
  const [openPanel, setOpenPanel] = useState(null);

  function togglePanel(panelName) {
    setOpenPanel((previousPanel) =>
      previousPanel === panelName ? null : panelName
    );
  }

  return (
    <div className="top-overlay">
      <div className="top-overlay-bar">
        <button onClick={() => togglePanel("quests")}>
          Quest Log
        </button>

        <button onClick={() => togglePanel("travel")}>
          Travel Calculator
        </button>

        <button onClick={() => togglePanel("journal")}>
          Party Journal
        </button>
      </div>

      {openPanel === "quests" && (
        <QuestLog quests={quests} />
      )}

      <TravelCalculator
        locations={locations}
        isOpen={openPanel === "travel"}
      />

      {openPanel === "journal" && (
        <JournalLink journalUrl={campaignSettings.journalUrl} />
      )}
    </div>
  );
}
export default function QuestLog({ quests }) {
  const activeQuests = quests.filter(
    (quest) => quest.status.toLowerCase() === "active"
  );

  return (
    <div className="overlay-panel">
      <h3>Active Quests</h3>

      {activeQuests.map((quest) => {
        const isRedacted = quest.redacted === true;

        const displayedTitle = isRedacted ? "?" : quest.title;

        const displayedSummary = isRedacted
          ? ["A quest taken/found, but what could it be?"]
          : quest.summary;

        return (
          <details
            key={quest.id}
            className={`quest-entry ${
              isRedacted ? "quest-redacted" : ""
            }`}
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
  );
}
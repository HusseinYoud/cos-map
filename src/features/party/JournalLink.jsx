export default function JournalLink({ journalUrl }) {
  return (
    <div className="overlay-panel">
      <h3>Party Journal</h3>

      <a
        href={journalUrl}
        target="_blank"
        rel="noreferrer"
      >
        Open Google Docs
      </a>
    </div>
  );
}
export default function ContentDescription({ description }) {
  if (!description) {
    return <p>No description available.</p>;
  }

  return (
    <div className="content-description">
      {description.summary && <p>{description.summary}</p>}

      {description.blocks.map((block, index) => {
        if (block.kind === "redacted" && !block.revealed) {
          return (
            <p key={index} aria-label="Information not yet revealed">
              <span className="content-hidden">████████████</span>
            </p>
          );
        }

        return (
          <p key={index} style={{ whiteSpace: "pre-wrap" }}>
            {block.markdown}
          </p>
        );
      })}
    </div>
  );
}
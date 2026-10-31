export default function DescriptionRenderer({ description }) { 
  if (!description) {
    return <p>No description available.</p>;
  }

  if (typeof description === "string") {
    return <p>{description}</p>;
  }

  if (Array.isArray(description)) {
    return (
      <div className="description-text">
        {description.map((block, index) => {
          if (typeof block === "string") {
            return <p key={index}>{block}</p>;
          }

          if (block.type === "text") {
            return <p key={index}>{block.text}</p>;
          }

          if (block.type === "redacted") {
            if (block.revealed) {
              return <p key={index}>{block.text}</p>;
            }

            const length = block.length ?? Math.min(block.text.length, 80);

            return (
              <p key={index}>
                <span className="redacted">
                  {"█".repeat(length)}
                </span>
              </p>
            );
          }

          return null;
        })}
      </div>
    );
  }

  return <p>No description available.</p>;
}
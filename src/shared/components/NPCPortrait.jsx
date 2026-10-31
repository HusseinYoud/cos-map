import { useState } from "react";
import { getInitials } from "../utils/initials";
import "./npc-portrait.css";

function PortraitImage({ npc, source, size }) {
  const [failed, setFailed] = useState(false);
  const className = `npc-portrait npc-portrait--${size}`;

  if (!source || failed) {
    return (
      <span className={className} role="img" aria-label={`Portrait unavailable: ${npc.name}`}>
        <span aria-hidden="true">{getInitials(npc.name)}</span>
      </span>
    );
  }

  return (
    <img
      className={className}
      src={source}
      alt={npc.portrait?.alt || npc.name}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export default function NPCPortrait({ npc, size = "large" }) {
  const source = npc.portrait
    ? `${import.meta.env.BASE_URL}${npc.portrait.src}`
    : undefined;

  // A changed source gets fresh loading/error state.
  return <PortraitImage key={`${npc.id}:${source ?? "none"}`} npc={npc} source={source} size={size} />;
}

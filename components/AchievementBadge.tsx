import { memo } from "react";

type Props = {
  title: string;
  description: string;
  icon: string;
  tone?: "green" | "blue" | "gold" | "pink";
  unlocked?: boolean;
};

function AchievementBadge({
  title,
  description,
  icon,
  tone = "green",
  unlocked = true,
}: Props) {
  return (
    <article className={`card achievement-badge ${tone} ${unlocked ? "" : "locked"} fade-in`}>
      <div className="badge-icon">{icon}</div>
      <h3 style={{ marginTop: 14 }}>{title}</h3>
      <p style={{ marginTop: 8 }}>{description}</p>
      <div style={{ marginTop: 14 }}>
        <span className={`badge ${unlocked ? "sun" : ""}`}>
          {unlocked ? "Unlocked" : "Almost there"}
        </span>
      </div>
    </article>
  );
}

export default memo(AchievementBadge);

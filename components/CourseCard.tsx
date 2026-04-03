import Link from "next/link";
import { memo, useMemo } from "react";

type Props = {
  title: string;
  subject: string;
  duration: string;
  level: string;
  progress?: number;
  xp?: string;
  badge?: string;
  tone?: "green" | "blue" | "orange" | "pink";
  href?: string;
};

function CourseCard({
  title,
  subject,
  duration,
  level,
  progress = 72,
  xp = "120 XP",
  badge = "Hot streak",
  tone = "green",
  href = "/courses/python-foundations",
}: Props) {
  const initials = useMemo(
    () =>
      subject
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [subject]
  );

  return (
    <article className={`card course-card tone-${tone} fade-in`}>
      <div className="course-top">
        <span className="course-ribbon">{badge}</span>
        <div className="course-mascot">{initials}</div>
      </div>

      <div className="badge-row">
        <span className="badge">{subject}</span>
        <span className="badge sky">{level}</span>
      </div>

      <div>
        <h3>{title}</h3>
        <p className="course-duration">{duration}</p>
      </div>

      <div>
        <div className="course-footer">
          <span>Progress</span>
          <strong>{progress}%</strong>
        </div>
        <div className="skill-meter">
          <div className="skill-meter-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="course-footer">
        <span className="badge sun">{xp}</span>
        <Link className="btn btn-ghost" href={href}>
          Continue
        </Link>
      </div>
    </article>
  );
}

export default memo(CourseCard);

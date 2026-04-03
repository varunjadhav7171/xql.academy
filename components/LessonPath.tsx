import { memo } from "react";

type LessonStep = {
  title: string;
  description: string;
  reward: string;
  state: "done" | "current" | "locked";
};

type Props = {
  title: string;
  subtitle: string;
  steps: LessonStep[];
  actionLabel?: string;
};

function LessonPath({
  title,
  subtitle,
  steps,
  actionLabel = "View path",
}: Props) {
  return (
    <section className="card lesson-path-card fade-in">
      <div className="lesson-head">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <a className="btn btn-secondary" href="/courses">
          {actionLabel}
        </a>
      </div>

      <div className="lesson-path">
        {steps.map((step, index) => (
          <div key={step.title} className="lesson-node" data-state={step.state}>
            <div className="lesson-orb">{index + 1}</div>
            <div className="lesson-copy">
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
            <span className="lesson-reward">{step.reward}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(LessonPath);

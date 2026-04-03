import AchievementBadge from "@/components/AchievementBadge";
import CourseCard from "@/components/CourseCard";
import LessonPath from "@/components/LessonPath";
import NavBar from "@/components/NavBar";

const steps = [
  {
    title: "Intro recap",
    description: "A quick replay of yesterday's concept cards.",
    reward: "20 XP",
    state: "done" as const,
  },
  {
    title: "Loops and logic",
    description: "Your active lesson with mini-drills and checkpoints.",
    reward: "80 XP",
    state: "current" as const,
  },
  {
    title: "Boss quiz",
    description: "Beat the mixed challenge to claim the chapter badge.",
    reward: "120 XP",
    state: "locked" as const,
  },
];

function StatSvg({ icon }: { icon: "streak" | "xp" | "badge" | "league" }) {
  if (icon === "streak") return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="16" fill="#fff3e0"/>
      <text x="18" y="24" textAnchor="middle" fontSize="18">🔥</text>
    </svg>
  );
  if (icon === "xp") return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="16" fill="#e8f7ff"/>
      <polygon points="18,6 21,14 30,14 23,20 26,28 18,23 10,28 13,20 6,14 15,14" fill="#53b8ff"/>
    </svg>
  );
  if (icon === "badge") return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="16" fill="#fff8e0"/>
      <circle cx="18" cy="15" r="7" fill="#ffd93d" stroke="#e6a800" strokeWidth="1.5"/>
      <rect x="13" y="21" width="10" height="10" rx="2" fill="#ffd93d" stroke="#e6a800" strokeWidth="1.5"/>
      <rect x="11" y="19" width="5" height="8" rx="1" fill="#ff9f43"/>
      <rect x="20" y="19" width="5" height="8" rx="1" fill="#ff9f43"/>
    </svg>
  );
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="16" fill="#efffe0"/>
      <polygon points="18,7 20,13 27,13 21,17 23,24 18,20 13,24 15,17 9,13 16,13" fill="#58cc02"/>
    </svg>
  );
}

export default function Dashboard() {
  return (
    <div className="page-shell page-shell-dashboard">
      <div className="layout">
        <NavBar />

        <section className="dashboard-header fade-in">
          <div>
            <span className="eyebrow">Welcome back, Priya</span>
            <h1 style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", marginTop: 10 }}>
              Your streak is alive. Keep climbing.
            </h1>
            <p>
              You are 1 lesson away from your daily goal and 140 XP away from the next league jump.
            </p>
          </div>
          <a className="btn btn-primary" href="/courses/python-foundations">
            Resume lesson
          </a>
        </section>

        <div className="stat-grid">
          {[
            { value: "6",       label: "day streak",     icon: "streak" as const },
            { value: "1,280",   label: "weekly XP",      icon: "xp"     as const },
            { value: "14/18",   label: "badges earned",  icon: "badge"  as const },
            { value: "Sapphire",label: "current league", icon: "league" as const },
          ].map((item) => (
            <div key={item.label} className="card stat-card fade-in" style={{ display:"flex", flexDirection:"column", gap:8 }}>
              <StatSvg icon={item.icon}/>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="dashboard-main section">
          <div>
            <LessonPath
              title="Today's path"
              subtitle="A focused climb built around quick wins, mastery practice, and one clear reward."
              steps={steps}
              actionLabel="All courses"
            />

            <section className="section">
              <div className="section-title">
                <div>
                  <h2>Daily quests</h2>
                  <p>These small tasks keep the app feeling active and game-like.</p>
                </div>
              </div>

              <div className="quest-grid">
                {[
                  {
                    svg: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" fill="#efffe0"/><path d="M10 17l4 4 8-8" stroke="#58cc02" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                    title: "Finish 1 lesson",
                    copy: "Complete a lesson to protect your streak and collect 80 XP.",
                  },
                  {
                    svg: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" fill="#fff8e0"/><path d="M10 12h12M10 16h8M10 20h10" stroke="#ffd93d" strokeWidth="2.5" strokeLinecap="round"/></svg>,
                    title: "Review mistakes",
                    copy: "Revisit 6 weak answers and sharpen your recall speed.",
                  },
                  {
                    svg: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" fill="#e8f7ff"/><circle cx="16" cy="16" r="6" stroke="#53b8ff" strokeWidth="2.5" fill="none"/><line x1="16" y1="10" x2="16" y2="7" stroke="#53b8ff" strokeWidth="2" strokeLinecap="round"/><line x1="20" y1="16" x2="16" y2="16" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round"/></svg>,
                    title: "Beat the timer",
                    copy: "Clear the speed quiz under 90 seconds for a bonus badge spark.",
                  },
                ].map((quest) => (
                  <article key={quest.title} className="card quest-card fade-in">
                    <div className="quest-icon">{quest.svg}</div>
                    <h3>{quest.title}</h3>
                    <p style={{ marginTop: 8 }}>{quest.copy}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section">
              <div className="section-title">
                <div>
                  <h2>Keep learning</h2>
                  <p>Your active courses now look more like game levels than static cards.</p>
                </div>
              </div>

              <div className="course-grid">
                <CourseCard
                  title="Python Foundations"
                  subject="Programming"
                  duration="Chapter 4 of 6"
                  level="Beginner"
                  progress={72}
                  xp="120 XP"
                  badge="On fire"
                  tone="green"
                />
                <CourseCard
                  title="Modern India"
                  subject="History"
                  duration="Chapter 2 of 5"
                  level="Intermediate"
                  progress={43}
                  xp="90 XP"
                  badge="Story quest"
                  tone="blue"
                />
              </div>
            </section>
          </div>

          <aside className="grid">
            <section className="card streak-card fade-in">
              <span className="badge sun">Current streak</span>
              <div className="streak-ring">
                <strong>6</strong>
              </div>
              <h3 style={{ textAlign: "center" }}>You are on a roll</h3>
              <p style={{ marginTop: 8, textAlign: "center" }}>
                Finish one more lesson today to lock in day seven.
              </p>
            </section>

            <section className="card leaderboard-card fade-in">
              <span className="badge sky">League race</span>
              <h3 style={{ marginTop: 12 }}>This week's leaderboard</h3>
              <div className="leaderboard" style={{ marginTop: 16 }}>
                {[
                  { rank: "1", name: "Arjun", xp: "1,620 XP" },
                  { rank: "2", name: "Priya", xp: "1,280 XP" },
                  { rank: "3", name: "Neha", xp: "1,130 XP" },
                ].map((entry) => (
                  <div key={entry.name} className="leaderboard-item">
                    <div className="rank-dot">{entry.rank}</div>
                    <div style={{ flex: 1 }}>
                      <strong>{entry.name}</strong>
                      <span>{entry.xp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid">
              <AchievementBadge
                title="Speed Solver"
                description="Answer 10 review cards in under a minute."
                icon="SS"
                tone="gold"
              />
              <AchievementBadge
                title="Streak Saver"
                description="Recover a missed day with a comeback lesson."
                icon="SV"
                tone="pink"
              />
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

import CourseCard from "@/components/CourseCard";
import NavBar from "@/components/NavBar";

const courses = [
  {
    title: "Data Structures Sprint",
    subject: "Programming",
    duration: "10 bite-sized lessons",
    level: "Intermediate",
    progress: 61,
    xp: "140 XP",
    badge: "Most played",
    tone: "green" as const,
  },
  {
    title: "Microeconomics Basics",
    subject: "Commerce",
    duration: "8 practical drills",
    level: "Beginner",
    progress: 34,
    xp: "90 XP",
    badge: "New path",
    tone: "blue" as const,
  },
  {
    title: "Thermodynamics Lab",
    subject: "Engineering",
    duration: "11 challenge rounds",
    level: "Advanced",
    progress: 49,
    xp: "180 XP",
    badge: "Boss mode",
    tone: "orange" as const,
  },
  {
    title: "Creative Writing Flow",
    subject: "English",
    duration: "7 story prompts",
    level: "Intermediate",
    progress: 76,
    xp: "110 XP",
    badge: "Hot streak",
    tone: "pink" as const,
  },
];

export default function Courses() {
  return (
    <div className="page-shell page-shell-courses">
      <div className="layout">
        <NavBar />

        <section className="search-shell fade-in">
          <span className="eyebrow">Course arena</span>
          <h1>Choose the next path worth chasing.</h1>
          <p>
            Browse courses that feel like levels: clear progress, visible rewards, and a strong next step.
          </p>

          <div className="search-bar">
            <input placeholder="Search Python, economics, algebra..." />
            <button className="btn btn-secondary" type="button">
              Search
            </button>
          </div>

          <div className="filter-bank">
            {[
              "Quick wins",
              "Exam prep",
              "Beginner friendly",
              "High XP",
              "Creative",
            ].map((item) => (
              <span key={item} className="filter-pill">
                {item}
              </span>
            ))}
          </div>
        </section>

        <div className="courses-layout">
          <aside className="card filter-sidebar fade-in">
            <h3>Filter your quest</h3>
            <p style={{ marginTop: 10 }}>These are styled like Duolingo chips rather than heavy old-school forms.</p>

            <div style={{ marginTop: 18 }}>
              <strong>Subject</strong>
              <div className="chip-list" style={{ marginTop: 12 }}>
                {[
                  "Programming",
                  "Science",
                  "History",
                  "Commerce",
                  "Engineering",
                  "Language",
                ].map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 22 }}>
              <strong>Difficulty</strong>
              <div className="chip-list" style={{ marginTop: 12 }}>
                {[
                  ["Beginner", "sun"],
                  ["Intermediate", "sky"],
                  ["Advanced", "rose"],
                ].map(([item, tone]) => (
                  <span key={item} className={`badge ${tone}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card reward-card" style={{ marginTop: 22 }}>
              <span className="badge sun">Weekly reward</span>
              <h3 style={{ marginTop: 12 }}>Finish 3 courses this week</h3>
              <p style={{ marginTop: 8 }}>Unlock the Marathon Mind badge and 250 bonus XP.</p>
            </div>
          </aside>

          <main>
            <section className="section" style={{ marginTop: 0 }}>
              <div className="section-title">
                <div>
                  <h2>Popular right now</h2>
                  <p>Courses tuned for strong progress feedback, rewards, and playful momentum.</p>
                </div>
              </div>

              <div className="course-grid">
                {courses.map((course) => (
                  <CourseCard key={course.title} {...course} />
                ))}
              </div>
            </section>

            <section className="section">
              <div className="quest-grid">
                {[
                  {
                    icon: "XP",
                    title: "High-XP paths",
                    copy: "Stack bonus points faster with courses designed around daily completions.",
                  },
                  {
                    icon: "BD",
                    title: "Badge ladders",
                    copy: "Every course has visible milestone rewards so progress always feels alive.",
                  },
                  {
                    icon: "TM",
                    title: "Short sessions",
                    copy: "Most lessons are built to fit into a 5 to 8 minute rhythm.",
                  },
                ].map((item) => (
                  <article key={item.title} className="card quest-card fade-in">
                    <div className="quest-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p style={{ marginTop: 8 }}>{item.copy}</p>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

import NavBar from "@/components/NavBar";

export default function CourseDetail() {
  return (
    <div className="page-shell page-shell-detail">
      <div className="layout">
        <NavBar />
        <section className="course-detail-grid">
          <div className="card course-detail-main fade-in">
            <div className="video-stage">
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "grid",
                  placeItems: "center",
                  color: "#fff",
                }}
              >
                Video Player
              </div>
            </div>
            <h2 style={{ marginTop: 16 }}>Lesson Title</h2>
            <p>Concise lesson description with key outcomes and resources.</p>
            <div className="card course-notes-card" style={{ marginTop: 16 }}>
              <h3>Notes</h3>
              <p>Summaries, key formulas, and highlights live here.</p>
            </div>
          </div>

          <aside className="card course-chapters-card fade-in" style={{ height: "fit-content" }}>
            <h3>Chapters</h3>
            <ol style={{ paddingLeft: 16, marginTop: 12, display: "grid", gap: 8 }}>
              {["Intro", "Concepts", "Examples", "Quiz"].map((c, i) => (
                <li
                  key={c}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{c}</span>
                  <span className="badge" style={{ background: "rgba(83,184,255,0.16)" }}>
                    {(i + 1) * 10}%
                  </span>
                </li>
              ))}
            </ol>
          </aside>
        </section>
      </div>
    </div>
  );
}

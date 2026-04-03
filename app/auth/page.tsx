export default function Auth() {
  return (
    <div className="page-shell page-shell-auth">
      <div className="layout" style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <div className="card auth-simple-card fade-in" style={{ width: "min(420px, 100%)" }}>
          <h2 style={{ textAlign: "center" }}>Welcome to XQL</h2>
          <p style={{ textAlign: "center", marginTop: 4 }}>Login or create your account</p>
          <form className="grid" style={{ gap: 12, marginTop: 16 }}>
            <input
              style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #E5E7EB" }}
              placeholder="Email"
            />
            <input
              type="password"
              style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #E5E7EB" }}
              placeholder="Password"
            />
            <button className="btn btn-primary" type="submit">
              Continue
            </button>
            <button className="btn btn-secondary" type="button">
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

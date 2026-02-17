export default function Home() {
  const sections = [
    {
      title: "Golden Knowledge Library",
      subtitle: "A curated archive of breed foundations, health, training, senior care, and end-of-life guidance.",
      href: "/knowledge",
    },
    {
      title: "The Golden Registry",
      subtitle: "Publish a dignified Chronicle for your Golden—not a profile, a permanent record.",
      href: "/registry",
    },
    {
      title: "Care Plan Studio",
      subtitle: "Create a personalized care plan with feeding, exercise, grooming, and preventative screening guidance.",
      href: "/care-plan",
    },
    {
      title: "Memory Book Press",
      subtitle: "Select highlights from a Chronicle and export an elegant digital or print-ready book.",
      href: "/memory-book",
    },
  ];

  return (
    <>
      <header style={{ borderBottom: "1px solid rgba(217,164,65,0.2)", paddingBottom: "2.5rem", marginBottom: "2.5rem" }}>
        <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.25em", color: "#6a4b2a", opacity: 0.7 }}>
          A Heritage Registry
        </p>
        <h1 style={{ marginTop: "0.5rem", fontSize: "2.25rem", fontFamily: "Georgia, serif", fontWeight: 600, color: "#3b2a1a" }}>
          Golden Chronicle
        </h1>
        <p style={{ marginTop: "0.75rem", maxWidth: "36rem", fontSize: "0.95rem", lineHeight: 1.6, color: "#6a4b2a" }}>
          A modern publishing house and registry devoted exclusively to Golden Retrievers, preserving full life stories with warmth, dignity, and care.
        </p>
      </header>

      <section style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {sections.map((section) => (
          <a
            key={section.title}
            href={section.href}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              border: "1px solid rgba(217,164,65,0.25)",
              backgroundColor: "rgba(252,247,238,0.8)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div>
              <h2 style={{ fontSize: "1.25rem", fontFamily: "Georgia, serif", fontWeight: 600, color: "#3b2a1a" }}>
                {section.title}
              </h2>
              <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", lineHeight: 1.6, color: "#6a4b2a" }}>
                {section.subtitle}
              </p>
            </div>
            <p style={{ marginTop: "1rem", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "#d9a441" }}>
              Enter →
            </p>
          </a>
        ))}
      </section>

      <footer style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(217,164,65,0.15)" }}>
        <p style={{ maxWidth: "36rem", fontSize: "0.75rem", lineHeight: 1.6, color: "#6a4b2a" }}>
          Golden Chronicle is not a social feed. There are no comments, reactions, or chaotic timelines. Each Chronicle is edited, structured, and preserved as a published biography—a dignified record of an extraordinary companion.
        </p>
      </footer>
    </>
  );
}

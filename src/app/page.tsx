import Image from "next/image";

export default function Home() {
  const sections = [
    {
      title: "Golden Knowledge Library",
      subtitle: "A curated archive of breed foundations, health, training, senior care, and end-of-life guidance.",
      href: "/knowledge",
      icon: "📚",
    },
    {
      title: "The Golden Registry", 
      subtitle: "Publish a dignified Chronicle for your Golden—not a profile, a permanent record.",
      href: "/registry",
      icon: "✨",
    },
    {
      title: "Care Plan Studio",
      subtitle: "Create a personalized care plan with feeding, exercise, grooming, and preventative screening guidance.",
      href: "/care-plan",
      icon: "💛",
    },
    {
      title: "Memory Book Press",
      subtitle: "Select highlights from a Chronicle and export an elegant digital or print-ready book.",
      href: "/memory-book",
      icon: "📖",
    },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <header style={{ 
        textAlign: "center", 
        paddingTop: "3rem",
        paddingBottom: "3rem",
        borderBottom: "2px solid rgba(217,164,65,0.3)",
        marginBottom: "3rem",
      }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <div style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid #d9a441",
            boxShadow: "0 8px 32px rgba(217,164,65,0.3)",
            background: "#fcf7ee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Image
              src="/Golden-Chronicle-logo.png"
              alt="Golden Chronicle"
              width={120}
              height={120}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        <p style={{ 
          fontSize: "0.8rem", 
          textTransform: "uppercase", 
          letterSpacing: "0.35em", 
          color: "#d9a441",
          fontWeight: 600,
          marginBottom: "0.75rem",
        }}>
          A Heritage Registry for Golden Retrievers
        </p>

        <h1 style={{ 
          fontSize: "3rem", 
          fontFamily: "Georgia, serif", 
          fontWeight: 700, 
          color: "#3b2a1a",
          margin: "0 0 1rem 0",
        }}>
          Golden Chronicle
        </h1>

        <div style={{
          width: "80px",
          height: "3px",
          background: "linear-gradient(90deg, transparent, #d9a441, transparent)",
          margin: "1.5rem auto",
        }} />

        <p style={{ 
          maxWidth: "600px", 
          margin: "0 auto",
          fontSize: "1.1rem", 
          lineHeight: 1.8, 
          color: "#6a4b2a",
        }}>
          A modern publishing house and registry devoted exclusively to Golden Retrievers—preserving full life stories with warmth, dignity, and timeless care.
        </p>
      </header>

      <section style={{ 
        display: "grid", 
        gap: "1.5rem", 
        gridTemplateColumns: "repeat(2, 1fr)",
        maxWidth: "900px",
        margin: "0 auto 3rem auto",
        padding: "0 1rem",
      }}>
        {sections.map((section) => (
          <a
            key={section.title}
            href={section.href}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
              borderRadius: "1rem",
              border: "2px solid rgba(217,164,65,0.25)",
              backgroundColor: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              color: "inherit",
              boxShadow: "0 4px 20px rgba(59,42,26,0.08)",
            }}
          >
            <span style={{ fontSize: "2rem", marginBottom: "1rem" }}>{section.icon}</span>
            <h2 style={{ 
              fontSize: "1.35rem", 
              fontFamily: "Georgia, serif", 
              fontWeight: 600, 
              color: "#3b2a1a",
              marginBottom: "0.75rem",
            }}>
              {section.title}
            </h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#6a4b2a", flex: 1 }}>
              {section.subtitle}
            </p>
            <div style={{
              marginTop: "1.25rem",
              paddingTop: "1rem",
              borderTop: "1px solid rgba(217,164,65,0.2)",
            }}>
              <span style={{ 
                fontSize: "0.8rem", 
                fontWeight: 600, 
                textTransform: "uppercase", 
                letterSpacing: "0.15em", 
                color: "#d9a441",
              }}>
                Explore →
              </span>
            </div>
          </a>
        ))}
      </section>

      <section style={{
        maxWidth: "700px",
        margin: "0 auto 3rem auto",
        padding: "2.5rem",
        textAlign: "center",
        background: "linear-gradient(135deg, rgba(217,164,65,0.1) 0%, rgba(252,247,238,0.5) 100%)",
        borderRadius: "1rem",
        border: "1px solid rgba(217,164,65,0.2)",
      }}>
        <p style={{
          fontSize: "1.15rem",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          lineHeight: 1.8,
          color: "#3b2a1a",
          margin: 0,
        }}>
          "Golden Chronicle is not a social feed. There are no comments, reactions, or chaotic timelines. Each Chronicle is edited, structured, and preserved as a published biography—a dignified record of an extraordinary companion."
        </p>
      </section>

      <footer style={{
        textAlign: "center",
        padding: "2rem 1rem",
        borderTop: "1px solid rgba(217,164,65,0.2)",
      }}>
        <p style={{ fontSize: "0.8rem", color: "#6a4b2a", opacity: 0.7 }}>
          © 2024 Golden Chronicle. For extraordinary companions.
        </p>
      </footer>
    </div>
  );
}

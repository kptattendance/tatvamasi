export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
      {/* Hero / Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">About Tatwamasi</h1>
        <p className="mt-2 text-lg text-gray-600">
          Serving with purpose, compassion & community empowerment.
        </p>
      </div>

      {/* Who We Are */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          Tatwamasi is a community-driven nonprofit organization founded on the
          belief that every human being deserves dignity, opportunity, and
          support. Inspired by the profound meaning of its name —{" "}
          <span className="italic">“You are that”</span> — Tatwamasi reflects
          the idea that we are all connected, and through shared effort, we can
          uplift one another.
        </p>
      </div>

      {/* Our Mission */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to empower individuals and communities through
          education, environmental awareness, compassionate service, and
          practical support. We work to bridge gaps by connecting those in need
          with those who are willing and able to help — sustainably,
          respectfully, and with transparency.
        </p>
      </div>

      {/* What We Do */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">What We Do</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            📘 Support students to access quality education and study resources
          </li>
          <li>🌱 Promote environmental awareness and sustainable practices</li>
          <li>❤️ Spread kindness through community outreach and care</li>
          <li>
            🤝 Bridge the gap between people in need and those who can help
          </li>
        </ul>
      </div>

      {/* Our Values */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Our Core Values</h2>
        <p className="text-gray-700 leading-relaxed">
          At Tatwamasi, we are guided by compassion, integrity, inclusivity, and
          accountability. We strive to serve with humility and respect, honoring
          the dignity of every individual and community we engage with.
        </p>
      </div>

      {/* Join Us CTA */}
      <div className="text-center mt-8">
        <a
          href="/contact"
          className="px-6 py-3 bg-accent text-gray-900 font-semibold rounded-full hover:brightness-95 transition"
        >
          Join Our Mission
        </a>
      </div>
    </section>
  );
}

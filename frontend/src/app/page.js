export default function HomePage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
        Serving Humanity with Compassion
      </h1>

      <p className="mt-6 max-w-2xl text-gray-600 text-lg">
        Tatwamasi is a non-profit initiative dedicated to education,
        environmental awareness, kindness, and connecting those in need with
        those who can help.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/contact"
          className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:opacity-90 transition"
        >
          Get Help
        </a>

        <a
          href="/contact"
          className="px-6 py-3 rounded-full bg-accent text-gray-900 font-semibold hover:brightness-95 transition"
        >
          Join as Volunteer
        </a>
      </div>
    </section>
  );
}

export default function JoinUsPage() {
  return (
    <section className="relative">
      {/* HERO */}
      <div className="bg-primary text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join Us in Making a Difference
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-white/90">
          Tatwamasi believes that meaningful change happens when compassionate
          people come together. Your time, skills, and kindness can transform
          lives.
        </p>
      </div>

      {/* WHY JOIN */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center text-primary mb-12">
          Why Join Tatwamasi?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Serve with Purpose</h3>
            <p className="text-gray-600 text-sm">
              Be part of initiatives that genuinely uplift students,
              communities, and the environment.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-2">Create Real Impact</h3>
            <p className="text-gray-600 text-sm">
              Every contribution—big or small—helps build a more compassionate
              and sustainable society.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Grow as a Human</h3>
            <p className="text-gray-600 text-sm">
              Learn, connect, and grow through service, empathy, and shared
              responsibility.
            </p>
          </div>
        </div>
      </div>

      {/* HOW YOU CAN JOIN */}
      <div className="bg-soft py-20 px-6">
        <h2 className="text-3xl font-semibold text-center text-primary mb-12">
          How You Can Be Part of Tatwamasi
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow p-8">
            <h3 className="text-2xl font-semibold mb-3">🙋 Volunteer</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Share your time and skills to support students, participate in
              environmental initiatives, or help with community outreach
              programs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-8">
            <h3 className="text-2xl font-semibold mb-3">❤️ Support a Cause</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Contribute resources, knowledge, or financial support to help
              Tatwamasi continue its mission with transparency and integrity.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-8">
            <h3 className="text-2xl font-semibold mb-3">🎓 Mentor & Guide</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Guide students through academic and career challenges by sharing
              your experience and encouragement.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-8">
            <h3 className="text-2xl font-semibold mb-3">🌍 Partner With Us</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Institutions, organizations, and individuals can collaborate with
              us to expand reach and multiply impact.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          Your Journey of Kindness Starts Here
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          When you join Tatwamasi, you don’t just help others — you become part
          of a movement rooted in compassion, responsibility, and hope.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-full bg-accent text-gray-900 font-semibold text-lg hover:brightness-95 transition shadow"
        >
          Join Tatwamasi Today
        </a>
      </div>
    </section>
  );
}

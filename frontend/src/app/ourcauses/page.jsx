export default function OurCausesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">Our Causes</h1>
        <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
          At Tatwamasi, our causes are driven by compassion, responsibility, and
          the belief that meaningful change begins with collective effort.
        </p>
      </div>

      {/* Cause 1 */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-3">
            📘 Education Support
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Education is the foundation of empowerment. Tatwamasi works to
            support students from underserved communities by providing academic
            guidance, learning resources, mentorship, and moral support. We
            believe that no student should be denied education due to financial
            or social barriers.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Academic guidance and mentoring</li>
            <li>• Learning materials and study support</li>
            <li>• Awareness about educational opportunities</li>
            <li>• Encouraging lifelong learning</li>
          </ul>
        </div>
      </div>

      {/* Cause 2 */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 bg-white shadow rounded-lg p-6">
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Tree plantation drives</li>
            <li>• Cleanliness and awareness campaigns</li>
            <li>• Promoting sustainable practices</li>
            <li>• Environmental education for youth</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            🌍 Environmental Awareness
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Protecting the environment is a shared responsibility. Tatwamasi
            actively promotes environmental awareness through community
            programs, tree plantation initiatives, cleanliness drives, and
            education on sustainable living to ensure a healthier planet for
            future generations.
          </p>
        </div>
      </div>

      {/* Cause 3 */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-3">
            🤝 Spreading Kindness & Compassion
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Kindness has the power to transform lives. Through small but
            meaningful acts of compassion, Tatwamasi strives to bring hope,
            dignity, and emotional support to individuals and families facing
            hardship. We believe empathy is the strongest force for change.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Community outreach initiatives</li>
            <li>• Emotional and moral support</li>
            <li>• Helping individuals in distress</li>
            <li>• Encouraging volunteerism</li>
          </ul>
        </div>
      </div>

      {/* Cause 4 */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 bg-white shadow rounded-lg p-6">
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Connecting donors with beneficiaries</li>
            <li>• Transparent support initiatives</li>
            <li>• Needs-based assistance</li>
            <li>• Building trusted networks</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            🌉 Bridging the Gap Between Needy & Providers
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Tatwamasi acts as a bridge between people who need support and those
            who are willing to help. By creating trusted connections, we ensure
            that assistance reaches the right hands efficiently, ethically, and
            with accountability.
          </p>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="text-center pt-10">
        <p className="text-gray-700 mb-4">
          Together, these causes define our commitment to building a
          compassionate and inclusive society.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-full bg-accent text-gray-900 font-semibold hover:brightness-95 transition"
        >
          Support Our Causes
        </a>
      </div>
    </section>
  );
}

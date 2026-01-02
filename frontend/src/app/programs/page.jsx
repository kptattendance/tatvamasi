export default function ProgramsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">Our Programs</h1>
        <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
          Tatwamasi’s programs are designed to create sustainable impact through
          education, environmental responsibility, compassion, and community
          collaboration.
        </p>
      </div>

      {/* Program 1 */}
      <div className="bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-semibold text-primary mb-3">
          📘 Student Support & Mentorship Program
        </h2>
        <p className="text-gray-700 leading-relaxed">
          This program focuses on supporting students from economically and
          socially disadvantaged backgrounds. Through mentorship, academic
          guidance, and access to learning resources, Tatwamasi aims to help
          students continue their education with confidence and motivation.
        </p>
        <ul className="mt-4 space-y-2 text-gray-700 text-sm">
          <li>• Academic mentoring and guidance</li>
          <li>• Awareness about scholarships and opportunities</li>
          <li>• Study material and learning support</li>
          <li>• Motivation and career awareness sessions</li>
        </ul>
      </div>

      {/* Program 2 */}
      <div className="bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-semibold text-primary mb-3">
          🌍 Environmental Awareness & Sustainability Program
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Tatwamasi conducts environmental awareness initiatives to encourage
          responsible and sustainable living. The program emphasizes community
          participation in protecting natural resources and promoting
          eco-friendly practices.
        </p>
        <ul className="mt-4 space-y-2 text-gray-700 text-sm">
          <li>• Tree plantation and green drives</li>
          <li>• Cleanliness and waste-management awareness</li>
          <li>• Educational sessions on sustainability</li>
          <li>• Youth and community engagement activities</li>
        </ul>
      </div>

      {/* Program 3 */}
      <div className="bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-semibold text-primary mb-3">
          🤝 Community Care & Kindness Initiative
        </h2>
        <p className="text-gray-700 leading-relaxed">
          This initiative focuses on spreading compassion and emotional support
          within communities. Through outreach activities and volunteer
          engagement, Tatwamasi aims to bring dignity, hope, and encouragement
          to individuals facing hardship.
        </p>
        <ul className="mt-4 space-y-2 text-gray-700 text-sm">
          <li>• Community outreach and support activities</li>
          <li>• Assistance to individuals in need</li>
          <li>• Volunteer-led kindness initiatives</li>
          <li>• Promoting empathy and social responsibility</li>
        </ul>
      </div>

      {/* Program 4 */}
      <div className="bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-semibold text-primary mb-3">
          🌉 Support Bridge Program
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The Support Bridge Program connects individuals or families in need
          with donors, volunteers, and service providers. Tatwamasi ensures that
          assistance is delivered transparently, ethically, and based on genuine
          requirements.
        </p>
        <ul className="mt-4 space-y-2 text-gray-700 text-sm">
          <li>• Identifying genuine needs</li>
          <li>• Connecting helpers with beneficiaries</li>
          <li>• Ensuring responsible and transparent support</li>
          <li>• Building long-term community trust</li>
        </ul>
      </div>

      {/* Closing CTA */}
      <div className="text-center pt-10">
        <p className="text-gray-700 mb-4 max-w-3xl mx-auto">
          Through these programs, Tatwamasi strives to create meaningful and
          lasting impact by empowering individuals and strengthening
          communities.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-full bg-accent text-gray-900 font-semibold hover:brightness-95 transition"
        >
          Get Involved
        </a>
      </div>
    </section>
  );
}

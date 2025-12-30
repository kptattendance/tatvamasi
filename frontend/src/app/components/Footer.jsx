import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Tatwamasi</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            Tatwamasi means <span className="italic">“You are that”</span>. We
            serve society by supporting education, creating environmental
            awareness, spreading kindness, and connecting those in need with
            those who can help.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/causes" className="hover:underline">
                Our Causes
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:underline">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* What We Do */}
        <div>
          <h4 className="font-semibold mb-4">What We Do</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>📘 Help Students Study</li>
            <li>🌍 Environmental Awareness</li>
            <li>🤝 Spread Kindness</li>
            <li>🌉 Bridge Needy & Providers</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Get In Touch</h4>
          <p className="text-sm text-gray-200">📍 Karnataka, India</p>
          <p className="text-sm text-gray-200 mt-2">
            ✉️ tatwamasi.ngo@gmail.com
          </p>
          <p className="text-sm text-gray-200 mt-2">
            🤍 Serving with compassion
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Tatwamasi. Built with purpose and kindness.
      </div>
    </footer>
  );
}

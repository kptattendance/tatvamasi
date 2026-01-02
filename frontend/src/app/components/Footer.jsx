import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 tracking-wide">
            Tatwamasi
          </h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Tatwamasi means{" "}
            <span className="italic text-white">“You are that”</span>. We serve
            society by supporting education, creating environmental awareness,
            spreading kindness, and connecting those in need with those who can
            help.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              { label: "About Us", href: "/about" },
              { label: "Our Causes", href: "/causes" },
              { label: "Programs", href: "/programs" },
              { label: "Events", href: "/events" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* What We Do */}
        <div>
          <h4 className="font-semibold mb-4 text-white">What We Do</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>📘 Helping students learn</li>
            <li>🌍 Environmental awareness</li>
            <li>🤝 Spreading kindness</li>
            <li>🌉 Bridging needy & providers</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Get In Touch</h4>
          <p className="text-sm text-white/80">📍 Karnataka, India</p>
          <p className="text-sm text-white/80 mt-2">
            ✉️ tatwamasi.ngo@gmail.com
          </p>
          <p className="text-sm text-white/70 mt-4 italic">
            🤍 Serving with compassion
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Tatwamasi. Built with purpose and kindness.
      </div>
    </footer>
  );
}

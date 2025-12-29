import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-tan py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-mint">
              Susan M. Brown
            </h3>
            <p className="text-tan/80">
              Trauma-informed workshop facilitator dedicated to creating safe spaces for healing and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mint">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-tan/80 hover:text-mint transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-tan/80 hover:text-mint transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-tan/80 hover:text-mint transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-tan/80 hover:text-mint transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mint">Get In Touch</h4>
            <p className="text-tan/80 mb-2">
              Ready to begin your healing journey?
            </p>
            <Link
              href="/book"
              className="inline-block bg-mint text-white px-6 py-2 rounded-full hover:bg-mint/90 transition-all duration-300 font-medium shadow-md mt-2"
            >
              Book a Session
            </Link>
          </div>
        </div>

        <div className="border-t border-tan/20 mt-8 pt-8 text-center text-tan/60">
          <p>&copy; {currentYear} Susan M. Brown. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

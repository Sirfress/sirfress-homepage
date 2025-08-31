// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-background text-textLight p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="text-primary font-bold mb-2">Sirfress</h4>
          <p>Building digital solutions with creativity and technology.</p>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li className="hover:text-interactive">Services</li>
            <li className="hover:text-interactive">About Us</li>
            <li className="hover:text-interactive">Blogs</li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-2">
            {/* Social Icons */}
          </div>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-2">Subscribe</h4>
          <input
            type="email"
            placeholder="Your email"
            className="bg-background border border-primary text-textLight p-2 rounded w-full"
          />
          <button className="bg-primary hover:bg-interactive mt-2 px-4 py-2 rounded w-full">
            Subscribe
          </button>
        </div>
      </div>
      <div className="text-center mt-10 text-sm">© 2025 Sirfress. All Rights Reserved.</div>
    </footer>
  )
}

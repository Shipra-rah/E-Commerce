export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 rounded-tr-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">ShopName</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Premium products with the best quality. Elevate your lifestyle with us.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Shop</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <form className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-black text-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-5">
            <a href="#" className="text-gray-400 hover:text-white transition">🌐</a>
            <a href="#" className="text-gray-400 hover:text-white transition">📘</a>
            <a href="#" className="text-gray-400 hover:text-white transition">🐦</a>
            <a href="#" className="text-gray-400 hover:text-white transition">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ShopName. All rights reserved.
      </div>
    </footer>
  );
}

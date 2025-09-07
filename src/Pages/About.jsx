import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center px-6 md:px-20 py-12 bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="max-w-5xl text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to <span className="font-semibold">ShopEase</span>, your trusted
          destination for fashion, lifestyle, and everything in between.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-5xl grid md:grid-cols-2 gap-10 items-center mb-16">
        <img
          src="https://via.placeholder.com/500x350?text=Our+Story"
          alt="Our Story"
          className="rounded-2xl shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            We started with a simple vision: to bring high-quality, affordable, and
            trendy fashion to everyone. What began as a small passion project has
            now become a growing platform trusted by thousands of happy customers.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          At ShopEase, we believe fashion should be accessible, sustainable, and
          enjoyable. Our mission is to connect people with products they’ll love
          while supporting local and global artisans.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">
              Each item is carefully selected for durability, comfort, and style.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">
              We cut the middleman to give you the best value without compromise.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p className="text-gray-600">
              24/7 support, hassle-free returns, and a team that cares.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <h3 className="text-3xl font-bold text-black">10K+</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-black">500+</h3>
          <p className="text-gray-600">Products</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-black">50+</h3>
          <p className="text-gray-600">Brands</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-black">24/7</h3>
          <p className="text-gray-600">Support</p>
        </div>
      </section>
    </div>
  );
};

export default About;

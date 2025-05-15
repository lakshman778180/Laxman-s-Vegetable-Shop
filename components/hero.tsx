import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-green-50">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Fresh Vegetables <br />
              <span className="text-green-600">Delivered to Your Door</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover the freshest, locally-sourced vegetables from Laxman's
              shop. Now available online for convenient home delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="bg-white hover:bg-gray-100 text-green-600 font-bold py-3 px-6 rounded-lg shadow-md border border-green-200 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/vegetables.jpg?height=500&width=800"
              alt="Fresh vegetables"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-12 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-500 text-3xl mb-3">🌱</div>
            <h3 className="font-bold text-lg mb-2">Farm Fresh</h3>
            <p className="text-gray-600">
              Vegetables sourced directly from local farms to ensure maximum
              freshness.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-500 text-3xl mb-3">🚚</div>
            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Same-day delivery for orders placed before 2 PM in your area.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-500 text-3xl mb-3">💯</div>
            <h3 className="font-bold text-lg mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">
              Not satisfied with the quality? We offer a 100% money-back
              guarantee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

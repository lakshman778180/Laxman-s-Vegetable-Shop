export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About Ramesh's Vegetable Shop</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-4">
          Welcome to Ramesh's Vegetable Shop, your trusted source for fresh, locally-sourced vegetables since 2010.
        </p>
        <p className="mb-4">
          What started as a small roadside stall has now grown into a beloved community fixture, known for quality
          produce and exceptional service.
        </p>
        <p className="mb-4">At Ramesh's, we believe in:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Sourcing directly from local farmers</li>
          <li>Ensuring freshness and quality in every item</li>
          <li>Supporting sustainable farming practices</li>
          <li>Providing fair prices for both farmers and customers</li>
        </ul>
        <p>
          We're excited to bring our shop online, making it even easier for you to enjoy the freshest vegetables
          delivered right to your doorstep.
        </p>
      </div>
    </div>
  )
}


import React from 'react'

const FreeTrial = () => {
  return (
    <section className="relative bottom-20 md:bottom-0 py-6 md:py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Start Your Free Trial Today
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600">
          Get started with a 14-day free trial. No credit card required.
        </p>
        <button className="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
          Get Started for Free
        </button>
      </div>
    </section>
  )
}

export default FreeTrial
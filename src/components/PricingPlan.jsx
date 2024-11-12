import React from 'react'

const PricingPlan = () => {
  return (
    <div>
      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Designed for business teams like yours</h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Pricing card 1 */}
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-xl xl:p-8">
              <h3 class="mb-4 text-2xl font-semibold">Basic</h3>
              <p class="font-light text-gray-500 sm:text-lg">Best option for personal use & for your next project.</p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold text-violet-600">$29</span>
                <span class="text-gray-500">/month</span>
              </div>

              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Individual configuration</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Team size: <span class="font-semibold">1 developer</span></span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Premium support: <span class="font-semibold">6 months</span></span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Free updates: <span class="font-semibold">6 months</span></span>
                </li>
              </ul>
              <a href="#" class="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-violet-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Purchase Now</a>
            </div>

            {/* Pricing card 2 */}
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-xl xl:p-8">
              <h3 class="mb-4 text-2xl font-semibold">Standard</h3>
              <p class="font-light text-gray-500 sm:text-lg">Relevant for multiple users, extended & premium support.</p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold  text-violet-600">$99</span>
                <span class="text-gray-500">/month</span>
              </div>
              <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Individual configuration</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Team size: <span class="font-semibold">1 developer</span></span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Premium support: <span class="font-semibold">6 months</span></span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Free updates: <span class="font-semibold">6 months</span></span>
                </li>
              </ul>
              <a href="#" class="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-violet-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Purchase Now</a>
            </div>

            {/* Pricing card 3 */}
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-xl xl:p-8">
              <h3 class="mb-4 text-2xl font-semibold">Premium</h3>
              <p class="font-light text-gray-500 sm:text-lg">Best for large-scale uses and extended redistribution rights.</p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold text-violet-600">$499</span>
                <span class="text-gray-500">/month</span>
              </div>
              <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Individual configuration</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Team size: <span class="font-semibold">1 developer</span></span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Premium support: <span class="font-semibold">6 months</span></span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Free updates: <span class="font-semibold">6 months</span></span>
                </li>
              </ul>
              <a href="#" class="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-violet-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Purchase Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPlan

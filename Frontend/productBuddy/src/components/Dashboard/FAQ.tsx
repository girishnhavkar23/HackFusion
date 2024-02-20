export default function Faq() {
  return (
    <section className="px-2 mt-[100px]">
      <div className="mx-auto max-w-7xl py-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h1 className="text-2xl font-bold text-black">Frequently Asked Questions</h1>
            <p className="mt-6 text-sm text-gray-500">
              Some Frequently asked questions by Users usign our Platform for the first time
            </p>
          </div>
          <div className=" mt-10 lg:col-span-7 lg:mt-0">
            <dl>
              
                <div  className="mt-10 first:mt-0">
                  <dt className="text-lg font-semibold leading-6 text-gray-900">
                    How does the anonymous reporting process work?
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                  Our platform provides a secure and confidential channel for individuals to submit feedback on Amazon products without revealing their identity. You can share your opinions online or through our designated feedback submission form, and your identity will remain protected throughout the process.
                  </dd>
                </div>
                <div  className="mt-10 first:mt-0">
                  <dt className="text-lg font-semibold leading-6 text-gray-900">
                  Is the anonymity of the reviewer guaranteed?
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                  Yes, we take the anonymity of reviewers very seriously. We employ robust encryption techniques and do not collect any personally identifiable information unless explicitly provided. Our platform ensures that even our staff members cannot access the identity of the reviewer.
                  </dd>
                </div>
                <div  className="mt-10 first:mt-0">
                  <dt className="text-lg font-semibold leading-6 text-gray-900">
                  What types of feedback can be reported through this platform?
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                  Our platform accepts feedback for a wide range of Amazon products, including but not limited to electronics, books, clothing, household items, and more. We encourage individuals to share their honest opinions and experiences with any product they've purchased or interacted with on Amazon.
                  </dd>
                </div>
                <div  className="mt-10 first:mt-0">
                  <dt className="text-lg font-semibold leading-6 text-gray-900">
                  How will the reported feedback be used by sellers or relevant stakeholders?
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                  Once feedback is submitted, our team analyzes the information to extract insights and identify prevailing sentiments and themes within Amazon customer reviews. Credible feedback is then aggregated and provided to sellers or relevant stakeholders for further analysis and action. We collaborate closely with sellers to help them understand customer sentiments and make informed decisions to improve their products and services.
                  </dd>
                </div>
              
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

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
                  Our platform provides a secure and confidential channel for individuals to report crimes without revealing their identity. You can submit information online or through our hotline, and your identity will be protected throughout the process.
                  </dd>
                </div>
                <div  className="mt-10 first:mt-0">
                  <dt className="text-lg font-semibold leading-6 text-gray-900">
                  Is the anonymity of the reporter guaranteed?
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                  Yes, we take the anonymity of reporters very seriously. We use advanced encryption techniques and do not collect any personally identifiable information unless voluntarily provided. Even our staff members cannot access the identity of the reporter.
                  </dd>
                </div>
                <div  className="mt-10 first:mt-0">
                  <dt className="text-lg font-semibold leading-6 text-gray-900">
                  What types of crimes can be reported through this platform?
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                  Our platform accepts reports for a wide range of crimes, including but not limited to theft, vandalism, assault, fraud, harassment, and illegal activities. We encourage individuals to report any suspicious or criminal activity they witness.
                  </dd>
                </div>
                <div  className="mt-10 first:mt-0">
                  <dt className="text-lg font-semibold leading-6 text-gray-900">
                  How will reported information be used by law enforcement or relevant authorities?
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                  Once a report is submitted, our team reviews the information and forwards credible reports to the appropriate law enforcement or relevant authorities for further investigation. We collaborate closely with authorities to ensure timely and appropriate action is taken based on the information provided.
                  </dd>
                </div>
              
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

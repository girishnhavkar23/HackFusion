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
                  What is sentiment analysis, and how does it work?
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                  Sentiment analysis is a process used to determine the emotional tone behind a piece of text, such as a review. Our app utilizes natural language processing (NLP) techniques to analyze the language used in Amazon reviews. It identifies keywords, phrases, and linguistic patterns to classify the sentiment as positive, negative, or neutral.
                  </dd>
                </div>
                <div  className="mt-10 first:mt-0">
                  <dt className="text-lg font-semibold leading-6 text-gray-900">
                  How accurate is the sentiment analysis provided by the app?
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                  The accuracy of sentiment analysis can vary depending on factors such as the complexity of the language used, the context of the review, and the quality of the algorithm. Our app employs state-of-the-art machine learning models trained on vast datasets to achieve high accuracy. However, it's essential to understand that no sentiment analysis tool is perfect, and occasional inaccuracies may occur.
                  </dd>
                </div>
                <div  className="mt-10 first:mt-0">
                  <dt className="text-lg font-semibold leading-6 text-gray-900">
                  Are there any limitations to the types of reviews the app can analyze?
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                  While our app can analyze a wide range of review formats and content, there may be limitations in handling extremely short or poorly structured reviews. Additionally, reviews containing highly specialized jargon or slang may pose challenges for accurate analysis.
                  </dd>
                </div>
                <div  className="mt-10 first:mt-0">
                  <dt className="text-lg font-semibold leading-6 text-gray-900">
                  How can I interpret the insights provided by the app?
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                  Our app includes features and resources to help users interpret the sentiment analysis insights effectively. We provide explanations of key metrics and trends, along with visualizations such as charts and graphs to enhance understanding. Additionally, our support team is available to answer any questions and provide guidance on interpretation as needed.
                  </dd>
                </div>
              
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
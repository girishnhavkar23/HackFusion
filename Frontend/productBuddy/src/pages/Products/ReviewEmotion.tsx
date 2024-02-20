import { reviewEmotion, reviewSentimentScore } from "@/api";
import SpinnerCircular from "@/components/ui/SpinnerCircular";
import { useEffect, useState } from "react";
import EmotionsCard from "./EmotionsCard";

function ReviewEmotion({ id }: { id: number }) {
  const [isLoading, setIsLoading] = useState(false);
  const [emotions, setEmotions] = useState([]);
  
  const [showAll, setShowAll] = useState(false)
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await reviewEmotion(id);
        
        setEmotions(response.data.review_emotions);
        
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, []);
  const toggleShowAll = () => {
    setShowAll(prevShowAll => !prevShowAll)
  }
  return (
    <div className="flex justify-center p-8">
      <div className="flex flex-col gap-10">
        <div className="font-semibold text-[20px] flex ">Product Reviews and Analysis</div>
        <div className="flex flex-col gap-4">
          {isLoading && <SpinnerCircular />}
          {/* {emotions.length > 0 &&
            emotions.map((emotion, index) => <EmotionsCard key={index} review={emotion.review} emotion1={emotion.emotion1} emotion2={emotion.emotion2}/>)} */}
             {/* Display only a subset of cards if showAll is false */}
          {(showAll ? emotions : emotions.slice(0, 3)).map((emotion, index) => (
            <EmotionsCard
              key={index}
              review={emotion.review}
              emotion1={emotion.emotion1}
              emotion2={emotion.emotion2}
            />
          ))}
          {/* Show the "Show More" button if there are more cards to display */}
          {!showAll && emotions.length > 3 && (
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleShowAll}>
              Show More
            </button>
          )}
          {/* Show the "Show Less" button if all cards are currently shown */}
          {showAll && (
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleShowAll}>
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewEmotion;

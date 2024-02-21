
function EmotionsCard({review,emotion1,emotion2}:{review:string,emotion1:string,emotion2:string}) {
  console.log(emotion1)
  return (
    <div className='p-8 border-2 rounded-md'>
      <div className="flex justify-between w-[800px]">
        <div className="max-w-[350px]">{review}</div>
        <div>
          <div className="font-bold">Extracted Emotions</div>
          <div>{emotion1}</div>
          <div>{emotion2}</div>
        </div>

      </div>
    </div>
  )
}

export default EmotionsCard

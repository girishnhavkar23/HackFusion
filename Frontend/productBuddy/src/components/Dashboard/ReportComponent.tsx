import { Card } from "@/components/ui/card"

export default function ReportComponent({title,description,status="pending"}:{title:string,description:string,status:string}) {
  return (
    <Card className="flex  p-6">
      {/* <img
        alt="Image"
        className="rounded-lg object-cover"
        height="200"
        src="/placeholder.svg"
        style={{
          aspectRatio: "200/200",
          objectFit: "cover",
        }}
        width="200"
      /> */}
      <div className="flex justify-between items-center w-full">
        <div className="ml-6 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
        <div >{status}</div>
      </div>
    </Card>
  )
}
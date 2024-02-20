/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AlJ8QqsfYP8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { uploadReport } from "@/api"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Form({userId}:{userId:string}) {
  const [title,setTitle]=useState("")
  const [location,setLocation]=useState("")
  const [description,setDescription]=useState("")

  const navigate = useNavigate();
  const [image, setImage] = useState<string | null>(null);

  const handleImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    } else {
      const reader = new FileReader();

      reader.onload = async (event) => {
        // Get the base64 string representation of the file
        const base64String = event.target.result as string;
        setImage(base64String);
      };

      // Read the contents of the file as a data URL (base64)
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = async () =>{
    try{
      const response=await uploadReport(userId,{title,location,description,image})
      toast.success("Reported the incident successfully")
      navigate("/volun-dash")
    }
    catch(e){
      console.log(e)
    }
  }
  console.log(image)
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Report an Incident/Problem</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">Title</Label>
            <Input id="first-name" placeholder="An appropriate title describing the problem" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="Enter the place where the incident/problem occurred" value={location} onChange={(e)=>setLocation(e.target.value)}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Describe the Problem/Incident in detail</Label>
          <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input id="image" type="file" onChange={handleImage}/>
        </div>
        <Button onClick={handleSubmit}>Report Problem</Button>
      </div>
    </div>
  )
}


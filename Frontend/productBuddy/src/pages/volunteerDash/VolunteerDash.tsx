import ExampleNavbarThree from "@/components/Dashboard/Navbar"
import ReportComponent from "@/components/Dashboard/ReportComponent"
import { useProfileStore } from "@/store/store"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { checkMessage, getAllUserReports } from "@/api"
import { Button } from "@/components/ui/button"
import { title } from "process"
import SpinnerCircular from "@/components/ui/SpinnerCircular"

function VolunteerDash() {
  const token = useProfileStore((state)=>state.token)
  const navigate = useNavigate()
  const [reports,setReports] =useState([])
  const [isLoading,seIsLoading] =useState(false)
  const [messageExist,setMessageExist]=useState(false)
  const [userId,setuserId]=useState("")
  const[otherId,setOtherId]=useState("")

  useEffect(()=>{
    const fetchReports=async()=>{
      if(!token){
        navigate("/")
      }
      else{
        try{

          const decoded=jwtDecode(token) as { _id: string }
          // console.log(decoded)
          seIsLoading(true)
          setuserId(decoded._id)
          const response = await getAllUserReports(decoded._id) 
          setReports(response?.data.userReports)
          const response1 = await checkMessage(decoded._id)
          console.log(response.data)
          if(response1.data.messagesExist._id){
            console.log("helo")
            setMessageExist(true)
            setOtherId(response1.data.otherUserId)
            console.log(otherId)
            
          }
            
        }
        catch(e){
          console.log(e)
        }
        finally{
          seIsLoading(false)

        }
      }  
    }
      fetchReports();
    
  },[token])

  // useEffect(()=>{
  //   const messageCheck = async()=>{
  //     try{
        
  //     }
  //     catch(e){

  //     }
  //   }
  //   messageCheck();
  // },[])

  const handleChatNow = ()=>{
    navigate(`/chat/${otherId}`)
  }

  return (
    <div>
      <ExampleNavbarThree/>
      <div className=" mx-60 mt-10">
        <div className="flex flex-col">
         <div className="text-[28px]">My Reported Incidents</div>
          {messageExist && <div className="flex gap-4 items-center border-2 p-4 rounded-md max-w-[400px]"><div>An investigator wants to talk to you</div><Button onClick={handleChatNow}>Chat Now</Button></div>}
        </div>
        <div className="flex flex-col gap-2 mx-4 mt-5">
        {reports &&
          reports.map((item)=>(
            <ReportComponent title={item.title} description={item.description} status={item.status}/>
          ))
        }
        {
          !isLoading && reports.length==0 && <div className="text-center mt-[200px] flex flex-col gap-5">
          <div>Not Reported any Incident yet</div>
          <NavLink to="/report"><Button>Report a Problem</Button></NavLink>
          </div>
        }
        {
          isLoading && <SpinnerCircular/>
        }
      </div>
      </div>

    </div>
  )
}

export default VolunteerDash

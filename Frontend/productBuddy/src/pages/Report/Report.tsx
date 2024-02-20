import ExampleNavbarThree from '@/components/Dashboard/Navbar'
import Form from '@/components/Report/Form'
import { useProfileStore } from '@/store/store'
import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Report() {
  const token = useProfileStore((state)=>state.token)
  const navigate=useNavigate()
  const [id,setId]=useState("")
  useEffect(()=>{
    if(!token)
      navigate('/signin')
    else{
      const decoded=jwtDecode(token) as { _id: string }
      setId(decoded._id)
    }
  },[]) 
  return (
    <>
      <ExampleNavbarThree/>
        <div className='mx-60 mt-[75px]'>
          <Form userId={id}/>
        </div>
    </>
  )
}

export default Report

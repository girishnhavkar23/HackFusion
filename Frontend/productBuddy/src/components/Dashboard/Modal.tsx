import { useState } from "react";
import { Card } from "@/components/ui/card";
import Modal from "react-modal";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { updayeStatus } from "@/api";
import toast from "react-hot-toast";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    borderRadius: "8px",
  },
};

export default function ReportModal({
  reportId,
  title,
  description,
  status = "pending",
  createdBy
}: {
  reportId:string;
  title: string;
  description: string;
  status: string;
  createdBy:string
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const navigate = useNavigate()
  const handleChat=()=>{
    navigate(`/chat/${createdBy}`)
  }
  const handleAccept = async ()=>{
    try{
      const response = await updayeStatus(reportId,{status:"accepted"})
      toast.success("Report Status updated Successfully")
    }
    catch(e){
      console.log(e)
    }
  }
  const handleReject = async ()=>{
    try{
      const response = await updayeStatus(reportId,{status:"rejected"})
      toast.success("Report Status updated Successfully")
    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <Card className="flex p-6 min-w-[800px]">
      <div className="flex justify-between items-center ">
        <div className="ml-6 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
        <div>
          <a href="#" onClick={openModal}>
            Details
          </a>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modalStyles}
            contentLabel="Example Modal"
            className="min-w-[600px] min-h-[500px] bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
          >
            <div style={{ position: "absolute", top: "10px", right: "10px" }}>
              <button
                onClick={closeModal}
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                ✕
              </button>
            </div>
            <div
              style={{
                paddingBottom: "20px",
                paddingTop: "10px",
                fontSize: "30px",
              }}
            >
              <h2>{title}</h2>
              <p className="text-sm">{description}</p>
            </div>
            <div>
              {status==="pending"?<div className="flex flex-col gap-3 max-w-[100px]"><Button onClick={handleAccept}>Accept</Button><Button onClick={handleReject}>Reject</Button></div>:<></>}
            </div>
            <div
              style={{ position: "absolute", bottom: "20px", right: "20px" }}
            >
              <Button onClick={handleChat}>Chat With the Volunteer</Button>
            </div>
          </Modal>
        </div>
      </div>
        
    </Card>
  );
}

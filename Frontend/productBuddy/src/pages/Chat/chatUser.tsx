import React, { useState, useEffect } from "react";
import { useProfileStore } from "@/store/store";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { fetchMessage } from "@/api";
import axios from "axios";
import ExampleNavbarThree from "@/components/Dashboard/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function ChatUser() {
  const token = useProfileStore((state) => state.token);
  const role = useProfileStore((state) => state.role);
  const { userId } = useParams();
  const navigate = useNavigate();
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  console.log(role);
  const fetchMessages = async (sender, receiver) => {
    try {
      const response = await fetchMessage(sender, receiver);
      setMessages(response.data.messages);
      console.log(role);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSendMessage = async (receiver, participants, message) => {
    try {
      const decoded = jwtDecode(token);

      // Axios post request to send message
      await axios.post("http://localhost:5000/chat/send", {
        sender: decoded._id,
        receiver,
        participants,
        message: message,
      });

      // Update state directly without waiting for fetchMessages
      setMessages([...messages, { message, participants: role }]);

      // Clear the input field
      setMessageInput("");
    } catch (e) {
      console.error("Error sending message:", e);
    }
  };

  useEffect(() => {
    try {
      if (token !== "") {
        const decoded = jwtDecode(token);
        console.log(decoded);
        fetchMessages(userId, decoded._id, role);
      } else {
        navigate("/signin-investigator");
      }
    } catch (e) {
      console.log(e);
    }
  }, [token]);

  return (
    <div>
      <ExampleNavbarThree />
      <div className="py-20 px-[200px] ">

      <div className="flex flex-col gap-5 bg-slate-300 p-6 rounded-lg">

        {messages.map((msg) => (
          <div key={msg._id}>
            <p>
              <strong>
                {msg.participants === "Investigator" ? "Investigator" : "User"}:
              </strong>
              {msg.message}
            </p>
          </div>
        ))}
        
      </div>
      <div className="flex justify-between items-center mt-5 gap-20">
    <Input
      type="text"
      value={messageInput}
      onChange={(e) => setMessageInput(e.target.value)}
    />

      <Button onClick={() => handleSendMessage(userId, role, messageInput)} >Send</Button>

  </div>
      </div>
    </div>
  );
}

export default ChatUser;

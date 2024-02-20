import { Suspense, useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import { Toaster } from 'react-hot-toast';
import SpinnerCircular from './components/ui/SpinnerCircular';
import React from 'react';
import { useProfileStore } from './store/store';

const HomePage = React.lazy(()=>import ('./pages/Home/Home'))
const SignUp = React.lazy(()=>import ('./pages/Auth/SignUp'))
const SignIn = React.lazy(()=>import ('./pages/Auth/SignIn'))
const Report = React.lazy(()=>import ('./pages/Report/Report'))
const VolunDash = React.lazy(()=>import ('./pages/volunteerDash/VolunteerDash'))
const InvestDash = React.lazy(()=>import ('./pages/InvestDash/InvestigatorDash'))
const InvestSignin = React.lazy(()=>import ('./pages/Auth/SigninInvestigator'))
const InvestSignup = React.lazy(()=>import ('./pages/Auth/SignupInvestigator'))
const ChatUser = React.lazy(()=>import ('./pages/Chat/chatUser'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/signin-investigator",
    element: <InvestSignin/>,
  },
  {
    path: "/report",
    element: <Report/>,
  },
  {
    path:"/volun-dash",
    element: <VolunDash/>,
  },
  {
    path:"/invest-dash",
    element: <InvestDash/>,
  },
  {
    path:"/invest-signup",
    element: <InvestSignup/>,
  },
  {
    path:"/chat/:userId",
    element: <ChatUser/>,
  },

])
function App() {
  const setUser = useProfileStore((state)=>state.setUser)
  useEffect(() => {
    // Check if Profile exists in localStorage
    const profileData = localStorage.getItem('Profile');
    console.log(profileData)
    if (profileData) {
      // If exists, parse the JSON string and set the user
      const { token, role } = JSON.parse(profileData);
      setUser({ token, role });
    }
  }, [setUser]);
  

  return (
    <Suspense fallback={<SpinnerCircular/>}>
       <RouterProvider router={router} />
       <Toaster />
      </Suspense>
  )
}

export default App

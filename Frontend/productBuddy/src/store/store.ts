import { login, loginInvestigator } from "@/api";
import { create } from "zustand";

type ProfileStore = {
  // token:string,
  // role:string,
  // setUser:(userData)=>void,
  // login:(authData:{username:string,password:string})=>Promise<void>,
  // logout:()=>void,
  // investLogin:(authData:{username:string,password:string})=>Promise<void>,
}

export const useProfileStore = create<ProfileStore>((set)=>({
  // token:"",
  // role:"",
  // login:async (authData)=>{
  //     const response = await login(authData)
  //     const role = response.data.role
  //     console.log(role)
  //     const token: string = response.data.token; 
  //     localStorage.setItem('Profile', JSON.stringify({ token, role }));
  //     set(()=>({token,role}));
      
  // },
  // logout:()=>{
  //   localStorage.removeItem('Profile');
  //   set(()=>({token:"",role:""}))
  // },
  // setUser:(userData)=>{
  //   const { token, role } = userData;
  //   set(()=>({ token, role }));
  // },
  // investLogin:async (authData)=>{
  //   const response =await loginInvestigator(authData)
  //   const role = response.data.role
  //   const token: string = response.data.token; 
  //   console.log(role)
  //   localStorage.setItem('Profile', JSON.stringify({ token, role }));
  //   set(()=>({token,role}));
  // }
}))
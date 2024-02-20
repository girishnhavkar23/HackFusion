import { NavLink } from "react-router-dom"
import { Button } from "../ui/button"

export default function Hero() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-24 xl:py-32 h-screen" style={{backgroundImage: "url('https://images.unsplash.com/photo-1707059464734-9a6b4028891f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="container flex flex-col items-center px-4 space-y-4 md:px-6">
        <div className="text-center">
          <div className="text-[120px] font-bold tracking-tighter">Product Buddy</div>
          <p className="text-[50px] mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Your buddy for a tension free online shopping experience
          </p>
        </div>
        {/* <div className="text-center flex flex-col gap-5">
          <NavLink
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8  text-xl font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            to="report"
          >
            Report Corruption
          </NavLink>
          <NavLink to="/signin-investigator">
            <Button className="font-semibold">
              Signin As Investigator
            </Button>
          </NavLink>
        </div> */}
      </div>
    </section>
  )
}

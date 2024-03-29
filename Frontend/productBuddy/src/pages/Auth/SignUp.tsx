import { ArrowRight } from 'lucide-react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { signupUser } from '../../api';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';


export default function SignUpOne() {
  const [username,setUsername] = useState("")
  // const [email,setEmail] = useState("");
  const [password,setPassword] =useState("")
  const [verified,setVerified]=useState(false)
  const navigate = useNavigate()
  console.log(verified)
  const handleSubmit= async ()=>{
      try{
        const response = await signupUser({username,password})
        toast.success("successfully created account")
        navigate("/signin")
      }
      catch(e){
        toast.error("error")
      }
  } 

  console.log(verified)
  const handleCaptchaChange = (value: string | null) => {
    // The value parameter will be null if the user fails the reCAPTCHA challenge.
    if (value !== null) {
      // The user is verified as a human, you can proceed with your logic here
    console.log('User is verified as human!');
    setVerified(true)
    } else {
      // The user failed the reCAPTCHA challenge, consider displaying an error message
    console.error('reCAPTCHA verification failed. Please prove you are not a robot.');
    toast.error("Couldn't verify")
    setVerified(false)
    }
};
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{' '}
              <a
                href="/signin"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </a>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Username{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="username"
                      id="name"
                      value={username}
                      onChange={(e)=>{setUsername(e.target.value)}}
                    ></input>
                  </div>
                  {/* <p className='text-[10px] text-[#d33c3d]'>Please remember this username as you it is assigned randomly</p> */}
                </div>
                {/* <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={email}
                      onChange={(e)=>{setEmail(e.target.value)}}
                    ></input>
                  </div>
                  
                </div> */}
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      value={password}
                      onChange={(e)=>{setPassword(e.target.value)}}
                    ></input>
                  </div>
                  
                </div>
                <ReCAPTCHA
          sitekey="6LfSxHYpAAAAAEqn7gEa6YIi1Xw7E5eC1Ry7VCAL"
          onChange={handleCaptchaChange}
      />
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 disabled:bg-black/80"
                    onClick={handleSubmit}
                    disabled={!verified}
                  >
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            
          </div>
        </div>
        <div className="hidden lg:block h-screen">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://wallpapers.com/images/featured/amazon-npcp6jc782ixp9zs.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

// import './leftsidebar.css';

export default function LeftSideBar() {



  return (
    <div className='z-10 pt-5 bg-white shadow-md fw-normal fs-6 border-0 smooth md:flex md:flex-col flex-shrink-0 text-white gap-6 items-center hidden h-screen w-[200px]'>
      <Link to={"/"}>
        {/* <img src={logoDark} className='max-w-[80px]' /> */}
      </Link>
      <div className='flex flex-col items-center mt-3 gap-2'>
        
        
        <div 
          className={"sidebar-menu-item hover:bg-slate-100 duration-150  p-3 flex flex-col justify-center items-center text-dark text-decoration-none w-100"}         >
          Hello

        </div>
        

        
      </div>
    </div>
  );
}

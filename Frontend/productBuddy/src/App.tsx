import { Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import SpinnerCircular from "./components/ui/SpinnerCircular";
import React from "react";
import { useProfileStore } from "./store/store";

const HomePage = React.lazy(() => import("./pages/Home/Home"));
const Products = React.lazy(() => import("./pages/Products/Products"));
const AllProducts = React.lazy(() => import("./pages/Products/AllProducts"));
const ProductPage = React.lazy(() => import("./pages/Products/ProductPage"));
const SellerPage = React.lazy(() => import("./pages/Seller/SellerPage"));
const Signin = React.lazy(() => import("./pages/Auth/SignIn"));
const Signup = React.lazy(() => import("./pages/Auth/SignUp"));

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dash",
    element: <Products />,
    children: [
      {
        path: "allProducts",
        element: <AllProducts />,
      },
    ],
  },
  {
    path: "/product/:productId",
    element: <ProductPage />,
  },
  {
    path: "/seller",
    element: <SellerPage/>,
    children:[
      {
        path: "allProducts",
        element: <AllProducts />,
      }
    ]
  },
]);
function App() {
  const setUser = useProfileStore((state) => state.setUser);
  useEffect(() => {
    // Check if Profile exists in localStorage
    const profileData = localStorage.getItem("Profile");
    console.log(profileData);
    if (profileData) {
      // If exists, parse the JSON string and set the user
      const { token, role } = JSON.parse(profileData);
      setUser({ token, role });
    }
  }, [setUser]);

  return (
    <Suspense fallback={<SpinnerCircular />}>
      <RouterProvider router={router} />
      <Toaster />
    </Suspense>
  );
}

export default App;

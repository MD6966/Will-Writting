import { useRoutes } from "react-router-dom/dist";
import AuthLayout from "./layouts/Auth/AuthLayout";
import Home from "./layouts/Home";
import Landing from "./layouts/Landing/Landing";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import AdminLogin from "./views/Admin/Auth/AdminLogin";
import ErrorPage from "./components/ErrorBoundary/components/ErrorPage";
import AdminDashboard from "./views/Admin/AdminDashboard/AdminDashboard";
import AdminLayout from "./layouts/Admin/AdminLayout";
import CreateForm from './views/Admin/components/CreateForm'
import UserDashboard from "./views/User/UserDashboard";
import UserLayout from "./layouts/User/UserLayout";
import RegisterDeath from './views/User/components/RegisterDeath'
import CompleteForm from './views/User/components/CompleteForm'
import FrontPage from './views/User/components/FrontPage'
import ProfileData from "./views/User/components/ProfileData/ProfileData";
export default function Router() {
    let element = useRoutes([
        {
        path:'/',
        element : <Landing /> ,
       },
       {
        path:'auth',
        element: <AuthLayout />, 
        children : [
            { path: 'login', element: <Login />},
            { path: 'register' , element: <SignUp /> }
        ]
       },
       {
        path:'admin',
        element: <AdminLayout />,
        children:[
            {path:'dashboard', element: <AdminDashboard />},
            {path:'create-form', element:<CreateForm />  }
        ]
       },
       {
        path:'user',
        element: <UserLayout /> ,
        children:[
            {path:'front', element:<FrontPage />},
            {path:'death-register', element:<RegisterDeath />},
            {path:'complete-form', element:<CompleteForm />},
            {path:'profile-data', element:<ProfileData />},


        ]
       },
       {
        path:'/user-dashboard',
        element: <UserDashboard /> 
       },
       {
        path:'/login',
        element: <Login />
        },
       {
        path:'/home',
        element: <Home />,
       },
       {
        path:'/admin-dashboard',
        element: <AdminDashboard />
       },
       {
        path:'/admin-login',
        element: <AdminLogin /> 
       },
       {
        path:'*',
        element: <ErrorPage /> 
       }
    ])
    return element
}
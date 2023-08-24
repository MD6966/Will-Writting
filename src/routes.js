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
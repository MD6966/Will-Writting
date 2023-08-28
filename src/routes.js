import { useRoutes, Navigate } from "react-router-dom/dist";
import AuthLayout from "./layouts/Auth/AuthLayout";
import Home from "./layouts/Home";
// import Landing from "./layouts/Landing/Landing";
import Login from "./views/Login";
// import SignUp from "./views/SignUp";
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
import CurrentUsers from "./views/Admin/AdminDashboard/components/CurrentUsers";
import PublishedForms from "./views/Admin/AdminDashboard/components/PublishedForms";
import Form1 from "./views/User/components/Forms/Form1";
import Form2 from './views/User/components/Forms/Form2'
export default function Router() {
    let element = useRoutes([
    //     {
    //     path:'/',
    //     element : <Landing /> ,
    //    },
       {
        path:'/',
        element: <AuthLayout />, 
        children : [
            { path: '/', element: <Navigate to="/login" replace /> },
            { path: 'login', element: <Login />},
        ]
       },
       {
        path:'admin',
        element: <AdminLayout />,
        children:[
            {path:'dashboard', element: <AdminDashboard />},
            {path:'create-form', element:<CreateForm />  },
            {path:'all-users', element: <CurrentUsers /> },
            {path:'all-forms', element: <PublishedForms />}
        ]
       },
       {
        path:'user',
        element: <UserLayout /> ,
        children:[
            {path:'front', element:<FrontPage />,
            children:[
                {path:'form-1', element: <Form1 />},
                {path:'form-2', element: <Form2 />}
            ]
        },
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
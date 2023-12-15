import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import { ROUTES } from "./constants";
import { AuthLayout, MainLayout } from "./pages/layouts";

// Import your components for different pages
const Login = lazy(() => import('./pages/login'));
const ForgotPassword = lazy(() => import('./pages/forgotPass'));
const Dashboard = lazy(() => import('./pages/dashboard/'));
const Analytics = lazy(() => import('./pages/analytics'));
const DeviceInfo = lazy(() => import('./pages/deviceInfo'));
const Support = lazy(() => import('./pages/support'));
const Map = lazy(() => import('./pages/map'));


export default function Router() {
    let element = useRoutes([
        {
            element: <AuthLayout />,
            children: [
                { path: "/", element: <Login /> },
                { path: ROUTES.LOGIN, element: <Login /> },
                { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPassword /> },
            ],
        },
        {
            element: <MainLayout />,
            children: [
                { path: ROUTES.DASHBOARD, element: <Dashboard /> },
                { path: ROUTES.ANALYTICS, element: <Analytics /> },
                { path: ROUTES.DEVICE_INFO, element: <DeviceInfo /> },
                { path: ROUTES.SUPPORT, element: <Support /> },
                { path: ROUTES.MAP, element: <Map /> },
            ],
        },
    ])
    return element;
}
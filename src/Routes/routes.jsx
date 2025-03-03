import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "@/pages/Home/Home";
import AddArticles from "@/pages/AddArticles";
import AllArticles from "@/pages/AllArticles";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Subscription from "@/pages/SubscriptionPage";
import MyArticles from "@/pages/MyArticles";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import PrivateRoute from "./PrivateRoute";
import ArticleDetails from "@/pages/ArticleDetails";
import AllUsers from "@/pages/Dashboard/AllUsers";
import AllArticlesForAdmin from "@/pages/Dashboard/AllArticlesForAdmin";
import AddPublisher from "@/pages/Dashboard/AddPublisher";
import AdminRoute from "./AdminRoutes";
import ErrorPage from "@/components/ErrorElement";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import PremiumArticles from "@/pages/PremiumArticles";
import PremiumRoute from "./PremiumRoute";
import UpdateArticle from "@/components/UpdateArticle";
import UserProfile from "@/shared/UserProfile";
import Features from "@/pages/About/Features";
import Support from "@/pages/About/Support";
import Forums from "@/pages/About/Forums";
import Contribute from "@/pages/OurProject/Contribute";
import MediaAssets from "@/pages/OurProject/MediaAssets";
import Changelog from "@/pages/OurProject/Changelog";
import Releases from "@/pages/OurProject/Releases";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage/>,
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/add-article",
                element: <PrivateRoute><AddArticles/></PrivateRoute>,
            },
            {
                path: "/all-articles",
                element: <AllArticles/>,
            },
            {
                path: "/premium-articles",
                element: <PremiumRoute><PremiumArticles/></PremiumRoute>
            },
            {
                path: "/article/:id",
                element: <PrivateRoute><ArticleDetails/></PrivateRoute> ,

            },
            {
                path: "/subscription",
                element: <PrivateRoute><Subscription/></PrivateRoute>
            },
            {
                path: "/my-articles",
                element: <PrivateRoute><MyArticles/></PrivateRoute>
            },
            {
                path: "/update-article/:id",
                element: <PrivateRoute><UpdateArticle/></PrivateRoute>
            },
            {
                path: "/my-profile",
                element: <PrivateRoute><UserProfile/></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path:'/features',
                element:<Features/>,
            },
            {
                path:'/support',
                element:<Support/>,
            },
            {
                path:'/forums',
                element:<Forums/>,
            },
            {
                path:'/contribute',
                element: <Contribute/>,
            },
            {
                path:'/media-assets',
                element:<MediaAssets/>,
            },
            {
                path:'/change-log',
                element:<Changelog/>,
            },
            {
                path:'/release-notes',
                element:<Releases/>,
            },

        ]
    },
    {
        path: "/dashboard",
        errorElement: <ErrorPage></ErrorPage>,
        element:
            <PrivateRoute>
                <AdminRoute><Dashboard/></AdminRoute>
            </PrivateRoute>,
        children: [
            {
                index: true,
                element:
                    <PrivateRoute>
                        <AdminRoute><DashboardPage/></AdminRoute>
                    </PrivateRoute>,
            },
            {
                path: "all-users",
                element:
                    <PrivateRoute>
                        <AdminRoute><AllUsers/></AdminRoute>
                    </PrivateRoute>,
            },
            {
                path: "all-articles",
                element:
                    <PrivateRoute>
                        <AdminRoute><AllArticlesForAdmin/></AdminRoute>
                    </PrivateRoute>,
            },
            {
                path: "add-publisher",
                element:
                    <PrivateRoute>
                        <AdminRoute><AddPublisher/></AdminRoute>
                    </PrivateRoute>,
            },
        ]
    },

]);

export default router
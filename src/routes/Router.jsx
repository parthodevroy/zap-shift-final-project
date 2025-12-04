import { createBrowserRouter } from "react-router";
import Root from "../mainlayout/Root";
import Covarage from "../pages/covarage/Covarage";
import Homepage from "../pages/home/Homepage";
import MainLayOut from "../mainlayout/MainLayOut";
import Login from "../auth/Login";
import Register from "../auth/Register";
import PrivateRoutes from "./PrivateRoutes";
import SendParcel from "../pages/SendPersel/SendParcel";

// import MyDashboard from "../pages/dashboard/Mydashboard/MyDashboard";
import Payment from "../pages/dashboard/Payment/Payment";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import PaymentCancel from "../pages/PaymentCanchel/PaymentCancel";
import PaymentHistory from "../pages/dashboard/PaymentHistory/PaymentHistory";
import Rider from "../pages/Rider/Rider";
import Approval from "../pages/dashboard/RiderApproval/Approval";
import UserManagement from "../pages/dashboard/UserManagement/UserManagement";
import AdminPrivateRoute from "./AdminPrivateRoute";
import AssignRider from "../pages/dashboard/AssignRider/AssignRider";
import AssignDelivery from "../pages/dashboard/AssignDelivarys/AssignDelivery";
import CompletedDelivery from "../pages/dashboard/CompletedDelivery/CompletedDelivery";
import TrakingLog from "../pages/TrakingLog/TrakingLog";

import DashBoard from "../mainlayout/DashBoard";
import MyParcels from "../pages/dashboard/Mydashboard/MyParcels";
import DashboardHome from "../pages/dashboard/DashboardHome/DashboardHome";
import SurvicePage from "../pages/Survices/SurvicePage";
import Support from "../pages/Support/Support";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Leaderboard from "../pages/Leaderboard/Leaderboard";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/covarage",
        loader: () => fetch("/warehouses.json").then(res => res.json()),
        element: <Covarage />
      },
      {
        path: "/support",
       
        element: <Support />
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/leaderboard",
        element: <Leaderboard/>
      },
      {
        path: "/service",
       
        element: <SurvicePage />
      },
      {
        path: "/parcel",
        loader: () => fetch("/warehouses.json").then(res => res.json()),
        element: (
          <PrivateRoutes>
            <SendParcel />
          </PrivateRoutes>
        )
      },
      {
        path:"/rider",
         loader: () => fetch("/warehouses.json").then(res => res.json()),
        element:<PrivateRoutes><Rider></Rider></PrivateRoutes>
      },
      {
        path:'/traking-log/:trackingId',
        Component:TrakingLog
      }
    ]
  },

  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      {
        index:true,
        element:<DashboardHome></DashboardHome>

      },
      {
        path: "my-parcels",
        Component: MyParcels
      },
      {
        path: "payment/:paymentId",
        Component: Payment
      },
      {
        path: "payment-success",
        Component: PaymentSuccess
      },
      {
        path: "payment-cancel",
        Component: PaymentCancel
      },
      {
        path: "payment-history",
        Component: PaymentHistory
      },
      {
        path: "completed-delivery",
        element:<CompletedDelivery></CompletedDelivery>
      },
      // rider related routes only rider can see this page
      {
        path:"assign-delivery",
        element:<AssignDelivery></AssignDelivery>

      },

      // admin related page only admin can access
      {
        path:"rider-approval",
        element:<AdminPrivateRoute>
          <Approval></Approval>
          </AdminPrivateRoute>
      },
      {
        path:"assign-rider",
        element:<AdminPrivateRoute>
          <AssignRider></AssignRider>
          </AdminPrivateRoute>
      },
      {
        path:"user-management",
       element:<AdminPrivateRoute>
        <UserManagement></UserManagement>
        </AdminPrivateRoute>
    
      }
    ]
  }
]);

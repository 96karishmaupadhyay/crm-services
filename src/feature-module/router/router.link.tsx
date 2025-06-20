import { Route } from 'react-router-dom'
import Login from '../auth/login'
// import ComingSoon from '../pages/comingSoon'
// import Register from '../auth/register'
// import TwoStepVerification from '../auth/twoStepVerification'
// import EmailVerification from '../auth/emailVerification'
// import ResetPassword from '../auth/resetPassword'
// import Error404 from '../pages/error/error-404'
// import LockScreen from '../auth/lockScreen'
// import Error500 from '../pages/error/error-500'
// import UnderMaintenance from '../pages/underMaintenance'
// import ForgotPassword from '../auth/forgotPassword'
// import Success from '../auth/success'
import SuperAdminDashboard from '../super-admin/dashboard'
import Subscription from '../super-admin/subscription'
import Packages from '../super-admin/packages/packagelist'
import PackagesGrid from '../super-admin/packages/packagegrid'
import PurchaseTransaction from '../super-admin/purchase-transaction'
import Domain from '../super-admin/domin'
import Company from '../super-admin/companies'
import { all_routes } from './all_routes'
const route=all_routes
export const public_routes=[
    {
    path: route.login,
    element: <Login />,
    route: Route,
    title: 'Login'
    }
  ,
   {
    path: route.superadminDashboard,
    element: <SuperAdminDashboard />,
    route: Route,
    title: 'Super Admin Dashboard'
  },
  {
    path: route.superadminCompany,
    element: <Company />,
    route: Route,
    title: 'Super Admin Companies'
  },
  {
    path: route.superadminSubscription,
    element: <Subscription />,
    route: Route,
    title: 'Super Admin Subscription'
  },
  {
    path: route.superadminPackagelist,
    element: <Packages />,
    route: Route,
    title: 'Super Admin Packages'
  },
  {
    path: route.superadminPackageGrid,
    element: <PackagesGrid />,
    route: Route,
    title: 'Super Admin Packages Grid'
  },
  {
    path: route.superadminDomain,
    element: <Domain />,
    route: Route,
    title: 'Super Admin Domain'
  },
  {
    path: route.superadminPurchaseTransaction,
    element: <PurchaseTransaction />,
    route: Route,
    title: 'Super Admin Domain'
  },
]
export const authRoutes = [
  {
    path: route.login,
    element: <Login />,
    route: Route,
    title: 'Login'
  },

 
];
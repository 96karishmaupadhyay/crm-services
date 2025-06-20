import { Route } from 'react-router-dom'
import Login from '../auth/login'
import ComingSoon from '../pages/comingSoon'
import Register from '../auth/register'
import TwoStepVerification from '../auth/twoStepVerification'
import EmailVerification from '../auth/emailVerification'
import ResetPassword from '../auth/resetPassword'
import Error404 from '../pages/error/error-404'
import LockScreen from '../auth/lockScreen'
import Error500 from '../pages/error/error-500'
import UnderMaintenance from '../pages/underMaintenance'
import ForgotPassword from '../auth/forgotPassword'
import Success from '../auth/success'
import { all_routes } from './all_routes'
const route=all_routes
export const public_routes=[
    {
    path: route.login,
    element: <Login />,
    route: Route,
    title: 'Login'
    }
]
export const authRoutes = [
  {
    path: route.comingSoon,
    element: <ComingSoon />,
    route: Route,
    title: 'ComingSoon'
  },
  {
    path: route.login,
    element: <Login />,
    route: Route,
    title: 'Login'
  },
  {
    path: route.register,
    element: <Register />,
    route: Route,
    title: 'Register'
  },
  {
    path: route.twoStepVerification,
    element: <TwoStepVerification />,
    route: Route,
    title: 'TwoStepVerification'
  },
  {
    path: route.emailVerification,
    element: <EmailVerification />,
    route: Route,
    title: 'EmailVerification'
  },
  {
    path: route.success,
    element: <Success />,
    route: Route,
    title: 'Success'
  },

  {
    path: route.resetPassword,
    element: <ResetPassword />,
    route: Route,
    title: 'Reset Password'
  },
  {
    path: route.forgotPassword,
    element: <ForgotPassword />,
    route: Route,
    title: 'Forgot Password'
  },
  {
    path: route.error404,
    element: <Error404 />,
    route: Route,
    title: 'Error404'
  },
  {
    path: route.error500,
    element: <Error500 />,
    route: Route,
    title: 'Error500'
  },
  {
    path: route.underMaintenance,
    element: <UnderMaintenance />,
    route: Route,
    title: 'Under Maintenance'
  },
  {
    path: route.lockScreen,
    element: <LockScreen />,
    route: Route,
    title: 'Lock Screen'
  },
];
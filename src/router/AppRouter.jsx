import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Home from "../pages/Home/Home";
import Quiz from "../pages/Quiz/Quiz";
import Playground from "../pages/Playground/Playground";
import Interview from "../pages/Interview/Interview";
import Projects from "../pages/Projects/Projects";
import Roadmap from "../pages/Roadmap/Roadmap";
import Notes from "../pages/Notes/Notes";
import Dashboard from "../pages/Dashboard/Dashboard";
import CoursePage from "../pages/Course/CoursePage";
import CertificatesPage from "../pages/Certificates/CertificatesPage";
import VerifyCertificate from "../pages/VerifyCertificate/VerifyCertificate";
import Leaderboard from "../pages/Leaderboard/Leaderboard";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import ForgotPassword from "../features/auth/ForgotPassword";
import ResetPassword from "../features/auth/ResetPassword";
import VerifyEmail from "../features/auth/VerifyEmail";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CourseManager from "../pages/Admin/CourseManager";
import UserManager from "../pages/Admin/UserManager";
import Analytics from "../pages/Admin/Analytics";
import NotFound from "../pages/errors/NotFound";
import ServerError from "../pages/errors/ServerError";
import Unauthorized from "../pages/errors/Unauthorized";
import ProtectedRoute from "../features/auth/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <MainLayout>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </MainLayout>
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "/verify-email", element: <VerifyEmail /> },
      { path: "/dashboard", element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
      {
        path: "/admin",
        element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "courses", element: <CourseManager /> },
          { path: "users", element: <UserManager /> },
          { path: "analytics", element: <Analytics /> },
        ],
      },
      { path: "/profile", element: <ProtectedRoute><Profile /></ProtectedRoute> },
      { path: "/settings", element: <ProtectedRoute><Settings /></ProtectedRoute> },
      { path: "/notes", element: <ProtectedRoute><Notes /></ProtectedRoute> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/playground", element: <Playground /> },
      { path: "/interview", element: <Interview /> },
      { path: "/projects", element: <Projects /> },
      { path: "/roadmap", element: <Roadmap /> },
      { path: "/leaderboard", element: <Leaderboard /> },
      { path: "/bookmarks", element: <ProtectedRoute><Bookmarks /></ProtectedRoute> },
      { path: "/certificates", element: <ProtectedRoute><CertificatesPage /></ProtectedRoute> },
      { path: "/verify/:id", element: <VerifyCertificate /> },
      { path: "/error/401", element: <Unauthorized /> },
      { path: "/error/500", element: <ServerError /> },
      { path: "/:courseName", element: <CoursePage /> },
      { path: "/:courseName/:lessonSlug", element: <CoursePage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;

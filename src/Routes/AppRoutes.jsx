import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Overview from "../pages/Overview/Overview";
import Tickets from "../pages/Tickets/Tickets";
import KnowledgeBase from "../pages/KnowledgeBase/KnowledgeBase";
import Settings from "../pages/Settings/Settings";
import Employees from "../pages/Employees/Employees";
import Report from "../pages/Report/Report";
import { useSelector } from "react-redux";
import { selectUserRole } from "../features/user/user.selectors";
import Announcements from "../pages/KnowledgeBase/Announcements";
import MainContent from "../pages/KnowledgeBase/MainContent";
import AnnouncementDetails from "../pages/KnowledgeBase/AnnouncementDetails";
import Category from "../pages/KnowledgeBase/Category";
import Article from "../pages/KnowledgeBase/Article";
import CreateArticle from "../pages/KnowledgeBase/CreateArticle";
import CreateAnnouncement from "../pages/KnowledgeBase/CreateAnnouncement";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="dashboard" element={<Dashboard />}>
        <Route path="overview" index element={<Overview />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="knowledge-base" element={<KnowledgeBase />}>
          <Route path="" element={<MainContent />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path={`announcements/:id`} element={<AnnouncementDetails />} />
          <Route path={`category/:id`} element={<Category />} />
          <Route path={`category/:id/article/:id`} element={<Article />} />
          <Route path={`create-article`} element={<CreateArticle />} />
          <Route
            path={`create-announcement`}
            element={<CreateAnnouncement />}
          />
        </Route>
        <Route path="settings" element={<Settings />} />
        <Route path="employee" element={<Employees />} />
        <Route path="reports" element={<Report />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

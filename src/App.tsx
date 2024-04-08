import Main from "./components/Main/Main";
import LoginForm from "./components/Forms/LoginForm";
import SignupForm from "./components/Forms/SignupForm";
import Auth from "./containers/AuthContainer/Auth/Auth";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./containers/Dashboard/Dashboard";
import "./index.css";
import Cards from "./components/Cards/Cards";
import ResponsiveCards from "./components/ResponsiveCards/ResponsiveCards";

function App() {
  return (
    // <ResponsiveCards/>
    // <Cards/>
 
    <Routes>
    <Route path="/" element={<Main />}>
      <Route index element={<Navigate to={"/auth"} />} />
      <Route path="auth" element={<Auth />}>
        <Route index element={<Navigate to={"/auth/login"} />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
);
}
export default App;

import Main from "./components/Main/Main";
import LoginForm from "./components/Forms/LoginForm";
import SignupForm from "./components/Forms/SignupForm";
import Auth from "./containers/AuthContainer/Auth/Auth";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Navigate to={"/auth"} />} />
        <Route path="auth" element={<Auth />}>
          <Route index element={<Navigate to={"/auth/login"} />} />
          <Route path="login" element={<LoginForm/>} />
          <Route path="signup" element={<SignupForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

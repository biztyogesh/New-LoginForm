import { Outlet } from "react-router-dom";

import "./Auth.scss";

function Auth() {
  return (
    <div className="flex flex-column flex-justify-center flex-align-center height-100 width-100">
      <div className="flex flex-align-center height-75 width-100">
        <div className="auth-container width-60 height-100">
          <div className="flex title-container">
            {/* <p className="title">DataDig</p> */}
          </div>
          <div className="auth-outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

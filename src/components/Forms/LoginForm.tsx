import { useForm } from "react-hook-form";
import { Button, Modal } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Forms.scss";
import AuthInput from "../AuthInput/AuthInput";

function LoginForm() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const validation = { required: true };
  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    if (data.Email.toLowerCase() === "yogesh" && data.Password === "Abcd@1234") {
      navigate("/dashboard");
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="flex flex-column flex-justify-end width-100">
      <div className="auth-header flex flex-align-center  margin-b-7">Login</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-column width-50">
          <div className="margin-b-3">
            <AuthInput name="Email" register={register} validation={validation} errors={errors} setValue={setValue} trigger={trigger} onChange={() => setOpen(false)}/>
          </div>
          <div className="margin-b-7">
            <AuthInput name="Password" register={register} type={"password"} validation={validation} errors={errors} setValue={setValue} trigger={trigger} onChange={() => setOpen(false)}/>
            {/* {open && <span className="incorrect-message">Incorrect username/password, please try again!</span>} */}
          </div>
        </div>
        <div className="flex flex-justify-between width-50 margin-b-8">
          <Button className="text-sm form-button flex-justify-start width-50" type="submit">
            Log in
          </Button>
          <span className="text-sm margin-t-6">Forgot Password?</span>
        </div>
        <span className="text-sm">
          Not A Member? <Link to={"/auth/signup"}>Sign Up</Link>
        </span>
      </form>
      <Modal dimmer={true} open={open} onClose={() => setOpen(false)} size="mini">
        <Modal.Header>Incorrect Credentials</Modal.Header>
        <Modal.Content>Incorrect username/password, please try again!</Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => setOpen(false)}>
            Okay
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default LoginForm;

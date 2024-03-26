import { useForm } from "react-hook-form";
import { Button } from "semantic-ui-react";
import AuthInput from "../AuthInput/AuthInput";
import { Link, useNavigate } from "react-router-dom";
import "./Forms.scss";

function SignupForm() {
  const navigate = useNavigate();
  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const validation = { required: true };

  const onSubmit = () => {
    navigate("/auth/login");
  };

  return (
    <div className="flex flex-column flex-justify-end">
      <div className="auth-header flex flex-align-center">Create new account.</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-column flex-justify-between width-60">
          <div className="flex flex-justify-between margin-t-2">
            <AuthInput className="width-48" name="First Name" register={register} validation={validation} errors={errors} setValue={setValue} trigger={trigger} width={48} />
            <AuthInput className="width-48" name="Last Name" register={register} validation={validation} errors={errors} setValue={setValue} trigger={trigger} width={48} />
          </div>
          <AuthInput name="Email" register={register} validation={validation} errors={errors} setValue={setValue} trigger={trigger} />
          <AuthInput name="Password" register={register} type={"password"} validation={validation} errors={errors} setValue={setValue} trigger={trigger} />
          <div className="margin-t-4 flex flex-column">
            <Button className="text-sm width-48 flex-justify-start form-button" type="submit">
              Create Account
            </Button>
            <span className="text-sm margin-t-4">
              Already A Member? <Link to={"/auth/login"}>Login</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;

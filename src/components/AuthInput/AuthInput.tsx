import { Input } from "semantic-ui-react";
import "./AuthInput.scss";

function AuthInput(Props: any) {
  const { register, name, validation, setValue, type, text, focus, errors, className, onChange } = Props;
  const handleChange = (e: any, { name, value }: any) => {
    setValue(name, value);
    onChange();
  };

  return (
    <div className={className}>
      <label className="auth-label">{name}</label>
      <span className="auth-input-group">
        <Input className={`auth-input `} type={type || text} name={name} {...register(name, validation)} onChange={handleChange} focus={focus} />
        {errors[name]?.type === "required" && <label className="input-warning">{name} is Required</label>}
      </span>
    </div>
  );
}

export default AuthInput;

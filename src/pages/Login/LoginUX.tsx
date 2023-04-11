import { FC } from "react";

import Page from "../../components/Page";
import { Field } from "../../components/InputField";
import { PrimaryButton } from "../../components/Buttons";
import ErrorField from "../../components/ErrorField";
interface LoginUXProps {
  email: string;
  password: string;
  passwordError?: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickHandler: () => void;
}
export const LoginUX: FC<LoginUXProps> = ({
  email,
  password,
  passwordError,
  onChangeHandler,
  onClickHandler
}) => {
  return (
    <Page useAbsoluteCenter={true} pageTitle="Login">
      <div className="login-ux">
        <Field
          name="email"
          id="email"
          type="email"
          labelText="Correo Electrónico"
          placeholder="Correo Electrónico"
          onChange={onChangeHandler}
          value={email}
        />
        <Field
          name="password"
          id="password"
          type="password"
          labelText="Contraseña"
          placeholder="Contraseña"
          onChange={onChangeHandler}
          value={password}
        />
        {passwordError && <ErrorField>{passwordError}</ErrorField>}
        <PrimaryButton
          onClick={onClickHandler}
        >Iniciar Sesión
        </PrimaryButton>
      </div>
    </Page>
  );
};

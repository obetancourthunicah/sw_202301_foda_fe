import { FC } from "react";

import Page from "../../components/Page";
import { Field, FieldSelect } from "../../components/InputField";
import { PrimaryButton } from "../../components/Buttons";
interface IEmpresasFormUXProps {
  codigo: string;
  nombre: string;
  status: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClickHandler: () => void;
}
export const EmpresaFormUX: FC<IEmpresasFormUXProps> = ({
  codigo,
  nombre,
  status,
  onChangeHandler,
  onSelectChangeHandler,
  onClickHandler
}) => {
  return (
    <Page useAbsoluteCenter={true} pageTitle="Login">
      <div className="login-ux">
        <Field
          name="codigo"
          id="codigo"
          type="text"
          labelText="Código"
          placeholder="EMP001"
          onChange={onChangeHandler}
          value={codigo}
        />
        <Field
          name="nombre"
          id="nombre"
          type="text"
          labelText="Nombre"
          placeholder="Nombre"
          onChange={onChangeHandler}
          value={nombre}
        />
        <FieldSelect
          name="status"
          id="status"
          labelText="Status"
          options={[{value:"Pending", text:"Pending"}, {value:"Active", text:"Active"}, {value:"Inactive", text:"Inactive"}]}
          onChange={onSelectChangeHandler}
          value={status}
        />

        <PrimaryButton
          onClick={onClickHandler}
        >Crear Empresa
        </PrimaryButton>
      </div>
    </Page>
  );
};

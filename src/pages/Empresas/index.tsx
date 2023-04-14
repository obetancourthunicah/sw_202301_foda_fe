import Page from "@/components/Page";
import { EmpresasUX } from "./EmpresasUX";
import { EmpresaFormUX } from "./EmpresaFormUX";
import { FC, useState } from "react";
import { useGetAllQuery, useAddNewMutation, useGetByIdQuery } from "@/store/services/empServices";
import { useNavigate, useParams } from "react-router-dom";

export const Empresas: FC = () => {
  const { data: empresas, isLoading, error } = useGetAllQuery([]);
  const navigate = useNavigate();
  return (
    <Page>
      <h1>Empresas</h1>
      <EmpresasUX
        empresas={empresas}
        isLoading={isLoading}
        error={error?.toString() || ""}
        onViewEmpresaClick={(id: string): void => {
          navigate(`/empresas/${id}`);
        }}
        onAddClick={(): void => {
          navigate(`/empresas/new`);
        }}
      />
    </Page>
  );
};

export const EmpresaForm: FC = () => {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [status, setStatus] = useState("");
  const [newEmpresa] = useAddNewMutation();
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
      case "codigo":
        setCodigo(value);
        break;
      case "nombre":
        setNombre(value);
        break;
      default:
        break;
    }
  };
  const onSelectChangeHandler = (
    event: React.SelectChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
      case "status":
        setStatus(value);
        break;
      default:
        break;
    }
  };
  const onClickHandler = async ()=>{
    const result = await newEmpresa({codigo, nombre, status}).unwrap();
    console.log(result);
    navigate("/empresas");
  }
  return <EmpresaFormUX
    codigo={codigo}
    nombre={nombre}
    status={status}
    onChangeHandler={onChangeHandler}
    onSelectChangeHandler={onSelectChangeHandler}
    onClickHandler={onClickHandler}
  />;
};

export const EmpresaView: FC = () => {
  const { id = '' } = useParams();
  const {data: empresa, isLoading, error} = useGetByIdQuery(id);
  return (
    <>
    {isLoading && <div>Loading...</div>}
    {error && <div>{error?.toString() || ''}</div>}
    {empresa && <div>{JSON.stringify(empresa)}</div>}
    </>
  );
};

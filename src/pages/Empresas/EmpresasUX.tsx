import { FC } from "react";
export interface IEmpresa {
  _id: string;
  codigo: string;
  nombre: string;
  status: string;
  created?: string;
  updated?: string;
  observacion?: string;
}

export interface IEmpresasUXProps {
  empresas: any[];
  isLoading: boolean;
  error: string;
  onViewEmpresaClick: (id: string) => void;
  onAddClick: () => void;
}

export const EmpresasUX: FC<IEmpresasUXProps> = ({
  empresas,
  isLoading,
  error,
  onViewEmpresaClick,
  onAddClick,
}) => {
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <a onClick={onAddClick}>Add</a>
      {empresas && empresas.map((empresa:IEmpresa) => (
        <EmpresaUX
          key={empresa._id}
          _id={empresa._id}
          codigo={empresa.codigo}
          nombre={empresa.nombre}
          status={empresa.status}
          onViewEmpresaClick={function (id: string): void {
            onViewEmpresaClick(id);
          }}
        />
      ))}
    </>
  );
};
export interface IEmpresaUXProps {
  _id: string;
  codigo: string;
  nombre: string;
  status: string;
  onViewEmpresaClick: (id: string) => void;
}
export const EmpresaUX: FC<IEmpresaUXProps> = ({
  _id,
  codigo,
  nombre,
  status,
  onViewEmpresaClick,
}) => {
  return (
    <div
      data-id={_id}
      onClick={() => {
        onViewEmpresaClick(_id);
      }}
    >
      <span>{codigo}</span>
      <span>{nombre}</span>
      <span>{status}</span>
    </div>
  );
};

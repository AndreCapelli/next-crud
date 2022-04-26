import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
  alterado?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? (
        <Entrada texto="Código" valor={id} somenteLeitura className={`mb-4`} />
      ) : (
        false
      )}
      <Entrada
        texto="Nome"
        valor={nome}
        onChange={setNome}
        className={`mb-4`}
      />
      <Entrada texto="Idade" valor={idade} tipo="number" onChange={setIdade} />
      <div className={`flex justify-end mt-5`}>
        <Botao
          cor="green"
          className={`mr-2`}
          onClick={() => props.alterado?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao cor="gray" onClick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  );
}

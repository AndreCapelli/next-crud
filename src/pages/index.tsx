import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Pessoa 1", 34, "1"),
    new Cliente("Pessoa 2", 10, "2"),
    new Cliente("Pessoa 3", 54, "3"),
    new Cliente("Pessoa 4", 39, "4"),
    new Cliente("Pessoa 5", 80, "5"),
  ];

  function clienteSelecionado(cliente: Cliente) {}

  return (
    <div
      className={`flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white`}
    >
      <Layout titulo="Cadastro Simples">
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteSelecionado}
        ></Tabela>
      </Layout>
    </div>
  );
}

import { useState, useEffect, useContext } from "react";
import "./App.css";
import AlunoCard from "./components/AlunoCard/";
import { useGlobalContext } from "./contexts/context";
import Formulario from "./pages/Formulario";

function App() {
  const context = useGlobalContext();
  const [page, setPage] = useState("all");
  const { alunos } = context;

  if (page == "cadastro") {
    return <Formulario />;
  }

  return (
    <>
      <div>
        <header
          className="main-header"
          style={{
            display: "flex",
            padding: "1em",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "2em",
          }}
        >
          <h1>Up-Fitness</h1>
          <button
            onClick={() => {
              setPage("cadastro");
            }}
          >
            Cadastrar Alunos
          </button>
        </header>
        <h2>Todos os Alunos: </h2>
        <div
          className="alunos-grid"
          style={{
            display: "flex",
            gap: "1em",
            padding: "2em",
            flexWrap: "wrap",
            maxWidth: "900px",
            overflowY: "scroll",
          }}
        >
          {alunos.map((aluno, idx) => {
            return (
              <AlunoCard
                id={aluno.id}
                key={idx}
                nome={aluno.nome}
                peso={aluno.peso}
                treinos={aluno.Treinos}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

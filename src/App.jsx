import { useState, useEffect, useContext } from "react";
import "./App.css";
import AlunoCard from "./components/AlunoCard/";
import { useGlobalContext } from "./contexts/context";


function App() {
  const context = useGlobalContext();
  const {alunos} = context;

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
          <p>Cadastrar Novo Aluno</p>
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

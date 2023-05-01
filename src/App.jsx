import { useState, useEffect } from "react";
import "./App.css";
import AlunoCard from "./components/AlunoCard/";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [form, setForm] = useState({
    tipo: "",
    series: "",
    repeticoes: "",
    AlunoId: ""
  });

  const resolverMudanca = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetch("http://localhost:3232/alunos/alunotreino", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setAlunos(data.resultado))
      .catch((err) => console.log(err));
  }, []);

  const criarTreino = (payload) =>{
    fetch("http://localhost:3232/treinos/cadastro", {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(payload)
    }).then(res => res.json()).catch(err => console.log(err))
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
                stAluno={alunos}
                mutAluno={setAlunos}
                id={aluno.id}
                key={idx}
                nome={aluno.nome}
                peso={aluno.peso}
                treinos={aluno.Treinos}
                form={form}
                mudanca={resolverMudanca}
                criar={criarTreino}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

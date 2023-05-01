import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [alunos, setAlunos] = useState([]);
  const [form, setForm] = useState({
    tipo: "",
    series: "",
    repeticoes: "",
    AlunoId: "",
  });

  const resolverMudanca = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const criarTreino = (payload) => {
    fetch("http://localhost:3232/treinos/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

      setAlunos(alunos.map(a =>{
        if(a.id == id)
        {
            return a.Treinos = [...a.Treinos,
                form
            ]
        }
    }))
  };

  useEffect(() => {
    fetch("http://localhost:3232/alunos/alunotreino", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setAlunos(data.resultado))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AppContext.Provider
      value={{ alunos: alunos, setAlunos: setAlunos, form: form, setForm: setForm, resolverMudanca: resolverMudanca, criarTreino: criarTreino }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider as default };

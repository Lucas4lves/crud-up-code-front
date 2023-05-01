import { useState } from "react";
import "./alunocard.css";
import avatar from "../../assets/avatar.png";

import TreinoDisplay from "../TreinoDisplay";
import CriarExecicio from "../CriarExercício";

const AlunoCard = ({ id, nome, peso, treinos, form, mudanca, criar, mutAluno, stAluno }) => {
  const [mostrarTreinos, setMostrarTreinos] = useState(false);
  const [adicionarTreino, setAdicionarTreino] = useState(false);
  if (mostrarTreinos) {
    return (
      <div className="card-container treino">
        <div
          className="card-treino-top"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            alignItems: "center",
          }}
        >
          <h3>Treinos</h3>
          <button
            onClick={() => {
              adicionarTreino
                ? setAdicionarTreino(false)
                : setAdicionarTreino(true);
            }}
            style={{
              padding: ".3em",
              height: "3em",
              width: "3em",
              fontSize: "18px",
            }}
          >
            +
          </button>
        </div>

        {treinos.map((treino, idx) => {
          return (
            <TreinoDisplay
              key={idx}
              tipo={treino.tipo}
              series={treino.series}
              repeticoes={treino.repeticoes}
              treinoId={treino.treinoId}
            />
          );
        })}
        {adicionarTreino ? (
          <CriarExecicio id={id} form={form} mudanca={mudanca} mutAluno={mutAluno} stAluno={stAluno} />
        ) : null}
        <div className="card-action">
          <button
            onClick={() => {
              setMostrarTreinos(() => {
                if (mostrarTreinos) {
                  setAdicionarTreino(false);
                  return false;
                }

                return true;
              });
            }}
          >
            Voltar
          </button>
          <button onClick={()=>{
            criar(form)
            mutAluno(stAluno.map(a =>{
                if(a.id == id)
                {
                    return a.Treinos = [...a.Treinos,
                        form
                    ]
                }
            }))
          }}>Confirmar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="card-container">
      <span className="edit">...</span>
      <img src={avatar} alt="" className="card-avatar" />
      <h4 className="card-name">{nome}</h4>
      <p className="card-peso">Peso: {peso}</p>
      <button
        onClick={() => {
          setMostrarTreinos(() => {
            if (mostrarTreinos) {
              return false;
            }

            return true;
          });
        }}
      >
        Ver Treinos
      </button>
    </div>
  );
};

export default AlunoCard;

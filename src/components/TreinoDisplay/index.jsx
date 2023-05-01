import "./treinodisplay.css";

const TreinoDisplay = ({tipo, series, repeticoes, treinoId}) => {
    return (
        <>
            <div id={treinoId} className="treino-line">
            <p className="treino-tipo">{tipo}</p>
            <p className="treino-series">{series}</p>
            <p className="treino-repeticoes">{repeticoes}</p>
            </div>
        </>
    )
}

export default TreinoDisplay;
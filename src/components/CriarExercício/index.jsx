
import "./criar.css";

const CriarExercicio = ({id, form, mudanca}) =>{
    form['AlunoId'] = id;
    return (
        <div className="form">
            <input value={form.tipo} type="text" name="tipo" id="tipo" onChange={(e) =>{
                mudanca(e);
            }}/>
            <input value={form.series} type="text" name="series" id="series" onChange={(e) =>{
                mudanca(e);
            }} />
            <input value={form.repeticoes} type="text" name="repeticoes" id="repeticoes" onChange={(e) =>{
                mudanca(e);
            }}/>
        </div>
    )
}

export default CriarExercicio;
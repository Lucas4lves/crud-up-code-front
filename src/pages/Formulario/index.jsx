import "./form.css"

export default function Formulario(){
  
  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
      nome: e.target.elements.nome.value,
      peso: e.target.elements.peso.value,
    }
    
    const jsonData = JSON.stringify(data)
    
    Cadastrar(jsonData)
  }

  async function Cadastrar(data){
    await fetch("http://localhost:3232/alunos/cadastro",
      {
        method:'POST',
        headers : {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin" : "*"
        },
        body : data
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return(
    <div className="container">
     <h1>Up-Fitness</h1> 
      <form onSubmit={onSubmit}>
        <label htmlFor="nome" className="labelname">Nome:</label>
        <input type="text"  name="nome" required/><br/>
                
        <label htmlFor="peso">Peso (em quilogramas):</label>
        <input type="number"  name="peso" step="0.01" min="0" required/><br/>
        
        <button type="submit" className="botao">Enviar</button>
      </form>
    </div>
  )
}
import Button from "components/Button"
import Routes from "./Routes"

export default function App() {

  return (
    <>
      <Routes/>
      <Button text="Comprar" visible={false} comprar={true} />
      <Button text="Compre agora!" visible={false} onClick={()=> alert("Foi salvo")}/>
      <Button text="Adicionar ao carrinho" visible={false} add={true}/>
      <Button text="Finalizar compra" visible={false} add={true}/>
      <Button text="Continue para pagamento" visible={false} add={true}/>
      <Button text="Excluir definitivamente" visible={false} excluir={true}/>
      <Button text="Salvar" visible={false} add={true}/>
      <Button text="Adicionar novo" visible={false} novo={true}/>
      
    </>
  )
}



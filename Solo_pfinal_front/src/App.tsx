import Button from "./components/Button"
import Header from "./components/Header"

export default function App() {

  return (
    <>
      <Header /> 
      <Button text="Comprar" visible={true} comprar={true} />
      <Button text="Compre agora!" onClick={()=> alert("Foi salvo")}/>
      <Button text="Adicionar ao carrinho" add={true}/>
      <Button text="Finalizar compra" add={true}/>
      <Button text="Continue para pagamento" add={true}/>
      <Button text="Excluir definitivamente" excluir={true}/>
      <Button text="Salvar" add={true}/>
      <Button text="Adicionar novo" novo={true}/>
    </>
  )
}



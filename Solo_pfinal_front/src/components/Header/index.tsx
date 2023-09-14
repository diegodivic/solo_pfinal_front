import { MeuHeader } from "./styles"
import { Link } from "react-router-dom"

export default function Header(){
    return <MeuHeader>
        <nav>
            <Link to='/'>Inicio</Link>
            <a href="">Quem somos</a>
            <a href="">Produtos</a>
        </nav>
        <div>
           <a href="">Login</a>
        </div>
    </MeuHeader>
}
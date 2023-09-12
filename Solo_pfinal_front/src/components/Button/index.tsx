import { ButtonPrime } from './style'


interface ButtonProps{
    text?: string
    visible?: boolean
    onClick?: ()=> void
    comprar?: boolean
    add?: boolean
    excluir?: boolean
    novo?: boolean
}

export default function Button({
    text = 'Cadastrar',
    visible = true,
    onClick,
    comprar,
    add,
    excluir,
    novo
}: ButtonProps){
    onClick
    return <>{ visible && <ButtonPrime comprar={comprar} add={add} excluir={excluir} novo={novo} onClick={onClick}>{text}</ButtonPrime>}</>
}
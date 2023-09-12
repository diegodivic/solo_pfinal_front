import styled, { css } from 'styled-components';

interface ButtonPrimeProps{
    comprar?: boolean
    add?: boolean
    excluir?: boolean
    novo?: boolean
}

export const ButtonPrime = styled.button<ButtonPrimeProps>`
    padding: 14px 65px;
    border: 1px solid #0D0D0D;
    font-family: Public Sans;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    line-height: 22px;
    letter-spacing: -0.4000000059604645px;

    &:hover{
    background: #000000;
    color: #fff;
    cursor:pointer;
    }

    ${(props)=>{
        return props.comprar && css`
        background: #2F80ED;
        color: #fff;

        &:hover{
            background:#3d5afe;
            cursor:pointer;
        }
        `
    }}
    ${(props)=>{
        return props.add && css`
        background: #000000;
        color: #fff;

        &:hover{
            background:#4D4D4D
        }
        `    
    }}
    ${(props)=>{
        return props.excluir && css`
        border: 1px solid #ff0000;
        color: #ff0000;

        &:hover{
            background:#ff0000;
            color: #fff
        }
        `    
    }}
    ${(props)=>{
        return props.novo && css`
        background: #979797;
        color: #ffF;

        &:hover{
            background:#BDBDBD;
            color: #fff
        }
        `    
    }}

`
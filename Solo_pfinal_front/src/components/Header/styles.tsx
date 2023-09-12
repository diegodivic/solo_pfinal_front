import styled from 'styled-components';
import THEME from '../../theme';

export const MeuHeader = styled.header`
    font-family: Public Sans;
    border: 1px solid black;
    background: ${THEME.COLORS.PRIMARY_DARK};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    a{
        color: ${THEME.COLORS.WHITE};
        text-decoration: none;
        font-weight: bold;
        
    }

    nav{
        display: flex;
        justify-content: center;
        gap:30px;
    }
`
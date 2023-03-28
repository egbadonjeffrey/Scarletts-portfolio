import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    body {
        background: ${({ theme }) => theme.background} ;
        transition: background-color 300ms ease;
    }
`;

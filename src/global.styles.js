import {createGlobalStyle} from 'styled-components';

//metodo per creare app responsive
export const GlobalStyle = createGlobalStyle`
body{
    font-family: Helvetica,Arial,sans-serif;
    padding: 20px 40px;

    //questo codice viene applicato solo se il max-width è inferiore a 800px
    @media screen and (max-width: 800px){
        padding: 10px;
    }
}
a{
    text-decoration: none;
    color: black;
}

*{
    box-sizing: border-box;
}
`
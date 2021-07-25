import styled from 'styled-components';
//import backgroundOne from '../../assets/img/background/pattern-1.jpg';
import backgroundOne from '../../assets/img/background/pattern-1.png';
//import backgroundTwo from '../../assets/img/background/pattern-2.jpg';
import backgroundTwo from '../../assets/img/background/pattern-1.jpg';
//import backgroundThree from '../../assets/img/background/pattern-3.jpg';
import backgroundThree from '../../assets/img/background/pattern-2.jpg';


export const HomeHeader = styled.div`
    width: 100%;
    height: auto;
    //margin-bottom: 25px;
    //padding: 10px;
    align-items: center;
    text-align: center;
    justify-content: center;   
    display: grid;
    background-color: #f2f2f2;

        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f2f2f2;

        .cart{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
            
        }

        .cartLogo{
            width: 50px;
        }
            
        .logo{
            width: 70px;
            margin: 10px;
        }
    `;


export const HomeSectionOne = styled.section`
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-size: repeat;
    background-attachment: fixed;
    background-position: center;
    display: grid;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundOne})

    `;

  
 export const Title = styled.div`
        
        width: 100%;
        //background: #e2e2e2;
        display: grid;
        justify-content: space-around;
        grid-template-columns: auto;
        grid-gap: 10px;
`


export const HomeContainer = styled.div`
        
        width: 100%;
        //background: #e2e2e2;
        display: grid;
        justify-content: space-around;
        grid-template-columns: auto auto auto auto;
        grid-gap: 25px 25px 25px 25px;

        @media (max-width: 1100px){
            height: 100%;
            width: 100%;
            display: grid;
            justify-content: space-around;
            grid-template-columns: auto auto;
            grid-gap: 25px 25px;
        }

        @media (max-width: 600px){
            height: 100%;
            width: 100%;
            display: grid;
            justify-content: space-around;
            grid-template-columns: auto;
            grid-gap: 25px;
        }
`

export const Cards = styled.div`
    display: grid;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    text-align: center;
    padding: 20px;
    margin: 25px;
    border-radius: 15px; /* 5px rounded corners */
    background-color: #fff;
    width: auto;
    height: 300px;

    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transform: scale(1.05);
        transition: 0.5s;
    }

    .button{
        background-color: #174578bd;
        color: #fff;
        border: none;
        text-align: center;
        letter-spacing: .5px;
        cursor: pointer;
        font-size: 14px;
        border-radius: 5px;
        display: inline-block;
        padding: 10px 10px;
        text-transform: uppercase;
        transition: 0.3s;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        background-color: #174278;
    }

    }

    `;

export const TextoCabecalho = styled.h1`
    //background-color: green;
    color: white;
    margin: 25px;
    font-size: 80px;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-family: 'Staatliches', cursive;

    @media (max-width: 600px){
        color: white;
        font-size: 40px;
        color: white;
        text-shadow: 2px 2px 4px #000000;
        font-family: 'Staatliches', cursive;
    }
    `;

export const TextoCabecalhoA = styled.span`
    //background-color: green;
    margin: 25px;
    font-size: 90px;
    color: #174578;
    font-family: 'Staatliches', cursive;

    @media (max-width: 600px){
        color: white;
        font-size: 40px;
        color: #174578;
        font-family: 'Staatliches', cursive;
    }
    `;

    
export const HomeSectionTwo = styled.section`
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-size: repeat;
    background-attachment: fixed;
    background-position: center;
    display: grid;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundTwo})
    `;

 export const CardTwo = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    text-align: center;
    padding: 20px;
    margin: 25px;
    border-radius: 15px; /* 5px rounded corners */
    background-color: white;
    width: 400px;
    height: 500px;

    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    @media (max-width: 600px){    
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        text-align: center;
        padding: 20px;
        margin: 25px;
        border-radius: 15px; /* 5px rounded corners */
        background-color: white;
        width: 200px;
        height: 300px;
    }
    `;

   

export const HomeSectionThree = styled.section`
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-size: repeat;
    background-attachment: fixed;
    background-position: center;
    display: grid;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundThree})
    `;

export const HomeContainerThree = styled.div`
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    height: 100vh;
    width: 75%;
    margin: 0 auto;
    //background-color: pink;
    `;

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 15px; /* 5px rounded corners */
    background-color: white;
    width: 700px;
    height: auto;

    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    @media (max-width: 600px){    
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 15px; /* 5px rounded corners */
        background-color: white;
        width: 300px;
        height: auto;
    }
    `;

export const CardContainer = styled.div`
    padding: 15px;
    height: 100%;
    transition: 0.3s;
    background-color: white;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 35px 35px;
    `;

export const H4 = styled.h4`
    //background-color: green;
    color: black;
    font-size: 20px;
    padding: 15px;
    text-align: justify;
    color: #314d55;
    font-family: 'Arial';
    `;
    
    
export const Input = styled.input`
    border: 1px solid #ddd;
    height: 25px;
    padding: 10px;
    font-size: 17px;
    border-radius: 10px; 

    &:focus,
    &:active {
        outline: none;
        box-shadow: 0 0 1em #81c2ff;
    }
`;

export const Button = styled.button`
    height: 50px;
    font-size: 20px;

    border: 1px solid #000;
    background: #314d55;
    color: #fff;
    border-radius: 5px; 

        &:focus,
        &:active {
            outline: none;
            box-shadow: none;
        }
`;


export const HomeFooter = styled.div`
    width: 100%;
    height: 90px;
    display: grid;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 20px;
    background-color: #314d55;

    @media (max-width: 600px){    
        width: 100%;
        height: 90px;
        display: grid;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: 12px;
        background-color: #314d55;
    }
    `;

export const Paragrafo = styled.p`
    font-family: sans-serif;
    font-size: 18px;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    & a {
        text-decoration: none;
        color: white;
    }

    @media (max-width: 600px){    
        font-family: sans-serif;
        font-size: 14px;
        text-align: center;
        color: white;
        text-shadow: 2px 2px 4px #000000;
    }
    `;

export const Content = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    `;


export const ErrorMsg = styled.span`
    display: block;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
    `;
import styled from 'styled-components'

export const DivContainerLogin = styled.div`
    display:flex;
    justify-content:center;
    font-family: 'poppins-regular';
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
    height:100%;
`

export const Form = styled.form`
    width:40%;
    display:flex;
    justify-content:center;
    border-radius:10px;
    padding: 40px 0px;
    align-content:center;
    margin-bottom:50px;
    margin:74px 0px;
    max-width: 858px;
    fieldset{
        border:none;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:center
    }
    legend{
        font-size:35px;
        margin:40px 0px;
        font-weight:bold;
        font-family:'Poppins-bold'
    }
    img{
        width:70px
    }
    p{
        margin-bottom: 36px;
        
    }
    input.sera{
        background:white;
        display:flex;
        justify-content:center;
        border: 2px solid transparent;
        padding: 13px 21px;
        margin-bottom: 25px ;
        background: rgb(232, 240, 254);
        color:black;
        border-radius:10px;
        width:100%;
    }
    input::placeholder { color:black; }
    input:focus{
        border:none
    }
    .erro{
        color:red;
    }

`

export const DivInput = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:68%;
`


export const Button = styled.button`
    background:#7BC0E3;
    display:flex;
    justify-content:center;
    border: none;
    padding: 13px 21px;
    margin-bottom: 32px ;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    width:68%;
    color:white;
    cursor:pointer;
    
  
`



export const DivEsqueceu = styled.div`

    display:flex;
    justify-content:space-between;
    width: 68%;
`
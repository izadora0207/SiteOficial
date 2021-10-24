import styled from 'styled-components'



export const FormCadastro= styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    input{
    border: 2px solid transparent;
    padding: 13px 21px;
    margin-bottom: 25px;
    background: rgb(232, 240, 254);
    border-radius: 10px;
    width: initial;
}
input::placeholder { color:black; }
input:focus{
    border:none
}

p{
    margin:30px 0px;
}
h1{
    font-size:35px;
}
`

export const DivCadastro= styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    height: 100%;
    margin-bottom:50px;
}

`


export const DivSVG= styled.div`
    margin:20px;
    font-size:20px;
    position:absolute;


`


export const Button = styled.button`
    background:white;
    display:flex;
    justify-content:center;
    border: none;
    padding: 13px 21px;
    margin-bottom: 32px ;
    background:#7BC0E3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    color:white;
    cursor:pointer;
`


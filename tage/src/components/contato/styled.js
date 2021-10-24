import styled from 'styled-components'

export const DivContainerContato = styled.div`
    justify-content: center;
    align-items: center;
    display:flex;
    margin-top:124px;
    flex-direction:column;
    text-align:center;
    div.div1{
        background:#60e1cb;
        min-height: 488px;
        width: 60%;
        border-radius: 7px;

        
    }
    div.div2{
    background: white;
    min-height: 400px;
    width: 60%;
    z-index: 2;
    margin-bottom:100px;
    border-radius: 7px;
    box-shadow: -20px -14px 0px 0px #60e1cb;
    justify-content:center;
    align-items: center;
    display:flex;
    padding: 41px 0px;

        
    }

    h1{
        margin-bottom:40px;
        font-family:'poppins-bold';
        color:#60e1cb;
        margin-top: -31px;
        font-size:35px;
        line-height:40px
    }

    p{
        font-family:'poppins-regular';
        width:90%;
        margin-bottom:60px;
    }
    form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
        width: 100%;
        textarea{
            width:92%;
            border:2px solid #7BC0E3;
            margin: 20px;
            padding:10px 20px;
            border-radius:5px;
            width: 67%;
        }
        input{
            border:2px solid #7BC0E3;
            margin: 20px;
            padding:10px 20px;
            border-radius:5px;
            ::placeholder {color:#7BC0E3};
            width: 28%;
        }
        div{
            width: 100%;
        }
        button{
            background: #292525;
            box-shadow: 1px 9px 14px 1px rgb(96 225 203 / 56%);
            border-radius: 1000px;
            padding: 13px 43px;
            color: white;
            margin-top: 50px;
        }
    }
`

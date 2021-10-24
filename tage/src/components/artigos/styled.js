import styled from 'styled-components'

export const DivBackA= styled.div`
  background:#60E1CB;
  text-align:center;
  height:300px;
  z-index:1;

  h1{
        font-family:'poppins-bold';
        line-height:40px;
        
        padding-top:70px;
    }

    p{
        font-family:'poppins-regular';
        margin-top:29px;
        padding-bottom:100px;
    }
    div{
        width:70%;
        min-height:200px;
        background:white;
    }

`



export const DivCont= styled.div`
  background:white;
  text-align:left;
  width:80%;
  display:flex;
  flex-direction:column;
  margin:auto;
  position:relative;
  z-index:3;
  top:-96px;
  border-radius:20px;
  margin-bottom:100px;
  box-shadow: 0px 97px 90px rgba(7, 0, 59, 0.15);
  padding:40px;
  h2,h3{
    margin: 66px 0px;
  }
  h3{
    margin: 30px 0px;
  }
  p{
    margin:10px 0px;
  }
`


export const Cont= styled.div`
  background:#F9FFFE;

`
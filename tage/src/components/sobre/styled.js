import styled from 'styled-components'

export const DivSobre= styled.div`
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
  

`

export const DivContSobre= styled.div`
  text-align:center;
  background:white;
  display:flex;
  margin:auto;
  position:relative;
  margin-bottom:100px;
  flex-direction:column;
  padding: 26px;
  div{  z-index: 2;}

  h2{
        font-family:'poppins-bold';
        line-height:40px;
        font-size:30px;
        padding-top:50px;
    }

    p{
        font-family:'poppins-regular';
        margin-top:29px;
        padding: 15px 100px;
    }
    img{
        position: absolute;
        width: 335px;
        z-index: 1;
        top: 95px;
        left: -3px;
    }
`


export const Img = styled.img`
    width: 225px;
    height: 225px;
    box-shadow: -16px -15px 0px 5px #7bc0e3;
`

export const A = styled.div`
    margin-top: 30px;
    p ,h2{
        margin-top: 10px;
    }
    h2{
        font-family:'poppins-bold';
        line-height:40px;

    }

    p{
        font-family:'poppins-regular';
    }

`
export const DivA = styled.div`
   background:#60E1CB;
   padding-bottom:60px;
   box-shadow: rgba(7, 0, 59, 0.15) 0px 97px 90px;
`
export const Section = styled.section`
    padding: 50px auto;
    flex-wrap: wrap;
    display: flex;
    justify-content: center!important;
    align-items: center;
`

export const Div = styled.div`
    margin: 10px 45px;
    max-width: 225px;
    border-radius: 5px;
`
export const Linha2 = styled.div`
   height:4px;
   background:#319483;
   width:50px;
   border-radius:50px;
   margin-top:20px;
   margin-left:5px;
   margin-bottom:50px;
`
export const Titulo = styled.h1`
    font-family:'poppins-bold';
    line-height:40px;
    font-weight: normal;
    margin-bottom:20px;
    padding-top:50px;
    margin-left:20px;
`
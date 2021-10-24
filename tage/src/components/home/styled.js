import styled from 'styled-components'

export const DivContainerHome = styled.div`
    justify-content: center;
    align-items: center;
    display:flex;
    padding:124px 0px;
    flex-wrap:wrap;
    text-align:left;
   div.card{
    font-family: 'poppins-regular';
    margin: 10px;
    min-height: 200px;
    width: 23%;
    background: #FDFDFF;
    box-shadow: 0px 97px 90px rgba(7, 0, 59, 0.15);
    border-radius: 12px;
    -webkit-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    min-width: 263px;
    border-top:5px solid #60E1CB;
    min-height: 231px;
   }
   div.card:hover{
    -webkit-transform:scale(1.1,1.1);;
    transform:scale(1.1,1.1);
    
   }
   div p{
       margin: 20px 0px;
       font-size:13px
   }

   div.conteudo{
    padding:20px ;
   }

  img{
      width:100%;
      border-top-left-radius:6px;
      border-top-right-radius:6px;
  }
  span.rating{
      font-size:20px ;
      color: yellow;
      margin-right:20px
  }
  .votes{
      font-size:11px
  }
  .topicos{
      display:flex;
      p{
          margin-top:0;
          font-weight:bold;
          margin-right:15px;
          font-size:10px;
      }

    
  }

  .recipe-save{
    display: flex;
		align-items: center;
		padding: 6px 14px 6px 12px;
		border-radius: 4px;
		border: 2px solid #60E1CB;
		color: var(--primary);
		background: none;
		cursor: pointer;
		font-weight: bold;
        color: #60E1CB;
		
		svg {
			margin-right: 6px;
            color:#60E1CB;
            font-size: 15px;
		}
      }
`


export const DivHomeH= styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    background:White;
    padding:120px 0px;
    text-align:center;
    h1{
        font-family:'poppins-bold';
        line-height:40px;
        width:70%;
        margin-top:20px;
        padding: 10px 20px;
        z-index: 5;
        span{
            color:#60E1CB;

        }
    }

    p{
        font-family:'poppins-regular';
        margin-top:29px;
        padding: 10px 20px;
    }
    hr{
        position: relative;
        left: -419px;
    }

    div{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        margin-top:20px;
        z-index: 2;
    }
    button{
        margin:30px;
        padding:15px 25px;
        border-radius:20px;
    }

    .btn{
        background:#60E1CB;
        color:White;
        box-shadow: 0px 46px 52px rgba(96, 225, 203, 0.56);
        border:none;
    }
    .btn-out{
        color:#60E1CB;
        border:1px solid #dfdfdf;
    }
    img{
        position: absolute;
        width: 335px;
        z-index: 1;
        top: 95px;
        right: -3px;
    }
`

export const DivBack= styled.div`
  background:#E9FBF8;
  text-align:center;
  h1{
        font-family:'poppins-bold';
        line-height:40px;
        padding-top:70px;
    }

    p{
        font-family:'poppins-regular';
        margin-top:29px;
    }

`
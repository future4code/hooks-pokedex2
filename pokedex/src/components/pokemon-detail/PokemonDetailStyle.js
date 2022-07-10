import styled from 'styled-components'

export const DetailsDiv = styled.div`
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
height: calc(350px*1.5);
width: calc(300px*1.5);
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
scrollbar-width:none;
    -ms-overflow-style:none;
    
    h1,h2,h3{
      -webkit-text-stroke: 1px black;
      text-transform: uppercase;
      color: white;
    }
    p{
      color: white;
    }

    &::-webkit-scrollbar{
    width:0;
    height:0;
  }

&>div{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  &>div{
    margin-bottom: 15px;
  }
}

img{
  filter: drop-shadow(5px 5px 5px #222);
  height: 150px;
  width: 150px;
}
img:nth-of-type(1){
  align-self: flex-end;
}
img:nth-of-type(2){
  align-self: flex-start;
}
`
export const ButtonGoBack = styled.button`
position: fixed;
margin-left: 510px;
transition: 300ms;
background-color: transparent;
&:hover{
  transition: 300ms;
  background-color: red;
}

font-size: 1.5em;
font-weight: 600;
border-radius: 50%;

cursor: pointer;

@media screen and (max-width: 400px){
  margin-left: 0;
  top: 2.5vh;
}
`

export const Div = styled.div`
position: fixed;
height: 100vh;
width: 100vw;
top: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(255,255,255,0.5);
z-index: 1;
`

export const InfosDiv = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
text-align: center;
&>div{
  width: 50%;
}
`
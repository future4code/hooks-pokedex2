import styled, { createGlobalStyle } from "styled-components";

// estilo global
export const GlobalStyle = createGlobalStyle`
body{
    background-color: #fff;
    width: 100%;
    min-height: 100vh;
}
`


export const FluxoryButtons = styled.button`
margin-right: 25px;

  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 24px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  overflow: visible;
  padding: 2px 10px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  widoveocus isabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}
`

export const Header = styled.div`
background: linear-gradient(#5EBBE0, #fff);
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
` 

export const Title =  styled.h1`
margin-left: 25px;
font-family: 'Pokemon solid', sans-serif;
font-weight: 400;
-webkit-text-stroke: 2px #3761a8;
color:  #feca1b;

@media screen and (max-width: 450px){
  font-size: 22px;
}
`

export const Card = styled.div`
background-color: lightgray;
height: 350px;
width: 250px;
border-radius: 15px;
padding-bottom: 20px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
margin: 0 10px 30px 10px;
transition: 500ms;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 15px;

img{
  transition: 500ms;
}

h2{
      text-transform: uppercase;
      filter: drop-shadow(0 0 10px rgb(255,255,255,1))
    }


&:hover{
    transition: 500ms;
    img{
      transition: 500ms;
      transform: scale(1.4);
    }
}
`

export const ButtonsCard = styled.button`
background-color: transparent;
border-radius: 8px;

color: white;
margin-right: 5px;
cursor: pointer;
`

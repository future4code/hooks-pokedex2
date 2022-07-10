import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 100%;
min-height: 100vh;

position: relative;

img{
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
}
`
const PageNotFound = styled.h1`
color: #fff;

`
const Error = () => {
  return (
    <Div>
    <PageNotFound>Página não encontrada!</PageNotFound>
    <img src='https://i.gifer.com/WZhk.gif' alt='pikachu Gif'/>
    </Div>
  )
}

export default Error
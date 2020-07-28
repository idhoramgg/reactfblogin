import React from 'react';
import styled from 'styled-components'
import FacebookLogin from 'react-facebook-login';

// css
import './App.css';

//components
import Home from './components/Home'

const Container = styled.div`
  width: 100%;
  text-align: center;
  justify-content: 
  display: flex;
  height: 500px;
  background-color: gray
`
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato
`



function App() {
  const responseFacebook = (response) => {
    console.log(response);
  }
  const componentClicked = () => {
    alert('clicked')
  }
  return (
    <Container>
      
      Ini text didalam container <br/>
      <FacebookLogin
    appId="1091019964633497"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />

      <Button>
        Button  1
      </Button>
      <TomatoButton>
        Button 2
      </TomatoButton>
      <Home />
    </Container>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';

//
const Container = styled.div`
    width: 300px;
    height: 300px;
    background-color: red;
`
const Email = styled.input.attrs(props => ({
    // Every <PasswordInput /> should be type="password"
    type: "text",
    className: "email",
    placeholder: "Enter your email"
  }))` 
  color: green;
  `
const PasswordInput = styled.input.attrs(props => ({
    // Every <PasswordInput /> should be type="password"
    type: "password",
    className: "password",
    placeholder: "Enter your password"
  }))` 
    color: green;
  `
const TextH2 = styled.h2`
  color: blue;
`

const Home = () => {
    return (
        <Container>
           <TextH2>ini h2</TextH2>
            <Email></Email>
            <PasswordInput></PasswordInput>
        </Container>
    );
}

export default Home;
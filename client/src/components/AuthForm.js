import React from 'react';
import {
    FormControl,
    Input,
    InputLabel,
} from '@mui/material';
import styled from '@emotion/styled';
import {primary,messageBg  } from '../theme'


const onSubmit=(e)=>{
    e.preventDefault();
    console.log("Form Submitted");
}


const AuthForm = ({login}) => {
  return ( 
          <Form>
          <Header>{login?"Login":"Register"}</Header>
          <FormControl  variant="filled">
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input required id="email"  />
          </FormControl>
         {!login && <FormControl variant="filled">
            <InputLabel htmlFor='username'>Username</InputLabel>
            <Input required   id="username"  />
          </FormControl>}
          <FormControl variant="filled">
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input required type="password"  id="password"  />
          </FormControl>
            <Button onClick={(e)=>onSubmit(e)}>Submit</Button>
          </Form>
        
      );
};


const Button = styled.button`
    background-color:${primary};
    border:none;
    padding:10px 20px;
    border-radius:10px;
    margin-top:30px;
    color:white;
    font-size:1.2em;
    cursor:pointer;


`

const Form = styled.form`
    display:flex;
    flex-direction:column;
    padding:20px;
    background-color:white;
    border-radius:10px;
    margin:10px;
    max-width:90%;
    min-width:70%;
    border:1px solid ${messageBg};
`

const Header = styled.h1`
text-align:center;
font-weight:500;

`


export default AuthForm;

import styled from '@emotion/styled';
import React from 'react';
import {primary,bgColor} from '../theme';

const ChatBox = ({own}) => {
  return <Container own={own}>
      <Image src="./images/default.jpg"></Image>

      <MessageWrapper own={own}>
        <TimeStamp>1 hour ago</TimeStamp>
        <Message own={own}>
            Some long text just to see how it reacts to long message
        </Message>
      </MessageWrapper>
     
      </Container>;
};


const Message = styled.div`
    margin-top:5px;
    padding:8px;
    background-color:${props=>props.own?bgColor:primary};
    color:${props=>props.own?"black":"white"};
    border-radius:10px;
    //margin-left:45px;
    //margin-right:45px;
   // transform:translateY(-12px);
    max-width:70%;
    

`

const Container = styled.div`
    display:flex;
    margin-top:10px;
    //align-items:start;
    justify-content:${props=>props.own?"end":"start"};
    ${props=>props.own && "flex-direction:row-reverse"};
    margin-right:10px;
   
`
const MessageWrapper = styled.div`
     display:flex;
     flex-direction:column;
     align-items:${props=>props.own?"end":"start"};
     //justify-content:end;
    

`

const TimeStamp = styled.p`
    margin-left:10px;
    margin-right:10px;
    color:gray;
    font-size:0.9rem;
`

const Image = styled.img`
    height:40px;
    width:40px;
    object-fit:cover;
    border-radius:50%;
    align-self:end;
    transform:translateY(-8px);
    margin-left:10px;
    margin-right:10px;
`
export default ChatBox;

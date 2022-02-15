import styled from "@emotion/styled";
import {messageBg, primary} from '../theme';
import ChatBox from "./ChatBox";
const Messages = () => {
  return(
      <Container>
          <ChatWrapper>
          <ChatBox/>
          <ChatBox own={true}/>
          <ChatBox/>
          <ChatBox own={true}/>
          <ChatBox/>
          <ChatBox/>
          <ChatBox own={true}/>
          <ChatBox/>
          </ChatWrapper>
        
        <InputWrapper>
            <InputArea placeholder="Enter Message Here!!" ></InputArea>
            <SendButton>Send</SendButton>
        </InputWrapper>
      </Container>
  );
};


const ChatWrapper= styled.div`
     overflow-y:scroll;
     height:80%;
`

const InputArea = styled.textarea`
    width:80%;
    border:1px solid gray;
    outline:none;
    border-radius:5px;
    margin-right:10px;
    padding:10px;
    min-height:50px;
    resize:none;
`
const SendButton = styled.button`
    padding:10px 20px;
    background-color:${primary};
    border:none;
    border-radius:5px;
    color:white;
    cursor:pointer;
`



const InputWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    //background-color:gray;
    height:20%;
    padding:5px;

`

const Container = styled.div`
    //background-color:${messageBg};
    height:100%;
   // overflow-y:scroll;
    
`;

export default Messages;

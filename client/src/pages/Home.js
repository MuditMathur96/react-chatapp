import styled from "@emotion/styled";
import Conversation from "../components/Conversation";
import Messages from "../components/Messages";
import { bgColor } from "../theme";

const Home = () => {
  return (
    <div>
      <Container>
        <Right>
          <PullBar></PullBar>
          <Input placeholder="Search Friends" />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </Right>
        <Center>
         
          <Messages></Messages>
        </Center>
        {/* <Left>Left</Left> */}
      </Container>
    </div>
  );
};

const PullBar=styled.div`
  border-bottom:2px solid gray;
  width:30px;
  margin:auto;
  display:none;

  @media(max-width:1000px)
  {
    display:block;
  }
`

const Container = styled.div`
  margin-top:50px;
  height: calc(100vh - 50px);
  background-color: "";
  display: flex;
  flex-direction:row;

  @media(max-width:720px)
  {
    //margin-top:100px;
    flex-direction:column-reverse;
    padding-top:50px;
    
  }
`;

const Left = styled.div`
  height: 100%;
  background-color: bgColor;
  flex: 1;
  padding: 10px;
`;

const Right = styled.div`
  height: 100%;
  background-color: bgColor;
  flex: 1;
  padding: 15px;
  overflow-y:scroll;
 
  @media (max-width: 1000px) {
    height:10%;
    box-shadow: -1px -12px 12px -12px rgba(0, 0, 0, 0.35);
    -webkit-box-shadow: -1px -12px 12px -12px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: -1px -12px 12px -12px rgba(0, 0, 0, 0.35);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-top: 20px;
    overflow-y:visible;
  }

`;
const Center = styled.div`
  height: 100%;
  background-color: bgColor;
  flex: 2;
  padding: 10px;
  @media(max-width:720px)
  {
    flex:1;
   
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  padding: 10px 0;
  outline: none;
  width: 90%;
  
`;
export default Home;

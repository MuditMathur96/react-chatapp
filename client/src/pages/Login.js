import styled from "@emotion/styled";
import AuthForm from "../components/AuthForm";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <Container>
      <Left><Logo /></Left>
      <Right>
        <AuthForm login={true} />
      </Right>
    </Container>
  );
};


const Container = styled.div`
  height:calc(100vh - 50px);
  //background-color:gray;
  //align-items:end;
  justify-content:center;
  display:flex;
  flex-direction:row;

  @media(max-width:800px)
  {
    flex-direction:column;
  }

`;

const Left=styled.div`
  flex:1;
 // background-color:red;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  @media(max-width:800px)
  {
    //background-color:blue;
    flex:0.2;
  }
`;

const Right=styled.div`
  flex:1;
  //background-color:blue;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`;





export default Login;

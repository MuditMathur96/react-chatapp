import styled from "@emotion/styled";
import {hoverColor} from '../theme';

const Conversation = () => {
  return <Container>
      <Image src="./images/default.jpg" alt="Alternate Text For Image" />
      <span>User 1</span>
  </Container>;
};


const Container = styled.div`
    margin-top:10px;
    padding:5px 5px;
    display:flex;
    align-items:center;
    border-radius:5px;
    cursor:pointer;
    &:hover{
      background-color:${hoverColor};
    }

`

const Image = styled.img`
    height:40px;
    width:40px;
    border-radius:50%;
    object-fit:cover;
    margin-right:20px;
`




export default Conversation;

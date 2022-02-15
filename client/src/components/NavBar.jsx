import styled from '@emotion/styled';
import {Typography} from '@mui/material';
import {Link} from 'react-router-dom';




const NavBar = () => {
  return (
      <Container>
      <Left>
      <Link to="/" style={{textDecoration:"none",color:"white"}}>
          <Typography fontWeight={500} >
           Chat App 
            </Typography>
    </Link>
          
      </Left>
      <Right>
      <Link to="/register" style={{textDecoration:"none",color:"white",marginRight:'10px'}}>
          <Typography fontWeight={500} >
          Register
            </Typography>
    </Link>
    <Link to="/login" style={{textDecoration:"none",color:"white"}}>
          <Typography fontWeight={500} >
           Login
            </Typography>
    </Link>
          </Right>
      </Container>
      
      )
};



const Container = styled.div`
    display:flex;
    z-index:99;
    background-color:#3083ff;
    justify-content:space-between;
    align-items:center;
    padding:0px 10px 0px 14px ;
    height:50px;
    width:100%;
    position:fixed;
    top:0;
   

`;

const Left = styled.div`
color:white;
cursor:pointer;
`


const Right = styled.div`
color:white;
display:flex;
`






export default NavBar;

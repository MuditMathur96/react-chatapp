import styled from "@emotion/styled";
import { primary} from '../theme';
 
const Logo = () => {
  return <div>
      <Text>Let
          <span>'</span>
          s chat
      </Text>
  </div>;
};



const Text = styled.div`
    font-weight:600;
    font-size:4em;
    color:${primary};
    border:1px solid ${primary};
    padding:10px;
    border-radius:10px;
    text-align:center;
    

    & span{
        font-size:1.2em;
        //border:1px solid black;
        padding:1px;
    }

    @media(max-width:800px)
    {
        margin-top:15px;
    }

`

export default Logo;

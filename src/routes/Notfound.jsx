import {Link} from 'react-router-dom'
import styled from 'styled-components'
function Notfound() {
  return (
    <Div>
      <p>This Page is Not Found</p>
      <Link to='/' className='btn'>Go Back Home </Link>
    </Div>
  );
}
const Div = styled.div`
width:100%;
height:100vh;
background:rgba(0,0,0,.6);
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
font-size:2rem;
color:red;
gap:2rem;
`

export default Notfound;

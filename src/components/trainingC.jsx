








import {Link} from 'react-router-dom'
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'
import styled from 'styled-components'
function TrainingC() {
  return (
    <Div>
      <div className='left'>
        <h1>Training</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus provident officia unde </p>
        <Link to='/contact' className='btn'>Contact</Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='image-stack top'>
            <img src={Moon} className='img' />
          </div>
          <div className='image-stack bottom'>
            <img src={Pod} className='img' />
          </div>
        </div>
      </div>
    </Div>
  );
}
const Div = styled.div`
width:100;
margin:3rem 0;
display:grid;
grid-template-columns: repeat(2, 1fr);
height:100%;
.left {
  text-align:center;
  margin:auto;
  padding:1rem 4rem;
  max-width:600px;
  p {
    margin:1.2rem 0;
    
  }
}
.right {

  width:100;
  .img-container {
    
    display:grid;
    grid-template-columns:repeat(12,1fr);
    position: relative;
    text-align: center;
    align-items: center;
  }
  .img {
    max-width:60%;
    border: 1px solid #333;
  }
  .top {
    grid-column: 1 / span 8;
    grid-row:1;
    padding-top: 30%;
    z-index:6;
  }
  .bottom {
    grid-column: 4/-1;
    grid-row:1;
    z-index:5;
  }
}
@media screen and (max-width:1140px) {
  grid-template-columns:1fr;
  .right {
    .img {
      max-width:80%;
    }
  }
}
`

export default TrainingC;











import heroImage from '../assets/heroImg.jpg'
import styled from 'styled-components'
function HeroImage({heading,text}) {
  return (
    <Div className='hero-image'>
      <div className='heading'>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </Div>
  );
}
const Div = styled.div`
background:rgba(0,0,0,.3);
height:50vh;
width:100%;
position: relative;
&::after {
  content:'';
  background: url(${heroImage}) no-repeat center/cover;
  height:100%;
  width:100%;
  position: absolute;
  top:0;
  left:0;
  z-index:-1;
}

.heading {
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  h1 {
    font-size:2.4rem;
  }
  p {
    font-size:1.4rem;
  }
}
@media screen and (max-width:640px) {
  .heading {
    h1 {
      font-size:2rem;
    }
  }
}

`

export default HeroImage;

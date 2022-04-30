




import {Link} from 'react-router-dom'
import spaceVideo from '../assets/space.mp4'
import styled from 'styled-components'

function Video () {
  return (
    <Div className='hero'>
      <video autoPlay  loop muted id='video'>
        <source src={spaceVideo} type='video/mp4'/>
      </video>
      <div className='content'>
        <h1> Galaxy Travel. </h1>
        <p> World First Civilian Travel.</p>
        <div className=''>
          <Link to='/training' className='btn'>Training</Link>
          <Link to='/launch' className='btn btn-light'>Launch</Link>
        </div>
      </div>
    </Div>
  )
}
const Div = styled.div`
height:100vh;
width:100%;
object-fit:contain;
.content {
  text-align:center;
  position: absolute;
  margin:auto;
  width:100%;
  top:40vh;
  h1 {
    font-size:4rem;
  }
  p {
    font-size:1.8rem;
    font-weight:200;
    text-transform: uppercase;
    margin-bottom:1.6rem;
    
  }
}
#video {
  position: fixed;
  width:100%;
  height: 100%;
  object-fit:cover;
  z-index:-1
}
.btn {
  margin 1rem .2rem;
}
@media screen and (max-width:640px) {
  .content {
    h1 {
      font-size:3rem;
    }
    p {
      font-size:1.4rem;
      margin-bottom:1.6rem;
    }
  }
}
`

export default Video
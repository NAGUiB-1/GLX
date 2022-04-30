



import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'
import styled from 'styled-components'
function Footer () {
  return (
    <Div >
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation size={20}/>
            <div> 
              <p>123 Acme St.</p> 
              <h4>Houston, tx</h4> 
            </div>
          </div>
          <div className='phone'>
              <h4>
                <FaPhone size={20}/>
                1-100-123-789
              </h4> 
          </div>
          <div className='emial'>
              <h4>
                <FaMailBulk size={20}/>
                trips@galaxy.com
              </h4> 
          </div>
        </div>
        
        <div className='right'>
          <h1> About The Company </h1>
          <p> lorem FaPhone to the input on this weekend and this morning and max width and max idth and max idth the same as last</p>
          <div className='social'>
            <FaFacebook size={30}/>
            <FaTwitter size={30} />
            <FaLinkedin size={30}/>
          </div>
        </div>
        
      </div>
    </Div>
    )
}

const Div = styled.div`
width:100%;
padding:6rem 0;
background:rgba(0,0,0,.7);
.footer-container {
  max-width:1140px;
  margin:auto;
  display: grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
  .left {
    height:100%;
    max-width:100%;
    display:flex;
    flex-direction: column;
    padding:1rem;
    .location {
      display:flex;
      align-items: center;
      p {
        padding-bottom:.5rem
      }
      h4 {
        padding-top:0;
      }
    }
  }
  .right {
    height:100%;
    max-width:100%;
    display:flex;
    flex-direction: column;
    padding:1rem;
    margin:auto;
  }
  h4 {
    font-size:1.4rem;
    padding: 1rem 0;
  }
  p {
    font-size:1.2rem;
    padding:1rem 0;
    
  }
  
}


svg {
  color:#fff;
  margin-right:2rem;
}
.social svg{
margin-right:1rem;
cursor:pointer;
  
}

@media screen and (max-width:640px) {
  .footer-container {
    grid-template-columns:1fr;
    .right {
      .social {
        margin:auto;
      }
    }
    
  }
}



`



export default Footer
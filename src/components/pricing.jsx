









import {Link} from 'react-router-dom'
import styled from 'styled-components'
function PricingC() {
  return (
    <Div>
      <div className='card-container'>
        <div className='card'>
          <h3>- Basic -</h3>
          <span className='bar'></span>
          <p className='btc'>1 BTC</p>
          <p> - 3 Days -</p>
          <p> - Views -</p>
          <p> - Featured -</p>
          <p> - Private -</p>
          <Link to='/contact' className='btn'>Book</Link>
        </div>
        <div className='card'>
          <h3>- Basic -</h3>
          <span className='bar'></span>
          <p className='btc'>1 BTC</p>
          <p> - 3 Days -</p>
          <p> - Views -</p>
          <p> - Featured -</p>
          <p> - Private -</p>
          <Link to='/contact' className='btn'>Book</Link>
        </div>
        <div className='card'>
          <h3>- Basic -</h3>
          <span className='bar'></span>
          <p className='btc'>1 BTC</p>
          <p>- 3 Days -</p>
          <p> - Views -</p>
          <p>- Featured -</p>
          <p> - Private -</p>
          <Link to='/contact' className='btn'>Book</Link>
        </div>
      </div>
      
    </Div>
  );
}
const Div = styled.div`
width:100%;
padding:6rem 1rem;
background-color:#000;
.card-container {
  max-width:1140;
  margin:auto;
  display:grid;
  gap:40px;
  grid-template-columns: repeat(3, 1fr);
  .card {
    border:1px solid #eee;
    color:#eee;
    text-align: center;
    padding:1rem;
    &:hover {
      background-color:#141414;
    }
    h3 {
      font-size:1.4rem;
      padding: 1rem;
    }
    .bar {
      border-bottom:1px solid #eee;
      width:10%;
      margin:1.5rem auto;
      display:block;
    }
    .btc {
      font-size:4rem;
      font-weight:600;
      padding:1rem;
    }
    p {
      color:#eee;
      padding:1rem;
      font-size: 1.2rem;
    }
    .btn {
      display: block;
      width:80%;
      margin: 2rem auto;
    }
  }
}

@media screen and (max-width:980px) {
  .card-container {
    grid-template-columns: 1fr;
    max-width:90%;
    margin: auto;
  }
}
`

export default PricingC;
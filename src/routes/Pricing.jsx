








import PricingC from '../components/pricing'
import HeroImage from '../components/heroImage'
import styled from 'styled-components'
function Pricing() {
  return (
    <Div>
      <HeroImage text='Choose Your Trip.' heading='PRICING.'/>
      <PricingC />
      
    
    </Div>
  );
}
const Div = styled.div`

`

export default Pricing;

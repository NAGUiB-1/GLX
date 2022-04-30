











import styled from 'styled-components'
function Form() {
  return (
    <Div>
      <form>
        <label>Your Name </label>
        <input type='text' />
        <label>Email </label>
        <input type='text' />
        <label>Subject</label>
        <input type='text' />
        <label>Details</label>
        <textarea rows='6' placeholder='Type a short message' />
        <button className='btn' type='submit' >Submit</button>
      </form>
    </Div>
  );
}
const Div = styled.div`
form {
  display:flex;
  flex-direction: column;
  padding:1rem;
  margin:auto;
  color:#eee;
  max-width:600px;
  gap:.5rem;
  input, textarea {
    margin-bottom:1rem;
    padding:10px 18px;
    font-size:1.2rem;
    font-family:'Outfit', sans-serif;
    background:rgba(255,255,255,.1);
    border-color:rgba(255,255,255,.2);
    color:#f4f4f4;
  }
}
`

export default Form;

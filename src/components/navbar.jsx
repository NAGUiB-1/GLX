



import {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import styled from "styled-components";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleMenu =() => setMenu(!menu);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    }else {
      setColor(false)
    }
  }
  window.addEventListener('scroll',changeColor);
  let links = document.querySelectorAll('.nav-menu li');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      setMenu(false)
    })
  })
  console.log(links)
  return (
    <Nav className={color ? 'header header-bg': 'header'}>
      <NavLink to='/' > <h1>GLX TRVL </h1> </NavLink>
      <ul className={menu ? 'nav-menu activeMenu': 'nav-menu'}>
        <li>
          <NavLink to='/' >Home</NavLink>
        </li>
        <li>
          <NavLink to='/pricing' >Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/training' >Training</NavLink>
        </li>
        <li>
          <NavLink to='/contact' >Contact</NavLink>
        </li>
      </ul>
      <div className='hamburger' onClick={handleMenu}>
        {
          menu?
          (<FaTimes size={20} />)
          :(<FaBars size={20}/>)
        }
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
position:fixed;
width:100%;
display:flex;
justify-content: space-between;
align-items:center;
padding:1rem;
z-index:10;
transition:.3s;
.active {
  padding-bottom: .5rem;
  background-image: linear-gradient(90deg, dodgerblue, red);
  color: transparent;
  -webkit-background-clip:text;
}
.nav-menu {
  display:flex;
  li {
    padding:0 1rem;
  }
  a {
    font-size:1.2rem;
    font-weight:400;
  }
}
.hamburger {
  svg {
    color:#fff;
  }
  display:none;
}
@media screen and (max-width:1240px) {
  .hamburger {
    display:block;
  }
  .nav-menu {
    position: absolute;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    top:0;
    left:-100%;
    width:100%;
    height:100vh;
    text-align:center;
    transition:.3s;
    z-index:-1;
    background:rgba(0,0,0,.9);
    li {
      padding:1rem 0;
    }
    a {
      font-size:2rem;
    }
  }
  .activeMenu {
    left:0
  }
}
`
export default Navbar;





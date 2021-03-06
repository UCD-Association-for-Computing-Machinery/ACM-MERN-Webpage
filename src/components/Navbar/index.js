import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll} from 'react-scroll/modules' 
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false) 

  const changeNav = () => {
      if(window.scrollY >= 80) {
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  
  const toggleHome = () => {
    scroll.scrollToTop();
  }


  return (
    <>
      <IconContext.Provider value={{ color: 'var(--clr-light)'}}> {/* Change this color value to alter all icons (Sidebar) */}
        <Nav scrollNav={scrollNav}>
            <NavBarContainer>
                <NavLogo to='/' onClick={toggleHome}>ACM</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon> 
                <NavMenu>
                  <NavItem>
                    <NavLinks
                      to='page1'
                      classname='active' 
                      smooth={true} 
                      duration={500} 
                      spy={true} 
                      exact='true'
                      offset={-80}
                    >Page1</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                    to='page2'
                    classname='active'
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >Page2</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                    to='page3'
                    classname='active'
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >Page3</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='/signup'>Sign Up</NavBtnLink>  
                </NavBtn>
            </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
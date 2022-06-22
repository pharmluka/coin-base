
import React from 'react';
import styled from 'styled-components';
import Button from './Button';
const Header = () => {
    const links = ["Home", "Dashboard", "Learn", "FAQ", "Contact", "About"];

  return (
    <Head className='flex j-between a-center'>
<div className="brand">
    <h2 className="app">Coinbase</h2>
</div>
<div className="toggle">
</div>
<div className="links">
    <ul className='flex gap-2'>
        {links.map((link) => {
            return (
                <li key={link}>
                    <a href='#'>{link}</a>
                </li>
            )
        })}
    </ul>
</div>
<div className="auth flex gap-2">
   <Button text='Sign In' subduedButton/>
   <Button text='Sign Up'/>
</div>

    </Head>
  )
}
const Head = styled.nav`
margin: 3rem 5rem;
.brand{
     h2{
        font-size: 2.5rem;
     }
}
.toggle{
    display: none;
}
.links{
    ul{
        font-weight: bolder;
        li{
            cursor: pointer;
            &:first-of-type{
                opacity: 1;
            }
            a{
                opacity:0.7;
                transition: 0.5s ease-in-out;
               
            }
            a:hover{
                opacity: initial;
            }
        }
    }
}

@media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 3rem 1rem;
    margin: 0;
    position: relative;
    z-index: 5;
    flex-direction: row;
    .brand {
      h2 {
        font-size: 2rem;
      }
    }
    .toggle {
      padding-right: 1rem;
      display: block;
      z-index: 51;
      svg {
        color: #2d69fd;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      z-index: 10;
      position: fixed;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: white;
      opacity: 0;
      visibility: hidden;
      transition: 0.7s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: #2d69fd;
          }
        }
      }
    }
    .auth {
      display: none;
    }
  }
`
export default Header
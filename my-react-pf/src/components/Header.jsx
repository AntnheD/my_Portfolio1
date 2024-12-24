import styled from "styled-components";

const Header = (props) => {
    return <Nav>
              <Logo>
                <img src="/images/logo.svg" alt="" />
              </Logo>
                      <NavMenu>
                              <a href="/home">
                                  <img src="/images/home-icon.svg" alt="HOME" />
                                  <span>HOME</span>
                              </a>     

                      </NavMenu>
            </Nav>;
};


const Nav = styled.nav`
position:fixed;
top:0;
left:0;
right:70px;
height:70px;
background-color: #020227;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 3opx;
width:100%;
letter-spacing: 16px;
z-inex:3;
`;

const Logo = styled.a`
pading: 0;
width: 80px;
margin-top: 4px;
max-height: 70px;
font-size:0;
display:inline-block;
img {
display:block;
width: 100%;
}
`;

const NavMenu = styled.div`
align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

a {
display:flex:
align-items:center;
padding:0 12px;
 position: relative; /* Important: Needed for absolute positioning of :before */
  overflow: hidden; /* Prevents potential overflow issues */

img {
height:20px;
min-width:20px;
width:20px;
z-index: auto;
}
span {
                content: "";
                position: absolute;
                left: 0;
                bottom: -2px; /* Adjust as needed for positioning */
                width: 100%;
                height: 2px;
                background-color: rgb(249, 249, 249);
                transform: scaleX(0);
                transition: transform 0.2s ease-in-out; /* Smoother transition */
            

&:before{
background-color:rgb(249, 249, 249);
borer-radius: 0px 0px 4px 4px;
bottom: -6px;
content: "";
height: 2px;
opacity:0;
left:0px;
position: absolute;
right:0px;
transform-origin: left center;
transform: scaleX(0);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
visibility: hidden;
width: auto;
}}
&:hover {
span:before{
transform: scaleX(1);
visibility:visible;
opacity:1 !important;
}
}
}

 /* @media (max-width: 768px) {
      display: none;
    }
  */
`;

export default Header;
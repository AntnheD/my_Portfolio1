import styled from 'styled-components';
import PortfolioTerminal from './PortfolioTerminal';
const Home = (props) => {
  return ( 
    <NavH> 
     
      <Homediv>
        <Terminal>
          
          <Thead><h4>helow</h4></Thead>
          <Tbody><PortfolioTerminal/>
            </Tbody>
           </Terminal>
        <PopPhoto>
          <Inerframe/>
          <Outerframe/>
        </PopPhoto>
      </Homediv>
    
    </NavH>
  );
};

const NavH = styled.nav`
  background-image: url("./public/images/home-Background.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1; 
`;

const Homediv = styled.div`
margin-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  
  border: 2px solid rgba(235, 40, 40, 0.5); 
 justify-content: space-around;
  
`;

const Terminal = styled.div`
margin-top: 10rem;
 opacity: 0.9;
font-family: "Courier New", Courier, monospace;
font-size: 1.5rem;
font-weight: 600;
background-color: rgba(5, 5, 5, 0.98);
border: 1px solid rgba(12, 238, 12, 0.5);
padding: 2px;
margin-bottom: 5rem; 
margin-left: 10px;
height: 80%;
width: 400px;
box-shadow:#d0f723;
overflow: auto; 
clip-path: polygon(0 0, 100% 0, 100% 99%, 50% 50%, 0 100%);
`;


const Thead = styled.div`
position:auto;
top:0;
left:0;
right:70px;
height:70px;
background-color:#090b13;
opacity: 1;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px;
width:100%;
letter-spacing: 16px;
z-inex:3;
`;
const Tbody = styled.div`

 border: 1px solid rgb(22, 6, 240);
  overflow: auto; 
  text-align: left;
   opacity: 0.7;
  
`;
const PopPhoto = styled.div`
  transform: scale(1.1);
  background-image: url("./public/images/popPhoto.jpg");
  background-size: cover; 
  border-radius: 10%;
  border: 1px solid rgba(238, 12, 12, 0.5);
  width: 200px; 
  height: 200px; 
`;
const Inerframe = styled.div`
  background-color: rgba(238, 12, 12, 0.5);
  border: 1px solid rgba(5, 5, 5, 0.98);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  botum-left-radius: 11%;
`;
const Outerframe = styled.div`
  background-color: rgba(5, 5, 5, 0.98);
  border: 1px solid rgba(238, 12, 12, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  bootum-left-radius: 10%;
`;
export default Home;







import styled from 'styled-components';

const Home = (props) => {
  return ( 
    <Container> 
     
      <Homediv>
        <Terminal>
          <Thead/>
          <Tbody/>
           </Terminal>
        <PopPhoto>
          <Inerframe/>
          <Outerframe/>
        </PopPhoto>
      </Homediv>
    
    </Container>
  );
};

const Container = styled.section`
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
  opacity: 0.5;
  border: 2px solid rgba(235, 40, 40, 0.5); 
 justify-content: space-around;
  
`;

const Terminal = styled.div`
margin-top: 10rem;
font-family: "Courier New", Courier, monospace;
font-size: 1.5rem;
font-weight: 600;
font-color:  rgba(54, 245, 37, 0.98);
  background-color: rgba(5, 5, 5, 0.98);
  border: 1px solid rgba(238, 12, 12, 0.5);
  padding: 1rem; 
  margin-bottom: 20px; 
  margin-left: 10px;
  height: 80%;
  width: 400px;
`;


const Thead = styled.div`
  background-color: rgba(58, 56, 56, 0.5);
  color: rgba(76, 52, 184, 0.98);
  bottom-border: 1px solid rgba(102, 238, 12, 0.5);
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  height: 10%;
  left: 0;
  right: 0
  top: 0;
  display: flex;
  justify-content: space-between;
`;
const Tbody = styled.div`
  background-color: rgba(5, 5, 5, 0.98);
  color: rgba(238, 12, 12, 0.5);
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
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







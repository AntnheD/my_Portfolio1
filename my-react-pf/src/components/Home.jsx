import styled from 'styled-components';

const Home = (props) => {
  return ( 
    <Container> 
     
      <div>
        <div className="Terminal"></div>
        <div className="popPhoto"></div>
        </div>
    
    </Container>
  );
};

const Container = styled.section`
  background-image: url("./public/images/home-Background.jpg"); 
  background-size: cover;
  background-position: center;
  height: 100vh;
  width : 100%
  
`;

export default Home;
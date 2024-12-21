import styled from 'styled-components';

const Home = (props) => {
  return ( 
    <Container> 
      <div>hi portfoio</div> 
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
import React from 'react';
import Header from 'components/header/';
import Services from 'components/services/';
import About from 'components/about/';
import Footer from 'components/footer/';
import Portfolio from 'components/portfolio/';
import Contact from 'components/contact/';
import {
  AppWrapper,
  MainWrapper,
} from 'AppStyled'
// import styled from 'styled-components';
// import Container from 'react-bootstrap/Container';
// import TestComponent from 'components/testComponent/TestComponent';



/* 
TODO
  Make a glowing button
  
*/

function App() {
  return (
    <AppWrapper>
        <header id="header">
          <Header/>
        </header>
        <MainWrapper>
          <section id="about">
            <About />
          </section>

          <section id="services">
            <Services />
          </section>

          <section id="portfolio">
            <Portfolio />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </MainWrapper>
        
        <footer>
          <Footer />
        </footer>
      {/* <Container>
        <TestComponent />
      </Container> */}
    </AppWrapper>
  );
}

export default App;
  
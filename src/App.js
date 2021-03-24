import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/';
import Container from 'react-bootstrap/Container';
import Services from 'components/services/';
import About from 'components/about/';
import TestComponent from 'components/testComponent/TestComponent';
import Footer from 'components/footer/';
import Portfolio from 'components/portfolio/';
import Contact from 'components/contact/';
import {
  AppWrapper,
  MainWrapper,
} from 'AppStyled'



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

          <section>
            <Contact />
          </section>
        </MainWrapper>
        
        <footer>
          <Footer />
        </footer>
      <Container>
        <TestComponent />
      </Container>
    </AppWrapper>
  );
}

export default App;

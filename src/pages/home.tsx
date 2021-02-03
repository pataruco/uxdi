import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import styled from 'styled-components';
import Title from '../components/title';
import Page from '../components/page';

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

const Home: React.FC = () => (
  <Page>
    <Title title="Home" />
    <Header />
    <StyledMain>
      <h1>Welcome to UXDI London 🇬🇧 </h1>
      <h2>Intro to code day 💻 </h2>
      <nav>
        <ul>
          <li>
            Morning: <Link to="/morning">Intro to Code</Link>
          </li>
          <li>
            Afternoon: <Link to="/afternoon">Software delivery</Link>
          </li>
        </ul>
      </nav>
    </StyledMain>
    <Footer />
  </Page>
);

export default Home;

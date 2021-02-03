import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import GALogoTextWhite from './icons/ga-text-white';

const StyledHeader = styled.header`
  padding: 1.25rem;
  background-color: black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  picture {
    max-width: 12.5%;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <picture>
        <Link to="/">
          <GALogoTextWhite />
        </Link>
      </picture>
    </StyledHeader>
  );
};

export default withRouter(Header);

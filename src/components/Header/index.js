import React from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar";

const Header = () => {
   return (
      <HeaderContainer>
         <LogoContainer>
            <Logo src="/logo.png" alt="Remotica Logo" />
            <Title>Remotica</Title>
         </LogoContainer>
         <NavBar />
      </HeaderContainer>
   );
};

const HeaderContainer = styled.div`
  height: 3rem;
  border-radius: 0.5rem;
  background: linear-gradient(
    to bottom,
    rgba(26, 28, 36, 0.75) 0%,
    rgba(26, 28, 36, 0.3) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1rem 2.5rem;
  margin: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  font-weight: 700;
`;

export default Header;

import { Flex, Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const Logo = () => {
  return (
    <Flex align="center">
      <LogoImage src="/logo.png" alt="logoImage" />
      <LogoTitle level={3}>Remotica</LogoTitle>
    </Flex>
  );
};

const LogoImage = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: contain;
`;

const LogoTitle = styled(Title)`
  margin: 0;
  color: #fff !important;
`;

export default Logo;

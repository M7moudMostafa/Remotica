import { Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const TitleComponent = ({ title }) => {
  return <CustomTitle level={5}>{ title }</CustomTitle>;
};

const CustomTitle = styled(Title)`
  margin: 0;
  padding: 0;
  font-size: 2rem !important;
  font-weight: 600 !important;
`;

export default TitleComponent;

import styled from "styled-components";
import useTitles from "../../hooks/useTitles";
import ScrollableComponent from "./components/ScrollableComponent";

const Index = () => {
  const { movies, series } = useTitles();

  return (
    <FlexContainer>
      <ScrollableComponent title="Movies" children={movies} />
      <ScrollableComponent title="Series" children={series} />
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export default Index;

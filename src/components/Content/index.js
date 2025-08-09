import styled from "styled-components";
import useTitles from "../../hooks/useTitles";
import ScrollableComponent from "./components/ScrollableComponent";

const Index = () => {
  const {
    movies,
    series,
    miniSeries,
    specials,
    tvMovies,
    shorts,
    videos,
    videoGames,
  } = useTitles();

  return (
    <FlexContainer>
      <ScrollableComponent title="Movies" children={movies} />
      <ScrollableComponent title="Series" children={series} />
      <ScrollableComponent title="Mini Series" children={miniSeries} />
      <ScrollableComponent title="Specials" children={specials} />
      <ScrollableComponent title="TV Movies" children={tvMovies} />
      <ScrollableComponent title="Shorts" children={shorts} />
      <ScrollableComponent title="Videos" children={videos} />
      <ScrollableComponent title="Video Games" children={videoGames} />
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

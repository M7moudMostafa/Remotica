import styled from "styled-components";
import useTitles from "../../hooks/useTitles";
import ScrollableComponent from "./components/ScrollableComponent";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useCallback } from "react";

const Index = () => {
  const movies = useTitles("MOVIE");
  const series = useTitles("TV_SERIES");
  const miniSeries = useTitles("TV_MINI_SERIES");
  const specials = useTitles("TV_SPECIAL");
  const tvMovies = useTitles("TV_MOVIE");
  const shorts = useTitles("SHORT");
  const videos = useTitles("VIDEO");
  const videoGames = useTitles("VIDEO_GAME");

  const { ref, focusKey } = useFocusable({});

  const onRowFocus = useCallback(
    ({ top }) => {
      ref.current.scrollTo({
        top: top - 700,
        behavior: "smooth",
      });
    },
    [ref]
  );

  const categories = [
    { title: "Movies", data: movies },
    { title: "Series", data: series },
    { title: "Mini Series", data: miniSeries },
    { title: "Specials", data: specials },
    { title: "TV Movies", data: tvMovies },
    { title: "Shorts", data: shorts },
    { title: "Videos", data: videos },
    { title: "Video Games", data: videoGames },
  ];

  return (
    <FocusContext.Provider value={focusKey}>
      <ScrollingRows ref={ref}>
        <FlexContainer direction="column">
          {categories.map(({ title, data }) => (
            <ScrollableComponent
              key={title}
              title={title}
              children={data}
              onFocus={onRowFocus}
            />
          ))}
        </FlexContainer>
      </ScrollingRows>
    </FocusContext.Provider>
  );
};

const ScrollingRows = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  flex-shrink: 1;
  flex-grow: 1;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction && direction};
  gap: 1rem;
`;

export default Index;

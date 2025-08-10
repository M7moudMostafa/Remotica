import styled from "styled-components";
import useTitles from "../../hooks/useTitles";
import ScrollableComponent from "./components/ScrollableComponent";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useCallback } from "react";

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

  const { ref, focusKey } = useFocusable({});

  const onRowFocus = useCallback(
    ({ top }) => {
      ref.current.scrollTo({
        top: top - 50,
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
        <FlexContainer>
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
  flex-direction: column;
  gap: 1rem;
`;

export default Index;

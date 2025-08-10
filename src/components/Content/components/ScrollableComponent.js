import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useCallback } from "react";
import styled from "styled-components";
import TitleComponent from "./Title";
import Card from "./Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { JotaiStore } from "../../../stores/JotaiStore";
import { useAtom } from "jotai";

const ScrollableComponent = ({ title, children, onFocus }) => {
  const [mediaInfo, setMediaInfo] = useAtom(JotaiStore);

  const { ref, focusKey } = useFocusable({
    onFocus,
  });

  const onAssetsFocus = useCallback(
    ({ x }) => {
      ref.current &&
        ref.current.scrollTo({
          left: x - 400,
          behavior: "smooth",
        });
    },
    [ref]
  );

  const onArrowRelease = (card) => setMediaInfo(card);

  return (
    <Container>
      <TitleComponent title={title} />
      <FocusContext.Provider value={focusKey}>
        <ContentRowScrollingWrapper ref={ref}>
          <ContentRowScrollingContent>
            {children && children?.data?.data?.titles
              ? children.data.data.titles
                  .slice(0, 10)
                  .map((info, i) => (
                    <Card
                      info={info}
                      onFocus={onAssetsFocus}
                      key={i}
                      onArrowRelease={() => onArrowRelease(info)}
                    />
                  ))
              : Array.from({ length: 7 }).map((_, i) => (
                  <SkeletonContainer key={i}>
                    <Skeleton
                      style={{
                        width: "11rem",
                        height: "16rem",
                        margin: "0 1rem",
                      }}
                      baseColor="#ebebeb61"
                    />
                  </SkeletonContainer>
                ))}
          </ContentRowScrollingContent>
        </ContentRowScrollingWrapper>
      </FocusContext.Provider>
    </Container>
  );
};

const Container = styled.div`
  max-width: calc(100vw - 400px);
`;

const ContentRowScrollingContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem 0 0;
`;

const ContentRowScrollingWrapper = styled.div`
  overflow: hidden;
  flex-shrink: 1;
  flex-grow: 1;
`;

const SkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ScrollableComponent;

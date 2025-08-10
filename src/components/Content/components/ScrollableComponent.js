import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useCallback } from "react";
import styled from "styled-components";
import TitleComponent from "./Title";
import Card from "./Card";

const ScrollableComponent = ({ title, children, onFocus }) => {
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

  return (
    <Container>
      <TitleComponent title={title} />
      <FocusContext.Provider value={focusKey}>
        <ContentRowScrollingWrapper ref={ref}>
          <ContentRowScrollingContent>
            {children?.data?.data?.titles?.slice(0, 10)?.map((info, i) => (
              <Card info={info} onFocus={onAssetsFocus} key={i} />
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

export default ScrollableComponent;

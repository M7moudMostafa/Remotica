import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { useCallback, useRef } from 'react'
import styled from 'styled-components';
import TitleComponent from './Title';
import Card from "./Card";

const ScrollableComponent = ({ title, children }) => {
    const scrollingRef = useRef();
    const { ref, focusKey } = useFocusable();

    const onFocus = useCallback(
        ({ x, y }) => {
            scrollingRef.current &&
                scrollingRef.current.scrollTo({
                    left: x -350,
                    behavior: "smooth",
                });
        },
        [scrollingRef]
    );

    return (
        <Container>
            <TitleComponent title={title} />
            <FocusContext.Provider value={focusKey}>
                <CardContainer ref={ref}>
                    <ContentRowScrollingWrapper ref={scrollingRef}>
                        <ContentRowScrollingContent>
                            {children?.data?.data?.titles?.slice(0, 10)?.map((info, i) => (
                                <Card info={info} onFocus={onFocus} key={i} />
                            ))}
                        </ContentRowScrollingContent>
                    </ContentRowScrollingWrapper>
                </CardContainer>
            </FocusContext.Provider>
        </Container>
    )
}

const Container = styled.div`
  max-width: calc(100vw - 350px);
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem 0 0;
`;

const ContentRowScrollingContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentRowScrollingWrapper = styled.div`
  overflow: hidden;
  flex-shrink: 1;
  flex-grow: 1;
`;

export default ScrollableComponent

import React from 'react'
import styled from 'styled-components';
import Card from './components/Card';
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';

const Content = ({ title, items }) => {
  const isArray = Array.isArray(items);
  
  const { ref, focusKey } = useFocusable({
    focusKey: title,
    isFocusBoundary: true,
    focusBoundaryDirections: ["left", "right"],
  });

  return (
    <FocusContext.Provider value={focusKey}>
        <Container ref={ref}>
            <Title>{title}</Title>
            <ItemsContainer>
                {isArray ? items.map((item) => (
                    <Card key={item?.id} item={item} />
                )) : (
                <p style={{ color: 'white' }}>No items available</p>
                )}
            </ItemsContainer>
        </Container>
    </FocusContext.Provider>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin: 1.25rem 5rem;
`;

const ItemsContainer = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 1.25rem;
    padding: 1.5rem 0; /* Added vertical padding for focus shadow/scale */
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
`;

export default Content
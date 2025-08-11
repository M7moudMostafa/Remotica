import React from 'react'
import styled from 'styled-components'
import TitleComponent from './Title';

const TabsContent = ({ title }) => {
  return (
    <Container>
        <TitleComponent title={title} />
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export default TabsContent

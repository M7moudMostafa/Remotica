import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import React from 'react'
import styled from 'styled-components';

const LinkItem = ({ label, focusKey }) => {
    const { ref } = useFocusable({
        focusKey: focusKey,
        onEnterPress: () => {            
            console.log(`${label} Pressed`);
        }
    });
  return (
    <Item ref={ref}>{label}</Item>
  )
}

const Item = styled.h1`
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.75);
    font-weight: 500;
    transition: all 0.3s ease-in-out;

    &[data-focused = true] {
        color: rgba(255, 255, 255, 1);
        font-size: 1.25rem;
        font-weight: 700;
    }
`;

export default LinkItem
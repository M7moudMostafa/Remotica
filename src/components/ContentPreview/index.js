import React from 'react'
import styled from 'styled-components'

const ContentPreview = () => {
  return (
    <Container>
        <Image src="https://m.media-amazon.com/images/M/MV5BNjU1YzVmZmUtMzQ3Yy00M2RjLWFhYTQtNTE5MmE1NjJmZmVmXkEyXkFqcGc@._V1_.jpg" alt="Content Preview" />
        <Overlay />
    </Container>
  )
}
  
const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    overflow: hidden;
    /* Gradient from vibrant Purple to Deep Blue */
    background: linear-gradient(
        180deg, 
        rgba(147, 51, 234, 1) 0%, 
        rgba(30, 58, 138, 1) 100%
    );
`;

const Image = styled.img`
    width: 100%;
    height: 100%; /* Changed to 100% as requested */
    object-fit: cover;
    opacity: 0.9;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        rgba(147, 51, 234, 0.45) 0%,      /* Top Glow */
        transparent 20%,
        transparent 60%,
        rgba(30, 58, 138, 0.3) 75%,      /* Soft blue transition */
        rgba(30, 58, 138, 0.9) 100%      /* Deep blue footer anchor */
    );
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40%; /* More creative footer area */
        background: linear-gradient(
            to top,
            rgba(30, 58, 138, 1) 0%,
            rgba(30, 58, 138, 0.8) 30%,
            rgba(147, 51, 234, 0.2) 70%,
            transparent 100%
        );
        backdrop-filter: blur(4px); /* Modern frosted effect */
        mask-image: linear-gradient(to bottom, transparent, black); /* Smooth fade-in */
    }
`;

export default ContentPreview
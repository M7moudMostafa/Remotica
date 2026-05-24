import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import React from "react";
import styled from "styled-components";

const Card = ({ item }) => {
    const { ref, focused } = useFocusable({
        focusKey: item?.id || item?.primaryTitle,
        autoRestoreFocus: true,
        saveLastFocusedChild: true,
    });

    const imageUrl = item?.primaryImage?.url || item?.image || item?.poster_path;
    const title = item?.primaryTitle || item?.title || item?.name;

    return (
        <Container ref={ref} $focused={focused}>
            {imageUrl ? (
                <Image src={imageUrl} alt={title} />
            ) : (
                <Placeholder>
                    <span>{title}</span>
                </Placeholder>
            )}
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 12.5rem;
  min-width: 12.5rem;
  height: 14.75rem;
  min-height: 14.75rem;
  border: 4px solid transparent;
  border-radius: 0.75rem;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.05);
  overflow: hidden;

  ${({ $focused }) => $focused && `
    border-color: #a855f7;
    box-shadow: 0 0 1.5rem rgba(168, 85, 247, 0.6);
    z-index: 10;
  `}
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: white;
  text-align: center;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Card;

import {
    FocusContext,
    useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import React from "react";
import styled from "styled-components";

const Card = ({ onEnterPress, src, alt, onFocus }) => {
    const { focusKey, ref, focused } = useFocusable({
        onEnterPress: onEnterPress && onEnterPress,
        onFocus: onFocus && onFocus,
    });

    return (
        <FocusContext.Provider value={focusKey}>
            <CustomCard ref={ref} $focused={focused} src={src} alt={alt} />
        </FocusContext.Provider>
    );
};

const CustomCard = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
    }

    ${({ $focused }) =>
        $focused &&
        `
        border: 0.25rem solid #ffd700;
        border-radius: 1rem;
    `}
`;

export default Card;

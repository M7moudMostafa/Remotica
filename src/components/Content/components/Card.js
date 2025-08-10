import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import styled from "styled-components";

const Card = ({ onFocus, info, onArrowRelease }) => {
  const { ref, focused } = useFocusable({
    onFocus: (layout) => onFocus(layout),
    onArrowRelease,
    focusKey: info?.id,
  });
  return (
    <CardContainer ref={ref} $focused={focused}>
      <CardComponent src={info?.primaryImage?.url} alt={info?.id} />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 11rem;
  height: 16rem;
  margin: 0 1rem;
  flex-shrink: 0;
  border-radius: 1rem;

  ${({ $focused }) =>
    $focused &&
    `
      border: 0.25rem solid;
      border-image: linear-gradient(to right, #0083ff, #1f005c) 1;
      border-radius: 1rem;
    `}
`;

const CardComponent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1rem;
`;

export default Card;

import { setFocus, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = ({ onFocus, info, onArrowRelease }) => {
  const navigate = useNavigate();

  const { ref, focused } = useFocusable({
    onFocus: (layout) => onFocus(layout),
    onArrowRelease: onArrowRelease && onArrowRelease,
    focusKey: info?.id,
    onEnterPress: () => {
      setFocus("Main");
      navigate(`/${info.id}`);
    }
  });
  return (
    <CardContainer ref={ref} $focused={focused}>
      <CardComponent src={info?.primaryImage?.url} alt={info?.id} />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 11rem;
  min-width: 11rem;
  max-width: 11rem;
  height: 16rem;
  min-height: 16rem;
  max-height: 16rem;
  margin: 0 1rem;
  flex-shrink: 0;
  border-radius: 1rem;
  box-sizing: border-box;

  ${({ $focused }) =>
    $focused &&
    `
      border: 0.25rem solid #ffd700;
      border-radius: 1rem;
    `}
`;

const CardComponent = styled.img`
  width: 100%;
  height: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  display: block;
`;

export default Card;

import { setFocus, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mediaInfoAtom } from "../../../stores/JotaiStore";
import { useAtom } from "jotai";

const Card = ({ onFocus, info, onArrowRelease }) => {
  const navigate = useNavigate();
  const [, setMediaInfo] = useAtom(mediaInfoAtom);

  const { ref, focused } = useFocusable({
    onFocus: (layout) => onFocus(layout),
    onArrowRelease: onArrowRelease && onArrowRelease,
    focusKey: info?.id,
    onEnterPress: () => {
      setMediaInfo(null);
      setFocus("Main");
      navigate(`/mainmenu/${info.id}`);
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
  height: 16rem;
  margin: 0 1rem;
  flex-shrink: 0;
  border-radius: 1rem;

  ${({ $focused }) =>
    $focused &&
    `
      border: 0.25rem solid #ffd700;
      border-radius: 1rem;
    `}
`;

const CardComponent = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  
  &:hover {
      transform: scale(1.02);
  }
`;

export default Card;

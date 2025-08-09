import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import styled from "styled-components";

const Card = () => {
  const { ref, focused } = useFocusable({});
  return (
    <CardContainer ref={ref} $focused={focused}>
      <CardComponent src="https://m.media-amazon.com/images/M/MV5BYTQyNTRmYjItMDBjYi00YWNhLWEwMmQtNzJhODNiNjEzOWJlXkEyXkFqcGc@._V1_.jpg" />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 11rem;
  height: 16rem;
  margin: 0 1rem;

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
`;

export default Card;

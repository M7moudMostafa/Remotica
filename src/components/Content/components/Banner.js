import { ClockCircleOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { JotaiStore } from "../../../stores/JotaiStore";
import { useAtomValue } from "jotai";

const Banner = () => {
  const mediaInfo = useAtomValue(JotaiStore);

  return (
    <Container>
      <LeftWrapper>
        <Title>{mediaInfo.primaryTitle || "Untitled"}</Title>
        {mediaInfo.originalTitle && mediaInfo.originalTitle !== mediaInfo.primaryTitle && (
          <SupTitle>Original: {mediaInfo.originalTitle}</SupTitle>
        )}
        {mediaInfo.rating?.aggregateRating && (
          <p>
            <StarOutlined /> {mediaInfo.rating.aggregateRating} (
            {mediaInfo.rating.voteCount?.toLocaleString() || 0} votes)
          </p>
        )}

        {mediaInfo.genres?.length > 0 && <p>{mediaInfo.genres.join(", ")}</p>}

        {mediaInfo.runtimeSeconds && (
          <p>
            {" "}
            <ClockCircleOutlined /> {Math.floor(mediaInfo.runtimeSeconds / 60)} min
          </p>
        )}

        {mediaInfo.plot && <p>{mediaInfo.plot}</p>}

        {mediaInfo.directors?.length > 0 && (
          <div>
            <strong>Directors:</strong>{" "}
            {mediaInfo.directors.map((d) => d.displayName).join(", ")}
          </div>
        )}

        {mediaInfo.stars?.length > 0 && (
          <div>
            <strong>Stars:</strong>{" "}
            {mediaInfo.stars.map((s) => s.displayName).join(", ")}
          </div>
        )}

        {mediaInfo.originCountries?.length > 0 && (
          <p>Country: {mediaInfo.originCountries.map((c) => c.name).join(", ")}</p>
        )}

        {mediaInfo.spokenLanguages?.length > 0 && (
          <p>Languages: {mediaInfo.spokenLanguages.map((l) => l.name).join(", ")}</p>
        )}
      </LeftWrapper>

      <RightWrapper>
        {mediaInfo.primaryImage?.url && (
          <Poster
            src={mediaInfo.primaryImage.url}
            alt={mediaInfo.primaryTitle || "No title"}
          />
        )}
      </RightWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 200rem;
  padding: 1rem 0;
`;

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Poster = styled.img`
  width: 22rem;
  height: 30rem;
`;

const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 0 1rem;
`;

const Title = styled.h1``;

const SupTitle = styled.h3``;

export default Banner;

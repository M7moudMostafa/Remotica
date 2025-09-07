import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useTitleById from '../../hooks/useTitleById';
import styled from 'styled-components';

const Index = () => {
    const { id } = useParams();
    const details = useTitleById(id);
    const { data } = details;
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyPress = (event) => {
            if(event.key === "Backspace") {
                navigate("/mainmenu")
            }
        }

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress)
        }
    }, [navigate])

    const formatRuntime = (seconds) => {
        if (!seconds) return 'N/A';
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours}h ${minutes}m`;
    };

    const formatDate = (dateObj) => {
        if (!dateObj) return 'N/A';
        const { year, month, day } = dateObj;
        if (year && month && day) {
            return `${month}/${day}/${year}`;
        } else if (year) {
            return year.toString();
        }
        return 'N/A';
    };

    const formatRating = (rating) => {
        if (!rating) return 'N/A';
        return `${rating.toFixed(1)}/10`;
    };

    if (!data?.data) {
        return (
            <Container>
                <LoadingText>Loading...</LoadingText>
            </Container>
        );
    }

    const movieData = data.data;

    return (
        <Container>
            <LeftSection>
                <PosterWrapper>
                    <Image
                        src={movieData?.primaryImage?.url}
                        alt={movieData?.primaryTitle || "Movie Poster"}
                        onError={(e) => {
                            e.target.src = 'https://placehold.co/600x400';
                        }}
                    />
                </PosterWrapper>
            </LeftSection>

            <RightSection>
                <MovieHeader>
                    <Title>{movieData?.primaryTitle || 'Unknown Title'}</Title>
                    {movieData?.originalTitle && movieData.originalTitle !== movieData.primaryTitle && (
                        <OriginalTitle>Original: {movieData.originalTitle}</OriginalTitle>
                    )}
                    <MovieMeta>
                        <MetaItem>{movieData?.startYear || 'N/A'}</MetaItem>
                        {movieData?.endYear && movieData.endYear !== movieData.startYear && (
                            <MetaItem>- {movieData.endYear}</MetaItem>
                        )}
                        <MetaItem>• {formatRuntime(movieData?.runtimeSeconds)}</MetaItem>
                        <MetaItem>• {movieData?.type || 'N/A'}</MetaItem>
                        {movieData?.isAdult && <AdultTag>18+</AdultTag>}
                    </MovieMeta>
                </MovieHeader>

                <RatingSection>
                    {movieData?.rating && (
                        <RatingCard>
                            <RatingLabel>IMDb Rating</RatingLabel>
                            <RatingValue>{formatRating(movieData.rating.aggregateRating)}</RatingValue>
                            <VoteCount>{movieData.rating.voteCount?.toLocaleString()} votes</VoteCount>
                        </RatingCard>
                    )}
                    {movieData?.metacritic?.score && (
                        <RatingCard>
                            <RatingLabel>Metacritic</RatingLabel>
                            <MetacriticScore score={movieData.metacritic.score}>
                                {movieData.metacritic.score}
                            </MetacriticScore>
                            <VoteCount>{movieData.metacritic.reviewCount} reviews</VoteCount>
                        </RatingCard>
                    )}
                </RatingSection>

                {movieData?.genres && movieData.genres.length > 0 && (
                    <GenreSection>
                        <SectionTitle>Genres</SectionTitle>
                        <GenreList>
                            {movieData.genres.map((genre, index) => (
                                <GenreTag key={index}>{genre}</GenreTag>
                            ))}
                        </GenreList>
                    </GenreSection>
                )}

                {movieData?.plot && (
                    <PlotSection>
                        <SectionTitle>Plot</SectionTitle>
                        <PlotText>{movieData.plot}</PlotText>
                    </PlotSection>
                )}

                {movieData?.directors && movieData.directors.length > 0 && (
                    <CrewSection>
                        <SectionTitle>Directors</SectionTitle>
                        <CrewList>
                            {movieData.directors.map((director, index) => (
                                <CrewMember key={director.id || index}>
                                    {director.primaryImage?.url && (
                                        <CrewImage src={director.primaryImage.url} alt={director.displayName} />
                                    )}
                                    <CrewInfo>
                                        <CrewName>{director.displayName}</CrewName>
                                        {director.birthDate && (
                                            <CrewDetail>Born: {formatDate(director.birthDate)}</CrewDetail>
                                        )}
                                        {director.birthLocation && (
                                            <CrewDetail>Location: {director.birthLocation}</CrewDetail>
                                        )}
                                    </CrewInfo>
                                </CrewMember>
                            ))}
                        </CrewList>
                    </CrewSection>
                )}

                {movieData?.writers && movieData.writers.length > 0 && (
                    <CrewSection>
                        <SectionTitle>Writers</SectionTitle>
                        <CrewList>
                            {movieData.writers.map((writer, index) => (
                                <CrewMember key={writer.id || index}>
                                    {writer.primaryImage?.url && (
                                        <CrewImage src={writer.primaryImage.url} alt={writer.displayName} />
                                    )}
                                    <CrewInfo>
                                        <CrewName>{writer.displayName}</CrewName>
                                        {writer.birthDate && (
                                            <CrewDetail>Born: {formatDate(writer.birthDate)}</CrewDetail>
                                        )}
                                        {writer.birthLocation && (
                                            <CrewDetail>Location: {writer.birthLocation}</CrewDetail>
                                        )}
                                    </CrewInfo>
                                </CrewMember>
                            ))}
                        </CrewList>
                    </CrewSection>
                )}

                {movieData?.stars && movieData.stars.length > 0 && (
                    <CrewSection>
                        <SectionTitle>Stars</SectionTitle>
                        <CrewList>
                            {movieData.stars.map((star, index) => (
                                <CrewMember key={star.id || index}>
                                    {star.primaryImage?.url && (
                                        <CrewImage src={star.primaryImage.url} alt={star.displayName} />
                                    )}
                                    <CrewInfo>
                                        <CrewName>{star.displayName}</CrewName>
                                        {star.birthDate && (
                                            <CrewDetail>Born: {formatDate(star.birthDate)}</CrewDetail>
                                        )}
                                        {star.birthLocation && (
                                            <CrewDetail>Location: {star.birthLocation}</CrewDetail>
                                        )}
                                        {star.heightCm && (
                                            <CrewDetail>Height: {star.heightCm} cm</CrewDetail>
                                        )}
                                    </CrewInfo>
                                </CrewMember>
                            ))}
                        </CrewList>
                    </CrewSection>
                )}

                <AdditionalInfo>
                    {movieData?.originCountries && movieData.originCountries.length > 0 && (
                        <InfoSection>
                            <InfoLabel>Countries:</InfoLabel>
                            <InfoValue>
                                {movieData.originCountries.map(country => country.name).join(', ')}
                            </InfoValue>
                        </InfoSection>
                    )}

                    {movieData?.spokenLanguages && movieData.spokenLanguages.length > 0 && (
                        <InfoSection>
                            <InfoLabel>Languages:</InfoLabel>
                            <InfoValue>
                                {movieData.spokenLanguages.map(lang => lang.name).join(', ')}
                            </InfoValue>
                        </InfoSection>
                    )}
                </AdditionalInfo>
            </RightSection>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LoadingText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    font-size: 2rem;
    color: #ffffff;
`;

const LeftSection = styled.div`
    flex: 0 0 400px;
    padding: 2rem;
    
    @media (max-width: 768px) {
        flex: none;
        padding: 1rem;
        display: flex;
        justify-content: center;
    }
`;

const PosterWrapper = styled.div`
    position: sticky;
    top: 2rem;
`;

const Image = styled.img`
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

const RightSection = styled.div`
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
    
    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const MovieHeader = styled.div`
    margin-bottom: 2rem;
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
    background: linear-gradient(45deg, #ffd700, #ffed4e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const OriginalTitle = styled.h2`
    font-size: 1.2rem;
    color: #cccccc;
    margin: 0 0 1rem 0;
    font-style: italic;
`;

const MovieMeta = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

const MetaItem = styled.span`
    color: #cccccc;
    font-size: 1.1rem;
`;

const AdultTag = styled.span`
    background: #ff4444;
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
`;

const RatingSection = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
`;

const RatingCard = styled.div`
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    backdrop-filter: blur(10px);
`;

const RatingLabel = styled.div`
    font-size: 0.9rem;
    color: #cccccc;
    margin-bottom: 0.5rem;
`;

const RatingValue = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffd700;
`;

const MetacriticScore = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => {
        const score = props.score;
        if (score >= 75) return '#66cc33';
        if (score >= 50) return '#ffcc33';
        return '#ff6666';
    }};
`;

const VoteCount = styled.div`
    font-size: 0.8rem;
    color: #999999;
    margin-top: 0.25rem;
`;

const GenreSection = styled.div`
    margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #ffd700;
`;

const GenreList = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

const GenreTag = styled.span`
    background: rgba(255, 215, 0, 0.2);
    color: #ffd700;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    border: 1px solid rgba(255, 215, 0, 0.3);
`;

const PlotSection = styled.div`
    margin-bottom: 2rem;
`;

const PlotText = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #e0e0e0;
    margin: 0;
`;

const CrewSection = styled.div`
    margin-bottom: 2rem;
`;

const CrewList = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const CrewMember = styled.div`
    display: flex;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 8px;
    align-items: center;
`;

const CrewImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
`;

const CrewInfo = styled.div`
    flex: 1;
`;

const CrewName = styled.div`
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 0.25rem;
`;

const CrewDetail = styled.div`
    font-size: 0.9rem;
    color: #cccccc;
    margin-bottom: 0.1rem;
`;

const AdditionalInfo = styled.div`
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const InfoSection = styled.div`
    display: flex;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const InfoLabel = styled.div`
    font-weight: bold;
    color: #ffd700;
    min-width: 120px;
    margin-right: 1rem;
`;

const InfoValue = styled.div`
    color: #e0e0e0;
`;

export default Index


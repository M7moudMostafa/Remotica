import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import Button from '../common/Button';
import useCreditsByTitleId from '../../hooks/useCredits';
import Card from '../common/Card';
import { FocusContext, setFocus, useFocusable } from '@noriginmedia/norigin-spatial-navigation';

const Index = () => {
    const { id } = useParams();
    const details = useCreditsByTitleId(id);
    const { data } = details;
    const navigate = useNavigate();

    const { ref, focusKey } = useFocusable({
        focusKey: "Credits-Container"
    });

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Backspace") {
                navigate(`/mainmenu/${id}`);
            }
        }

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress)
        }
    }, [navigate])

    if (!data?.data) {
        return (
            <Container>
                <LoadingText>Loading...</LoadingText>
            </Container>
        );
    }

    const CreditsData = data.data.credits;

    return (<FocusContext.Provider value={focusKey}>
        <Container ref={ref}>
                {CreditsData?.map(credit => (
                    <Card src={credit?.name?.primaryImage?.url} alt={credit?.name?.displayName}/>
                ))}
            </Container>
                </FocusContext.Provider>
    )
}

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin: 2rem 0;
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
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


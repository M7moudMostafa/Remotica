import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Header from '../Header';
import ContentPreview from '../ContentPreview';
import { getAllTitle } from '../../api/endpoints/mediaTitlesApi';
import Content from '../Content';

const Home = () => {
  const [popularTitles, setPopularTitles] = useState([]);
  const [topRatedTitles, setTopRatedTitles] = useState([]);

  const extractResults = (data) => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.results)) return data.results;
    if (Array.isArray(data.items)) return data.items;
    if (Array.isArray(data.data)) return data.data;
    // If it's an object, check if any property is an array
    const firstArray = Object.values(data).find(val => Array.isArray(val));
    return firstArray || [];
  };

  useEffect(() => {
    // Fetch Popular Titles
    getAllTitle({ sortBy: 'SORT_BY_POPULARITY' })
      .then(response => {
        console.log("Popular Titles Response:", response.data);
        setPopularTitles(extractResults(response.data));
      })
      .catch(error => console.error("Popular Titles Failed:", error));

    // Fetch Top Rated Titles
    getAllTitle({ sortBy: 'SORT_BY_USER_RATING' })
      .then(response => {
        console.log("Top Rated Titles Response:", response.data);
        setTopRatedTitles(extractResults(response.data));
      })
      .catch(error => console.error("Top Rated Titles Failed:", error));
  }, []);

  return (
    <MainContainer>
      <Header />
      <ContentPreview />
      <Content title="Most Popular" items={popularTitles} />
      <Content title="Top Rated" items={topRatedTitles} />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

export default Home
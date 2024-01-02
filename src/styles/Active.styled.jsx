import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActiveSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-top: 3rem;
  @media (max-width: 704px) {
    width: 100%;
  }
`;

const MovieContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3rem;
  @media (max-width: 704px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  line-height: 2.5rem;
  padding: 1rem;
  width: 50%;
  font-size: 1.2rem;
  font-weight: 800;

  @media (max-width: 704px) {
    width: 100%;
    line-height: 1.5rem;
    font-size: 1rem;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const RowTitle = styled.div`
  flex-basis: 30%;
  min-width: 80px;
`;

const RowText = styled.div`
  flex-basis: 70%;
  padding-left: 1rem;
`;

const Poster = styled.div`
  text-align: end;
  height: 451px;
  width: 50%;
  img {
    width: 100%;
    max-width: 300px;
    object-fit: contain;
  }

  @media (max-width: 704px) {
    text-align: center;
    width: 100%;
  }
`;
const ActorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 704px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
const ActorCard = styled.div`
  width: 200px;
  height: 200px;
  padding-top: 1rem;
  margin: 0 1rem;
  background-image: linear-gradient(#b2a4ff, #fdf7c3);
  text-align: center;
  @media (max-width: 704px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledIconFavorite = styled(FontAwesomeIcon)`
  position: absolute;
  right: 0.5rem;
  top: -2.3rem;
  color: ${(props) => (props.isfavorite === 'true' ? 'red' : 'blue')};
  font-size: 3rem;
  transition: transform 0.2s linear;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 704px) {
    position: absolute;
    font-size: 2rem;
    right: 0.5rem;
    top: -2.3rem;
  }
`;

export {
  ActiveSection,
  MovieContainer,
  InfoContainer,
  InfoRow,
  RowTitle,
  RowText,
  Poster,
  ActorContainer,
  ActorCard,
  StyledIconFavorite,
};

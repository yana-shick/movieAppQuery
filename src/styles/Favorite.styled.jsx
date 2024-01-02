import styled from 'styled-components';

const FavoriteSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 704px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const FavoriteCard = styled.div`
  width: 200px;
  height: 200px;
  padding-top: 1rem;
  margin: 1rem;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-image: url(${(props) => props.poster});
    opacity: 0.5;
    z-index: -1;
  }
  color: #b2a4ff;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 800;
  @media (max-width: 704px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem 0;
  }
`;

export { FavoriteSection, FavoriteCard };

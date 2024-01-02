import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const SearchContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 40%;
  height: 3rem;
  padding: 0.8rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  transition: box-shadow 0.2s;
  &:focus-within {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 704px) {
    width: 100%;
  }
`;

const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  background: transparent;
  outline: none;
  border: none;
  font-size: 1rem;
  &::placeholder {
    color: #ffb4b4;
  }
`;

const StyledIconSearch = styled(FontAwesomeIcon)`
  color: #ffb4b4;
  font-size: 1.2rem;
`;
const SearchButton = styled.button`
  border: none;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  margin: 5px;
  background-color: #ffb4b4;
  color: #b2a4ff;
  @media (max-width: 704px) {
    height: 2.5rem;
    width: 3rem;
  }
`;
export {
  SearchSection,
  SearchContainer,
  StyledSearchInput,
  StyledIconSearch,
  SearchButton,
};

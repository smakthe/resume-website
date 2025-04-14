import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQueries.medium}) {
    flex-direction: column;
    padding: 10px;
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.large}) {
    max-width: 1400px;
    gap: 40px;
  }
`;

export const LeftColumn = styled.aside`
  flex: 1 1 30%;
  padding: 20px;
  background-color: ${({ theme }) => theme.columnBackground};
  text-align: left;
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.medium}) {
    flex: 1 1 100%;
    width: 100%;
    padding: 10px;
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.large}) {
    padding: 30px;
  }
`;

export const RightColumn = styled.main`
  flex: 1 1 70%;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.medium}) {
    flex: 1 1 100%;
    width: 100%;
    padding: 10px;
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.large}) {
    padding: 30px;
  }
`;

export const ThemeToggleButton = styled.button`
  padding: 10px;
  margin: 10px;
  background-color: ${({ theme, $isLight }) => 
    $isLight ? '#000' : '#fff'};
  color: ${({ theme, $isLight }) => 
    $isLight ? '#fff' : '#000'};
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

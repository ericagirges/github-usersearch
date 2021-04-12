import './App.css';
import styled from 'styled-components';
// components
import SearchBar from './components/SearchBar';

const Header = styled.header `
    height: 100px;
    background-color: #242A2E;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledTitle = styled.h1 `
    font-family: 'Roboto';
    font-weight: 700;
    color: white;
    font-size: 2.0em;
    @media(min-width: 600px) {
      font-size: 3.0em;
    }
`

function App() {
  return (
    <div className="App">
      <Header>
        <StyledTitle>GitHub User Search</StyledTitle>
      </Header>
      <SearchBar />
    </div>
  );
}

export default App;

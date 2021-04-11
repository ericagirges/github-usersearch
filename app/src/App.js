import './App.css';
// components
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <header>
        <h1>GitHub User Search</h1>
      </header>
      <SearchBar />
      <SearchResults />

    </div>
  );
}

export default App;

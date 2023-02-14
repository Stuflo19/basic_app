import './App.css';
import Items from './Components/Items.jsx';
import AddItems from './Components/AddItems.jsx';
import EditItems from './Components/EditItems.jsx';
import SearchItems from './Components/SearchItems';

function App() {
  return (
    <div className="App">
      <Items />
      <AddItems />
      <EditItems />
      <SearchItems />
    </div>
  );
}

export default App;

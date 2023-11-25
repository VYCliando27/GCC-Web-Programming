import './App.css';
import NavigationBar from './components/navigationBar';
import HomePage from './components/homePage';
import PlacesPage from './components/placesPage';
import "./style/style.css"

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar/>
        <HomePage/>
      </div>
      
      <div>
        <PlacesPage/>
      </div>
    </div>
    );
}

export default App;

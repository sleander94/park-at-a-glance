import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ParkPage from './components/ParkPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

const App = () => {
  const [parksInfo, setParksInfo] = useState<any[]>([]);

  useEffect(() => {
    const getParksInfo = async () => {
      try {
        const response = await fetch(
          `https://developer.nps.gov/api/v1/parks?limit=499&api_key=GutNTqgBFaepYpX1aGjggwDBjLiKJk8PMDCUnXsf`
        );
        const data = await response.json();
        setParksInfo(data.data);
      } catch (e) {
        console.error(e);
      }
    };
    getParksInfo();
  }, []);

  return (
    <div className="App h-100vh">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage parksInfo={parksInfo} />} />
          <Route
            path={`/parks/:parkCode`}
            element={<ParkPage parksInfo={parksInfo} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

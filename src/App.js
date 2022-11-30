import { Route, Routes } from 'react-router-dom';
import Main from "./components/main/Main";
import FullInfoPage from "./components/full-info-page/FullInfoPage";
import './App.scss';



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/show-search' element={<Main />} />
        <Route path='/show-search/:name' element={<FullInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;

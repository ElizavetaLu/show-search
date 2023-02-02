import { Route, Routes } from 'react-router-dom';
import FullInfoPage from "./components/full-info-page/FullInfoPage";
import Main from "./components/main/Main";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/show-search/build' element={<Main />} />
        <Route path='/show-search/build/:name' element={<FullInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;

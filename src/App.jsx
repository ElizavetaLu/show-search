import { Route, Routes } from 'react-router-dom';
import FullInfoPage from "./components/full-info-page/FullInfoPage";
import Main from "./components/main/Main";
import Header from './components/header/Header';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:name' element={<FullInfoPage />} />
      </Routes>
    </>
  );
}

export default App;

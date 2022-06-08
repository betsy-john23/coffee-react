import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import RoutesList from './routes';
import Header from './layout/header/header';
axios.defaults.withCredentials = true;

const Main: React.FC = () => {
  // const location = useLocation();
  // const [pathName, setPathName] = useState<string>('');
  // useEffect(() => {
  //   setPathName(location.pathname);
  // }, [location]);

  return (
    <div>
      <Header />
      <main>
        <RoutesList />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
const App: React.FC = () => {
  useEffect(() => {
    console.log("does it load");
  });
  return (
    <BrowserRouter>
      <Main></Main>
    </BrowserRouter>
  );
};


export default App;

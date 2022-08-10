
import './App.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'


import NavbarComponent from './components/NavbarComponent';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import FooterComponent from './components/FooterComponent';
import UploadImage from './pages/Image';
import UploadVedio from './pages/Vedio';
import Prediction from './pages/Prediction';
import RTSB from './pages/Camera';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarComponent/>
      <Switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/UploadImage"} exact component={UploadImage}/>
        <Route path={"/UploadVedio"} exact component={UploadVedio}/>
        <Route path={"/UploadRTSB"} exact component={RTSB}/>

        <Route path={"/Prediction/:mytype"} exact component={Prediction}/>

        <Route path={"*"} exact component={NotFound}/>
      </Switch>
      <FooterComponent/>

      </BrowserRouter>
    </div>
  );
}

export default App;

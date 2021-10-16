import './App.css';
import Header from './Header';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ImagesPage from './components/images/ImagesPage';
// import ImageDisplay from './components/images/ImageDisplay';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />

      <Switch>

        <Route path="/" exact={true} className="App"
          render={routerProps => (
            <HomePage {...routerProps} />
          )}
        />

        <Route path="/about" exact={true}
          render={routerProps => (
            <AboutPage {...routerProps} />
          )}
        />

        <Route path="/images" exact={true}
          render={routerProps => (
            <ImagesPage {...routerProps} />
          )}
        />

        <Route path="/api/:width/:height">
          <Redirect to="/.netlify/functions/server/api/:width/:height" />
        </Route>
        

        {/* <Route path="/:width/:height" exact={true}
          render={routerProps => (
            <ImageDisplay {...routerProps} />
          )}
        /> */}

      </Switch>
    </>
  );
}

export default App;

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import MovieList from './src/components/MovieList';
import MovieCreate from './src/components/MovieCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root" hideNavBar>
        <Scene key="auth" initial>
          <Scene key="login" component={LoginForm} title="Please login" />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.movieCreate()}
            key="movieList"
            component={MovieList}
            title="Movies"
          />
          {/* <Scene key="movieDetail" title="Movies" /> */}
          <Scene key="movieCreate" component={MovieCreate} title="Create movie" />
        </Scene>
      </Scene>
    </Router>
  )
};

export default RouterComponent;

import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

//Redux
import {connect} from 'react-redux';

// Drawer
import Drawer from './components/Drawer';

// Screen Initial
import SplashScreen from './screens/Splashscreen';
import Main from './screens/Main';
import Repository from './screens/Repository';

class Routers extends Component {
  render() {
    return (
      <Router>
        <Scene key="modal" modal>
          <Scene
            // drawer={isAuthenticated || isRegisterAuthenticated ? true : false}
            drawer={false}
            hideNavBar
            contentComponent={Drawer}>
            <Scene key="root" hideNavBar>
              {/* SplashScreen */}
              <Scene key="splash" component={SplashScreen} hideNavBar initial />

              {/* Main */}
              <Scene key="main" component={Main} hideNavBar type="replace" />

              {/* Repository Webview */}
              <Scene
                key="repo"
                component={Repository}
                hideNavBar
                type="replace"
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});

const mapStateToDispatch = {};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(Routers);

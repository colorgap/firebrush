import angular from 'angular';
import angularMaterial from 'angular-material';
import firebase from 'firebase';
import 'angularfire';
import angularUIRouter from 'angular-ui-router';
import config from './app.config';
import routes from './app.routes';
import AppCtrl from './modules/app.controller';
import Home from './modules/home/home.controller';
import Setup from './modules/setup/setup.controller';
import Register from './modules/register/register.controller';
import Dashboard from './modules/dashboard/dashboard.controller';
import Login from './modules/login/login.controller';
import Signout from './modules/signout/signout.controller';
import logo from './common/directives/logo/logo.directive';
import firebaseConfig from './config';
import '../styles/app.scss';

const MODULE_NAME = 'app';

firebase.initializeApp(firebaseConfig);

angular.module(MODULE_NAME, [angularMaterial,angularUIRouter,'firebase'])
  .config(config)
  .config(routes)
  .directive('logo',logo)
  .controller('appCtrl', AppCtrl)
  .controller('homeCtrl', Home)
  .controller('setupCtrl', Setup)
  .controller('registerCtrl', Register)
  .controller('dashboardCtrl', Dashboard)
  .controller('loginCtrl',Login)
  .controller('signoutCtrl',Signout);

export default MODULE_NAME;
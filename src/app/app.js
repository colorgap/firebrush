import angular from 'angular';
import angularMaterial from 'angular-material';
import angularUIRouter from 'angular-ui-router';
import config from './app.config';
import routes from './app.routes';
import AppCtrl from './modules/app.controller'
import HomeCtrl from './modules/home/home.controller'
import SetupCtrl from './modules/setup/setup.controller'
import logo from './common/directives/logo/logo.directive'
import '../styles/app.scss';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [angularMaterial,angularUIRouter])
  .config(config)
  .config(routes)
  .directive('logo',logo)
  .controller('appCtrl', AppCtrl)
  .controller('homeCtrl', HomeCtrl)
  .controller('setupCtrl', SetupCtrl);

export default MODULE_NAME;
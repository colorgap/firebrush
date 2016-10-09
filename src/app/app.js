import angular from 'angular';

import '../styles/app.scss';

let app = () => {
  return {
    template: require('../partials/index.html'),
    controller: 'AppCtrl',
    controllerAs: 'appCtrl'
  }
};

class AppCtrl {
  constructor() {
    var appCtrl = this;
    appCtrl.url = 'https://colorgap.com';
      console.log(appCtrl);
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
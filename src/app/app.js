import angular from 'angular';
import angularMaterial from 'angular-material';

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

angular.module(MODULE_NAME, [angularMaterial])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(['$mdThemingProvider', function ($mdThemingProvider) {
    $mdThemingProvider.definePalette('bowyer-purple', {
      '50': 'FFFFFF',
      '100': 'A872EB',
      '200': '8A41E4',
      '300': '661CC2',
      '400': '5818A7',
      '500': '4A148C',
      '600': '3C1071',
      '700': '2E0C56',
      '800': '20093C',
      '900': '110521',
      'A100': 'D1B5F4',
      'A200': 'A872EB',
      'A400': '5818A7',
      'A700': '2E0C56',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
      // on this palette should be dark or light
      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        '200', '300', '400', 'A100'],
      'contrastLightColors': ['500', '600', //hues which contrast should be 'dark' by default
        '700', '800', '900', 'A400']    // could also specify this if default was 'dark'
    });

    $mdThemingProvider.theme('bowyer')
      .primaryPalette('bowyer-purple',{
        'hue-1':'50'
      })
      .accentPalette('amber')
      .warnPalette('orange');
    $mdThemingProvider.setDefaultTheme('bowyer');
  }]);

export default MODULE_NAME;
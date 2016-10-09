import angular from 'angular';

let config = ['$mdThemingProvider', function ($mdThemingProvider) {
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
    $mdThemingProvider.definePalette('bowyer-white', {
      '50': 'FFFFFF',
      '100': 'FFFFFF',
      '200': 'FFFFFF',
      '300': 'FFFFFF',
      '400': 'FFFFFF',
      '500': 'FFFFFF',
      '600': 'FFFFFF',
      '700': 'FFFFFF',
      '800': 'FFFFFF',
      '900': 'FFFFFF',
      'A100': 'FFFFFF',
      'A200': 'FFFFFF',
      'A400': 'FFFFFF',
      'A700': 'FFFFFF',
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
     $mdThemingProvider.theme('inverse')
      .primaryPalette('bowyer-white')
      .accentPalette('deep-purple')
      .warnPalette('orange');
    $mdThemingProvider.setDefaultTheme('bowyer');
  }];

  export default config;
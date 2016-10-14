import angular from 'angular';

let routes = ['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            name: 'home',
            template: require('../partials/home/home.html'),
            controller: 'homeCtrl',
            controllerAs: 'home'
        })
        .state('setup', {
            url: '/setup',
            name: 'setup',
            template: require('../partials/setup/setup.html'),
            controller: 'setupCtrl',
            controllerAs: 'setup'
        })
        .state('login', {
            url: '/login',
            name: 'login',
            template: require('../partials/login/login.html'),
            controller: 'homeCtrl',
            controllerAs: 'home'
        })
        .state('register', {
            url: '/register',
            name: 'register',
            template: require('../partials/register/register.html'),
            controller: 'homeCtrl',
            controllerAs: 'home'
        });
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');
}];
export default routes;
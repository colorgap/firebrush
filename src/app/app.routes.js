import angular from 'angular';

let routes = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('lp', {
            url: '/',
            name: 'lp',
            template: require('../partials/index.html'),
            controller: 'appCtrl',
            controllerAs: 'app'
        })
        .state('home', {
            url: '/home',
            name: 'home',
            template: require('../partials/home/home.html'),
            controller: 'homeCtrl',
            controllerAs: 'home'
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
    $urlRouterProvider.otherwise('/home');
}];
export default routes;
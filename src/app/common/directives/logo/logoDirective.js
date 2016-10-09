import angular from 'angular';
import MODULE_NAME from 'app';

console.log(MODULE_NAME);
export default angular.module(MODULE_NAME).directive('logo', () => {
    return {
        template: 'bowyer'
    }
});
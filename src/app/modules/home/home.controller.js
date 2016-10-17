import firebase from 'firebase';

class Home {
  constructor($firebaseObject, $state) {
    'ngInject';
    this.$firebaseObject = $firebaseObject;
    this.$state = $state;
  }
}
Home.$inject = ['$firebaseObject', '$state'];
export default Home;

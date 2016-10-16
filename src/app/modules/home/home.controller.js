import firebase from 'firebase';

class Home {
  constructor($firebaseObject, $state) {
    'ngInject';
    this.$firebaseObject = $firebaseObject;
    this.$state = $state;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.$state.go('login');
      }
    });
  }
}
Home.$inject = ['$firebaseObject', '$state'];
export default Home;
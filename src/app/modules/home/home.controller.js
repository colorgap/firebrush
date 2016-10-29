import firebase from 'firebase';

class Home {
  constructor($firebaseObject, $state) {
    'ngInject';
    this.$firebaseObject = $firebaseObject;
    this.$state = $state;
    this.user = {};
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.user = user;
        }else{
            this.user = null;
        }
    });
  }
}
Home.$inject = ['$firebaseObject', '$state'];
export default Home;

import firebase from 'firebase';
class Home {
  constructor($firebaseObject,$state) {
    'ngInject';
    this.$firebaseObject = $firebaseObject;
    this.$state = $state;
    var user = firebase.auth().currentUser;
    if(!user){
      this.$state.go('login');
    }
    // let ref = firebase.database().ref();
    // var data = this.$firebaseObject(ref);
    // console.log(data);
  }
}

export default Home;
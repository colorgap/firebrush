import firebase from 'firebase';
class Setup {
  constructor($firebaseObject,$state) {
    'ngInject';
    this.$firebaseObject = $firebaseObject;
    this.$state = $state;
  }

  completeSetup(){
    firebase.auth().createUserWithEmailAndPassword(this.credentials.email, this.credentials.password)
    .then((data)=>{
      this.$state.go('dashboard');
    })
    .catch((error)=> {
      console.log(error);
    });
  }
}
Setup.$inject = ['$firebaseObject', '$state'];
export default Setup;
import firebase from 'firebase';
class Register {
  constructor($firebaseObject,$state) {
    'ngInject';
    this.$firebaseObject = $firebaseObject;
    this.$state = $state;
  }

  validateRegister(){
    firebase.auth().createUserWithEmailAndPassword(this.credentials.email, this.credentials.password)
    .then((data)=>{
      this.$state.go('dashboard');
    })
    .catch((error)=> {
      console.log(error);
    });
  }
}

export default Register;
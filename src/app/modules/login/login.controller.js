import firebase from 'firebase';
class Login {
    constructor($firebaseObject, $state) {
        'ngInject';
        this.$firebaseObject = $firebaseObject;
        this.$state = $state;
    }
    validateLogin() {
        firebase.auth().signInWithEmailAndPassword(this.credentials.email, this.credentials.password)
        .then(()=>{
            this.$state.go('dashboard');
        })
        .catch((error)=> {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }
}
Login.$inject = ['$firebaseObject', '$state'];
export default Login;
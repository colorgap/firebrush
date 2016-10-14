import firebase from 'firebase';
class Signout {
    constructor($firebaseObject, $state) {
        'ngInject';
        this.$firebaseObject = $firebaseObject;
        this.$state = $state;
        firebase.auth().signOut().then(() => {
            this.$state.go('login');
        }, (error) => {
            // An error happened.
        });
    }
}

export default Signout;
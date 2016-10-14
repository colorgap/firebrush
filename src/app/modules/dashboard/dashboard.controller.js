import firebase from 'firebase';
class Dashboard {
    constructor($firebaseObject, $state) {
        'ngInject';
        this.$firebaseObject = $firebaseObject;
        this.$state = $state;
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
            } else {
                this.$state.go('login');
            }
        });
        // let ref = firebase.database().ref();
        // var data = this.$firebaseObject(ref);
        // console.log(data);
    }
}

export default Dashboard;
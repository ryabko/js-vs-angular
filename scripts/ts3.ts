module myApp {

    export class ContactsController {
        static $inject = ['$scope'];

        constructor(private $scope) {
            $scope.contacts = ['89041111111', '89042222222', '89043333333'];
            $scope.contact = '';
        }

        addContact() {
            this.$scope.contacts.push(this.$scope.contact);
            this.$scope.contact = '';
        }

        removeContact(index: number) {
            this.$scope.contacts.splice(index, 1);
        }
    }

    angular.module('myApp', []).controller('ContactsCtrl', ContactsController);
}
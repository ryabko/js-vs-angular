module myApp {

    export class ContactsController {
        static $inject = ['$scope'];

        constructor(private $scope) {
            $scope.contacts = ['89041111111', '89042222222', '89043333333'];
        }

        addContact(contact: string) {
            this.$scope.contacts.push(contact);
        }

        removeContact(index: number) {
            console.log('removing contacts');
            this.$scope.contacts.splice(index, 1);
        }
    }

    angular.module('myApp', []).controller('ContactsCtrl', ContactsController);
}
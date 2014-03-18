module myApp {

    export class ContactsController {
        static $inject = ['$scope', 'ContactsService'];

        constructor(private $scope,
                    private contactsService: ContactsService) {
            $scope.contacts = contactsService.getAllContacts();
            $scope.contact = '';
        }

        addContact() {
            this.contactsService.addContact(this.$scope.contact);
            this.$scope.contact = '';
            this.$scope.contacts = this.contactsService.getAllContacts();
        }

        removeContact(index: number) {
            this.contactsService.removeContact(index);
            this.$scope.contacts = this.contactsService.getAllContacts();
        }
    }

    angular.module('myApp', []).controller('ContactsCtrl', ContactsController);
}

////// ==========================

module myApp {

    export class ContactsService {

        static contacts: string[] = ['89041111111', '89042222222', '89043333333'];

        getAllContacts(): string[] {
            return ContactsService.contacts;
        }

        addContact(contact: string) {
            ContactsService.contacts.push(contact);
        }

        removeContact(index: number) {
            ContactsService.contacts.splice(index, 1);
        }
    }

    angular.module('myApp').service('ContactsService', ContactsService);

}
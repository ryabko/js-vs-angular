var contacts = ['89041111111', '89042222222', '89043333333'];

function refreshContactsView() {
    var contactsUL = $('#contacts');
    contactsUL.empty();
    for (var i = 0; i < contacts.length; i++) {
        contactsUL.append("<li id='contact" + i + "'>" + contacts[i] +
            " <a href='#' onclick='removeContact(" + i + ")'>x</a></li>");
    }
}

function addContact(contact) {
    contacts.push(contact);
    refreshContactsView();
}

function removeContact(id) {
    contacts.splice(id, 1);
    refreshContactsView();
}

refreshContactsView();
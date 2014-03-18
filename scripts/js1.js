function addContact() {
    var contact = $('#contact');
    var contacts = $('#contacts');
    var newId = contacts.find("li").size();

    contacts.append("<li id='contact" + newId + "'>" + contact.val() +
        " <a href='#' onclick='removeContact(" + newId + ")'>x</a></li>");
    contact.val("");
}

function removeContact(id) {
    $("#contacts").find("#contact" + id).remove();
}

// function RegEx() {
//     var email = document.getElementById('txtEmail');
//     var full_name = document.getElementById('fn');
//     var id = document.getElementById('cin');
//     var contact = document.getElementById('phone');
//     var filter_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     var filter_name = /^[a-zA-Z].*[\s\.]*$/g;
//     var filter_id = /[a-zA-Z]{1,2}\d{6}*$/g;
//     var filter_contact = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

//     if (filter_email.test(email.value)) {
//         alert('Please provide a valid email address');
//         email.focus();
//         return false;
//     }
//     if (!filter_name.test(full_name.value)) {
//         alert('Please provide a valid full name');
//         full_name.focus();
//         return false;
//     }
//     if (!filter_id.test(id.value)) {
//         alert('Please provide a valid cin');
//         id.focus();
//         return false;
//     }
//     if (!filter_contact.test(contact.value)) {
//         alert('Please provide a valid phone number');
//         contact.focus();
//         return false;
//     }
// }
function RegEx() {
    var email = document.getElementById('txtEmail');
    var full_name = document.getElementById('fn');
    var id = document.getElementById('cin');
    var contact = document.getElementById('phone');
    var filter_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var filter_name = /^[a-zA-Z].*[\s.]*$/;
    var filter_id = /^[a-zA-Z]{1,2}\d{6}$/;
    var filter_contact = /^[\+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

    if (!filter_email.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus();
        return false;
    }
    if (!filter_name.test(full_name.value)) {
        alert('Please provide a valid full name');
        full_name.focus();
        return false;
    }
    if (!filter_id.test(id.value)) {
        alert('Please provide a valid cin');
        id.focus();
        return false;
    }
    if (!filter_contact.test(contact.value)) {
        alert('Please provide a valid phone number');
        contact.focus();
        return false;
    }
    return true;
}


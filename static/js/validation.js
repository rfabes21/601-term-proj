var checkAlphaNumeric = function(text){
    var pattern = /^[a-z0-9]+$/i;
    return pattern.test(text);
}

var checkEmailAddress = function(email){
    var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return pattern.test(email);
}

var checkValidation = function(e){
    e.preventDefault();
    e.stopPropagation();
    var firstName = $('#first-name-input');
    var firstNameVal = $('#first-name-input').val();
    var firstNameMsg = $('#firstName-validation-msg');

    var lastName = $('#last-name-input');
    var lastNameVal = $('#last-name-input').val();
    var lastNameMsg = $('#lastName-validation-msg');

    var email = $('#email-input');
    var emailVal = $('#email-input').val();
    var emailMsg = $('#email-validation-msg');

    var isValid = true;

    // debugger;

    if (firstNameVal == "") {
        firstName.addClass('error');
        firstNameMsg.text('is Required');
        isValid = false;
    } else if (firstNameVal.length < 2 ) {
        firstNameMsg.text('must be more than two characters');
        isValid = false;
    } else {
        // clearing the error state
        isValid = true;
        firstName.removeClass('error').text('');
    }

    if (lastNameVal == "") {
        lastName.addClass('error');
        lastNameMsg.text('is Required');
        isValid = false;
    } else if (!checkAlphaNumeric(lastNameVal)) {
        lastName.addClass('error');
        lastNameMsg.text('must be alphanumeric and contain no special characters.');
        isValid = false;
    } else {
        // clearing the error state
        isValid = true;
        lastName.removeClass('error').text('');
    }

    if (emailVal == "") {
        email.addClass('error');
        emailMsg.text('is Required');
        isValid = false;
    } else if (!checkEmailAddress(emailVal)) {
        email.addClass('error');
        emailMsg.text('must be a valid email address.');
        isValid = false;
    } else {
        // clearing the error state
        isValid = true;
        email.removeClass('error').text('');
    }

    if (isValid) {
        $('#email-form').submit();
    }
}

var resetFormMsgs = function(){
     $('#first-name-input').removeClass('error').text('');
     $('#last-name-input').removeClass('error').text('');
     $('#email-input').removeClass('error').text('');
}

window.onload = function(){
    $('#submit-btn').click(function(e){
        checkValidation(e);
    });

    $('#reset-btn').click(function(){
        resetFormMsgs();
    });
}

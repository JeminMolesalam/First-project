var Register = {

    Init: function () {
        Register.ValidateAllBlurEvent();
    },

    ValidateAllControl: function () {

        var isValidInput = Register.ValidateAllNullControl();

        if (isValidInput) {
            alert('Form Submitted Successfully');
            $("#tableval").show()
            $("#formval").hide()
            Register.FirstAccordinData();
            Register.SecondAccordinData();
            Register.ThirdAccordinData();
        } else {
            $("#tableval").hide()
            $("#formval").show()
        }

    },

    //Validate All Null Control
    ValidateAllNullControl: function () {
        var isValid = true;

        $("#myform input, #myform textarea, #myform .valradio").each(function () {
            var currentval = $(this);

            if (currentval.is('input, textarea')) {
                if (currentval.attr('required') == "required") {
                    if (currentval.val() === '') {
                        var message = currentval.attr('data-errmessage');
                        currentval.next('span').text(message);
                        isValid = false;
                    } else {
                        currentval.next('span').text('');
                    }
                }
            } else if (currentval.hasClass('valradio')) {
                if (currentval.find('input[type="radio"]:checked').length == 0) {
                    var message = currentval.data('errrdomessage');
                    currentval.find('span').text(message);
                    isValid = false;
                } else {
                    currentval.find('span').text('');
                }
            }
        });

        return isValid;
    },

    //Validate All Blur Event
    ValidateAllBlurEvent: function () {
        $("#myform input, #myform textarea,#myform .valradio").on("blur", function () {
            var current = $(this);
            var chkletterval = /^[A-Za-z]+$/;
            var chknumber = /^[0-9]+$/;
            var chkemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (current.attr('required') === "required") {
                if (current.val().trim() === '') {
                    var errorMessage = current.data('errmessage');
                    current.next('span').text(errorMessage);
                }
                else if (current.val() != '') {
                    //For Character Only Validation
                    if (current.attr("data-character") == "character") {

                        if (!chkletterval.test(current.val())) {
                            var message = current.attr('charmessage');
                            current.next('span').text(message);
                        }
                        else {
                            current.next('span').text('');
                        }
                    }
                    //For Numeric Validation
                    else if (current.attr("data-number") == "number") {
                        if (!chknumber.test(current.val())) {
                            var message = current.attr('nummessage');
                            current.next('span').text(message);
                        }
                        else {
                            current.next('span').text('');
                        }
                    }
                    //For Email Validation
                    else if (current.attr("data-email") == "email") {
                        if (!chkemail.test(current.val())) {
                            var message = current.attr('emailmessage');
                            current.next('span').text(message);
                        }
                        else {
                            current.next('span').text('');
                        }
                    }
                    //For Calender
                    else if (current.attr("data-calender") == "calender") {
                        if (current.val().trim() === '') {
                            var errorMessage = current.data('calmessage');
                            current.next('span').text(errorMessage);
                        }
                        else {
                            current.next('span').text('');
                        }
                    }
                    //For Radio
                    else if (current.hasClass('valradio')) {
                        var name = current.find('input[type="radio"]').attr('name');
                        if ($('input[name="' + name + '"]:checked').length === 0) {
                            var errorMessage = current.data('errrdomessage');
                            current.find('span').text(errorMessage);
                        } else {
                            current.find('span').text('');
                        }
                    }
                    else{
                        current.next('span').text('');
                    }
                }
                else {
                    current.next('span').text('');
                }

            }
        });

    },

    //First Accordin Data
    FirstAccordinData: function () {
        var formData = {
            'Firstname': $('#txtfname').val(),
            'Lastname': $('#txtlname').val(),
            'Dob': $('#caldob').val(),
            'Address': $('#txtaddress').val(),
            'Suburb': $('#txtsubrb').val(),
            'Gender': $('input[name="gender"]:checked').val(),
            'State': $('#txtstate').val(),
            'Postcode': $('#txtpostcode').val(),
            'Mobno': $('#txtmobno').val(),
            'Email': $('#txtemail').val()
        };

        var newRow = '<tr>';
        for (var key in formData) {
            newRow += '<td>' + formData[key] + '</td>';
        }
        newRow += '</tr>';

        $('#personaldetail tbody').append(newRow);

        //Clear All The Input Data
        $('#txtfname').val('');
        $('#txtlname').val('');
        $('#caldob').val('');
        $('#txtaddress').val('');
        $('#txtsubrb').val('');
        $('input[name="gender"]').prop('checked', false);
        $('#txtstate').val('');
        $('#inppcode').val('');
        $('#txtmobno').val('');
        $('#txtemail').val('');
    },

    //Second Accordin Data
    SecondAccordinData: function () {

        var formData = {
            'Occupation': $('#txtoccupation').val(),
            'CurrentPosition': $('input[name="rdoposition"]:checked').val(),
            'CurrentEmployer': $('#txtcurrentemp').val(),
            'AddressofEmployer': $('#txtempaddress').val(),
            'Postcode': $('#txtemppostcode').val(),
            'PhoneNo': $('#txtphoneno').val(),
            'MobileNo': $('#txtempmobno').val(),
            'StartDateOfEmployer': $('#calstartDate').val()
        };

        var newRow = '<tr>';
        for (var key in formData) {
            newRow += '<td>' + formData[key] + '</td>';
        }
        newRow += '</tr>';

        $('#employeedetail tbody').append(newRow);

        //Clear All Input Field
        $('#txtoccupation').val('');
        $('input[name="rdoposition"]').prop('checked', false);
        $('#txtcurrentemp').val('');
        $('#txtempaddress').val('');
        $('#txtemppostcode').val('');
        $('#txtphoneno').val('');
        $('#txtempmobno').val('');
        $('#calstartDate').val('');
    },

    //Third Accordin
    ThirdAccordinData: function () {
        var regState = $('input[name="registeredState"]:checked').val();
        var stateDetails = {
            // 'RegisteredState': regState,
            'State1': $('#txtstate1').val(),
            'RegistrationNo1': $('#txtregno1').val(),
            'State2': $('#txtstate2').val(),
            'RegistrationNo2': $('#txtregno2').val(),
            'Signature': $('#txtsignature').val(),
            'Date': $('#caldate').val()
        };

        var newRow = '<tr>';
        for (var key in stateDetails) {
            newRow += '<td>' + stateDetails[key] + '</td>';
        }
        newRow += '</tr>';

        $('#registrationdetail tbody').append(newRow);

        // Clear the form fields
        $('input[name="registeredState"]').prop('checked', false);
        $('#txtstate1').val('');
        $('#txtregno1').val('');
        $('#txtstate2').val('');
        $('#txtregno2').val('');
        $('#txtsignature').val('');
        $('#caldate').val('');
    },

}

$(document).ready(function () {
    Register.Init();
    $("#tableval").hide()
})
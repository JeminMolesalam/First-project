
var Register = {

    Init: function () {
        Register.ValidateAllBlurEvent();
    },

    //===============Person Detail Start============//

    // First Name
    Validatefname: function () {
        $('#chkfname').hide();
        var fname = $("#txtfname").val();
        var chkletterval = /^[A-Za-z]+$/;

        if (fname === '') {
            $('#chkfname').show();
            $('#chkfname').html('Please Enter First Name');
            return false;
        }
        else if (!chkletterval.test(fname)) {
            $('#chkfname').show();
            $('#chkfname').html('First Name should contain only letters');
            return false;
        }
        else {
            $('#chkfname').hide();
            return true;
        }
    },

    // Last Name
    Validatelname: function () {
        $('#chklname').hide();
        var lname = $("#txtlname").val();
        var chkletterval = /^[A-Za-z]+$/;

        if (lname === '') {
            $('#chklname').show();
            $('#chklname').html('Please Enter Last Name');
            return false;
        } else if (!chkletterval.test(lname)) {
            $('#chklname').show();
            $('#chklname').html('Last Name should contain only letters');
            return false;
        }
        else {
            $('#chklname').hide();
            return true;
        }
    },

    //Dob
    ValidateDob: function () {
        $('#chkdob').hide();
        var dob = $('#caldob').val();

        if (dob === '') {
            $('#chkdob').show();
            $('#chkdob').html('Please Select Date Of Birth');
            return false;
        }
        else {
            var selecteddate = new Date(dob);
            var currentdate = new Date();

            if (selecteddate > currentdate) {
                $('#chkdob').show();
                $('#chkdob').html('Dob Can Not Be Future');
                return false;
            }
            else {
                $('#chkdob').hide();
                return true;
            }
        }
    },

    //Gender
    ValidateGender: function () {
        $('#chkgender').hide();

        if (!$("input[name='gender']:checked").val()) {
            $('#chkgender').show();
            $('#chkgender').html('Please Select Gender');
            return false;
        }
        else {
            $('#chkgender').hide();
            return true;
        }
    },

    //Address
    ValidateAddress: function () {
        $('#chkaddress').hide();
        var address = $('#txtaddress').val();

        if (address === '') {
            $('#chkaddress').show();
            $('#chkaddress').html('Please Enter Address');
            return false;
        }
        else {
            $('#chkdob').hide();
            return true;
        }
    },

    //State
    ValidateState: function () {
        $('#chkstate').hide();
        var state = $('#txtstate').val();
        var chkletterval = /^[A-Za-z]+$/;

        if (state === '') {
            $('#chkstate').show();
            $('#chkstate').html('Please Enter State');
            return false;
        }
        else if (!chkletterval.test(state)) {
            $('#chkstate').show();
            $('#chkstate').html('Only Contain Letter');
            return false;
        }
        else {
            $('#chkstate').hide();
            return true;
        }
    },

    //Postcode
    ValidatePostcode: function () {
        $('#chkpostcode').hide();
        var postcode = $('#txtpostcode').val();
        var valnumpostcode = /^\d{6}$/;

        if (postcode === '') {
            $('#chkpostcode').show();
            $('#chkpostcode').html('Please Enter Postcode');
            return false;
        }
        else if (!valnumpostcode.test(postcode)) {
            $('#chkpostcode').show();
            $('#chkpostcode').html('Postcode should be exactly 6 digits long and contain only numbers');
            return false;
        }
        else {
            $('#chkpostcode').hide();
            return true;
        }
    },

    //Sub-Resident
    ValidateSubrub: function () {
        $('#chksubrub').hide();
        var subrub = $('#txtsubrb').val();

        if (subrub === '') {
            $('#chksubrub').show();
            $('#chksubrub').html('Please Enter Sub Resident');
            return false;
        }
        else {
            $('#chksubrub').hide();
            return true;
        }
    },

    //Phone No
    ValidateMobno: function () {
        $('#chkmobno').hide();
        var phoneno = $('#txtmobno').val();
        var valphone = /^\d{10}$/;


        if (phoneno === '') {
            $('#chkmobno').show();
            $('#chkmobno').html('Please Enter Mobile No');
            return false;
        } else if (!valphone.test(phoneno)) {
            $('#chkmobno').show();
            $('#chkmobno').html('Mobile number should be exactly 10 digits and contain only numbers');
            return false;
        }
        else {
            $('#chkmobno').hide();
            return true;
        }
    },

    //Email
    ValidateEmail: function () {
        $('#chkemail').hide();
        var email = $('#txtemail').val();
        var valemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            $('#chkemail').show();
            $('#chkemail').html('Please Enter Email');
            return false;
        }
        else if (!valemail.test(email)) {
            $('#chkemail').show();
            $('#chkemail').html('Please Enter Valid Email Address');
            return false;
        }
        else {
            $('#chkemail').hide();
            return true;
        }
    },

    //================Person Detail End=============//

    //==============Employee Detail Start============//

    //Occupation
    ValidateOccupation: function () {
        $('#chkoccupation').hide();
        var occupation = $('#txtoccupation').val();
        var chkletterval = /^[A-Za-z]+$/;

        if (occupation === '') {
            $('#chkoccupation').show();
            $('#chkoccupation').html('Please Enter Occupation');
            return false;
        }
        else if (!chkletterval.test(occupation)) {
            $('#chkoccupation').show();
            $('#chkoccupation').html('Occupation should contain only letters');
            return false;
        }
        else {
            $('#chkoccupation').hide();
            return true;
        }
    },

    //Radiobutton
    ValidatePosition: function () {
        $('#chkposition').hide();

        if (!$("input[name='rdoposition']:checked").val()) {
            $('#chkposition').show();
            $('#chkposition').html('Please Select Position Of Employee');
            return false;
        }
        else {
            $('#chkposition').hide();
            return true;
        }
    },

    //Current Employee
    ValidateCurrentemp: function () {
        $('#chkcurrentemp').hide();
        var currentemp = $('#txtcurrentemp').val();
        var chkletterval = /^[A-Za-z]+$/;

        if (currentemp === '') {
            $('#chkcurrentemp').show();
            $('#chkcurrentemp').html('Please Enter Current Employee');
            return false;
        }
        else if (!chkletterval.test(currentemp)) {
            $('#chkcurrentemp').show();
            $('#chkcurrentemp').html('Current Emp Name should contain only letters');
            return false;
        }
        else {
            $('#chkcurrentemp').hide();
            return true;
        }
    },

    //Employee Address
    ValidateEmpadddress: function () {
        $('#chkempaddress').hide();
        var occupation = $('#txtempaddress').val();

        if (occupation === '') {
            $('#chkempaddress').show();
            $('#chkempaddress').html('Please Enter Employee Address');
            return false;
        }
        else {
            $('#chkempaddress').hide();
            return true;
        }
    },

    //Employee Postcode
    ValidateEmppostcode: function () {
        $('#chkemppostcode').hide();
        var emppostcode = $('#txtemppostcode').val();
        var valnumpostcode = /^\d{6}$/;

        if (emppostcode === '') {
            $('#chkemppostcode').show();
            $('#chkemppostcode').html('Please Enter Employee Postcode');
            return false;
        }
        else if (!valnumpostcode.test(emppostcode)) {
            $('#chkemppostcode').show();
            $('#chkemppostcode').html('Postcode should be exactly 6 digits long and contain only numbers');
            return false;
        }
        else {
            $('#chkemppostcode').hide();
            return true;
        }
    },

    //Employee Phone No
    ValidatePhoneno: function () {
        $('#chkphoneno').hide();
        var phoneno = $('#txtphoneno').val();
        var valphone = /^\d{10}$/;

        if (phoneno === '') {
            $('#chkphoneno').show();
            $('#chkphoneno').html('Please Enter Phone No');
            return false;
        }
        else if (!valphone.test(phoneno)) {
            $('#chkphoneno').show();
            $('#chkphoneno').html('Mobile number should be exactly 10 digits and contain only numbers');
            return false;
        }
        else {
            $('#chkphoneno').hide();
            return true;
        }
    },

    //Employee Mob No
    ValidateEmpMobno: function () {
        $('#chkempmobno').hide();
        var mobno = $('#txtempmobno').val();
        var valphone = /^\d{10}$/;

        if (mobno === '') {
            $('#chkempmobno').show();
            $('#chkempmobno').html('Please Enter Employee Mobile No');
            return false;
        } else if (!valphone.test(mobno)) {
            $('#chkempmobno').show();
            $('#chkempmobno').html('Mobile number should be exactly 10 digits and contain only numbers');
            return false;
        }
        else {
            $('#chkempmobno').hide();
            return true;
        }
    },

    //Start Date Of Employeer
    ValidateStartDate: function () {
        $('#chkstartdate').hide();
        var dob = $('#calstartDate').val();

        if (dob === '') {
            $('#chkstartdate').show();
            $('#chkstartdate').html('Please Select Start Date Of Employeer');
            return false;
        }
        else {
            var selecteddate = new Date(dob);
            var currentdate = new Date();

            if (selecteddate > currentdate) {
                $('#chkstartdate').show();
                $('#chkstartdate').html('Start Date Can Not Be Future');
                return false;
            }
            else {
                $('#chkstartdate').hide();
                return true;
            }
        }
    },

    //=============Employee Detail End=============//

    //===============Interstate Registration Detail Start===========//

    //Radio Button (Yes/No) 
    ValidateRegistedState: function () {
        $('#chkregisteredstate').hide();

        if (!$("input[name='registeredState']:checked").val()) {
            $('#chkregisteredstate').show();
            $('#chkregisteredstate').html('Please Select Atlease One Radio Button');
            return false;
        }
        else {
            $('#chkregisteredstate').hide();
            return true;
        }
    },

    //State 1
    ValidateState1: function () {
        $('#chkstate1').hide();
        var state1 = $('#txtstate1').val();
        var chkletterval = /^[A-Za-z]+$/;


        if (state1 === '') {
            $('#chkstate1').show();
            $('#chkstate1').html('Please Enter State Detail');
            return false;
        }
        else if (!chkletterval.test(state1)) {
            $('#chkstate1').show();
            $('#chkstate1').html('State should contain only letters');
            return false;
        }
        else {
            $('#chkstate1').hide();
            return true;
        }
    },

    //State 2
    // ValidateState2: function () {
    //     $('#chkstate2').hide();
    //     var state2 = $('#txtstate2').val();
    //     var chkletterval = /^[A-Za-z]+$/;


    //     if (state2 === '') {
    //         $('#chkstate2').show();
    //         $('#chkstate2').html('Please Enter State Detail');
    //         return false;
    //     }
    //     else if (!chkletterval.test(state2)) {
    //         $('#chkstate2').show();
    //         $('#chkstate2').html('State should contain only letters');
    //         return false;
    //     }
    //     else {
    //         $('#chkstate2').hide();
    //         return true;
    //     }
    // },

    //Signature
    ValidateSignature: function () {
        $('#chksignature').hide();
        var signature = $('#txtsignature').val();
        var chkletterval = /^[A-Za-z]+$/;

        if (signature === '') {
            $('#chksignature').show();
            $('#chksignature').html('Please Enter Signature Detail');
            return false;
        }
        else if (!chkletterval.test(signature)) {
            $('#chksignature').show();
            $('#chksignature').html('Signature should contain only letters');
            return false;
        }
        else {
            $('#chksignature').hide();
            return true;
        }
    },

    //Registration No 1
    ValidateRegno1: function () {
        $('#chkregno1').hide();
        var regno1 = $('#txtregno1').val();
        var valnum = /^[0-9]+$/;

        if (regno1 === '') {
            $('#chkregno1').show();
            $('#chkregno1').html('Please Enter Registration Number');
            return false;
        } else if (!valnum.test(regno1)) {
            $('#chkregno1').show();
            $('#chkregno1').html('Registration number should contain only numbers');
            return false;
        }
        else {
            $('#chkregno1').hide();
            return true;
        }
    },

    
    //Date
    ValidateDate: function () {
        $('#chkdate').hide();
        var dob = $('#caldate').val();

        if (dob === '') {
            $('#chkdate').show();
            $('#chkdate').html('Please Select Date');
            return false;
        }
        else {
            var selecteddate = new Date(dob);
            var currentdate = new Date();

            if (selecteddate > currentdate) {
                $('#chkdate').show();
                $('#chkdate').html('Date Can Not Be Future');
                return false;
            }
            else {
                $('#chkdate').hide();
                return true;
            }
        }
    },

    //===============Interstate Registration Detail End===========//

    //Validate All Control
    ValidateAllControl: function () {

        // ============Person Detail Start========= //

        var valfname = Register.Validatefname();
        var vallname = Register.Validatelname();
        var valdob = Register.ValidateDob();
        var valGender = Register.ValidateGender();
        var valAddress = Register.ValidateAddress();
        var valState = Register.ValidateState();
        var valPostcode = Register.ValidatePostcode();
        var valSubrub = Register.ValidateSubrub();
        var valMobno = Register.ValidateMobno();
        var valEmail = Register.ValidateEmail();

        // ================Person Detail End======== //

        // ===============Employee Detail Start========//

        var valOccupation = Register.ValidateOccupation();
        var valPosition = Register.ValidatePosition();
        var valCurrentemp = Register.ValidateCurrentemp();
        var valEmpaddress = Register.ValidateEmpadddress();
        var valEmpPostcode = Register.ValidateEmppostcode();
        var valPhoneno = Register.ValidatePhoneno();
        var valEmpmobno = Register.ValidateEmpMobno();
        var valStartDate = Register.ValidateStartDate();

        // ===============Employee Detail End========//

        //===============Interstate Registration Detail Start=======//

        var valRegisterdstate = Register.ValidateRegistedState();
        var valState1 = Register.ValidateState1();
        // var valState2 = Register.ValidateState2();
        var ValSignature = Register.ValidateSignature();
        var valRegno1 = Register.ValidateRegno1();
        // var valRegno2 = Register.ValidateRegno2();
        var valDate = Register.ValidateDate();

        //===============Interstate Registration Detail End=======//

        if (valfname && vallname && valdob && valGender && valAddress && valState
            && valPostcode && valSubrub && valMobno && valEmail && valOccupation
            && valPosition && valCurrentemp && valEmpaddress && valEmpPostcode
            && valPhoneno && valEmpmobno && valStartDate && valRegisterdstate
            && valState1  && ValSignature && valRegno1 && valDate) {
            alert('Form Submitted Successfully');
            Register.FirstAccordinData();
            Register.SecondAccordinData();
            Register.ThirdAccordinData();
            $("#tableval").show()
            $("#formval").hide()
        }
        else{
            $("#formval").show()
            $("#tableval").hide()
        }
    },

    //Validate All Input Element Blur Events
    ValidateAllBlurEvent: function () {

        $("#txtfname").on('blur', function () {
            Register.Validatefname();
        })

        $("#txtlname").on('blur', function () {
            Register.Validatelname();
        })

        $("#caldob").on('blur', function () {
            Register.ValidateDob();
        })

        $("input[name='gender']:checked").on('blur', function () {
            Register.ValidateGender();
        })

        $("#txtaddress").on('blur', function () {
            Register.ValidateAddress();
        })

        $("#txtstate").on('blur', function () {
            Register.ValidateState();
        })

        $("#txtpostcode").on('blur', function () {
            Register.ValidatePostcode();
        })

        $("#txtsubrb").on('blur', function () {
            Register.ValidateSubrub();
        })

        $("#txtmobno").on('blur', function () {
            Register.ValidateMobno();
        })

        $("#txtemail").on('blur', function () {
            Register.ValidateEmail();
        })

        $("#txtoccupation").on('blur', function () {
            Register.ValidateOccupation();
        })

        $("#txtcurrentemp").on('blur', function () {
            Register.ValidateCurrentemp();
        })

        $("#txtempaddress").on('blur', function () {
            Register.ValidateEmpadddress();
        })

        $("#txtemppostcode").on('blur', function () {
            Register.ValidateEmppostcode();
        })

        $("#txtphoneno").on('blur', function () {
            Register.ValidatePhoneno();
        })

        $("#txtempmobno").on('blur', function () {
            Register.ValidateEmpMobno();
        })

        $("#calstartDate").on('blur', function () {
            Register.ValidateStartDate();
        })

        $("#txtstate1").on('blur', function () {
            Register.ValidateState1();
        })

        // $("#txtstate2").on('blur', function () {
        //     Register.ValidateState2();
        // })

        $("#txtsignature").on('blur', function () {
            Register.ValidateSignature();
        })

        $("#txtregno1").on('blur', function () {
            Register.ValidateRegno1();
        })

        // $("#txtregno2").on('blur', function () {
        //     Register.ValidateRegno2();
        // })

        $("#caldate").on('blur', function () {
            Register.ValidateDate();
        })
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
            'Signature' : $('#txtsignature').val(),
            'Date' : $('#caldate').val()
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

    BackToForm : function(){
        $("#tableval").hide();
        $("#formval").show();
    }

}

//====================Yes Or No Radiobutton=================//
// const registeredState = document.querySelector('input[name="registeredState"]');

// const stateDetails = document.getElementById('stateDetails');

// registeredState.addEventListener('change', (event) => {
//     if (event.target.value === 'yes') {
//         stateDetails.classList.remove('d-none');
//     } else if (event.target.value === 'no') {
//         stateDetails.classList.add('d-none');
//     }
//     else {
//         stateDetails.classList.add('d-none');
//     }
// });

$(document).ready(function () {
    $("#tableval").hide()

    
    Register.Init();
})







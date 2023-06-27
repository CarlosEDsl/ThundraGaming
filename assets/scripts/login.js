var userRegister = {
    name: '',
    email:'',
    password:'',
    cell:'',
    gender:''
}

var sendInfo = true;

$('form').on('submit', (event) => {
  sendInfo = true;
  event.preventDefault();
  emailVerify();
  passwordVerify();
  if (sendInfo) {
    var userRegister = {
      name: $('#name').val(),
      email: $('#email').val(),
      password: $('#password').val(),
      cell: $('#cell').val(),
      gender: $('input[name="gender"]:checked').val()
    };
    if (userRegister.name != '' && userRegister.email != '' && userRegister.password != '' && userRegister.cell != '') {
      console.log(userRegister)
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem("name", userRegister.name);
        localStorage.setItem("email", userRegister.email);
        localStorage.setItem("password", userRegister.password);
        localStorage.setItem("cell", userRegister.cell);
        localStorage.setItem("gender", userRegister.gender);
      }
    }
  }
});

function emailVerify() {
  if ($('#email').val() == $('#emailConfirm').val()) {
    $('#emailConfirm').removeClass('invalid').addClass('valid');
    $('#wrongEmail').css('display', 'none');
  } else {
    $('#emailConfirm').removeClass('valid').addClass('invalid');
    $('#wrongEmail').css('display', 'block');
    sendInfo = false;
  }
}

function passwordVerify() {
  if ($('#password').val() == $('#passwordConfirm').val()) {
    $('#passwordConfirm').removeClass('invalid').addClass('valid');
    $('#wrongEmail').css('display', 'none');
  } else {
    $('#passwordConfirm').removeClass('valid').addClass('invalid');
    $('#wrongPas').css('display', 'block');
    sendInfo = false;
  }
}
  $(document).ready(function() {
    $('#cell').mask('(99) 99999-9999');
  });
const firstInput = document.querySelector(".input-1");
const secondInput = document.getElementById("input-2");
//const Inputs = document.querySelectorAll('input');

function ValidateEmailAddress(input) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com\s*$/;
    if (input.value.match(validRegex)){
        input.classList.remove('error');
      return true;
    } else {
        input.classList.add('error');
      return false;
    }
}

// const validation = () => {
//   let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com\s*$/;
//   Inputs.forEach((input) => {
//     if (input.value.match(validRegex)){
//         input.classList.remove('error');
//       return true;
//     } else {
//         input.classList.add('error');
//       return false;
//     }
//   })
// }




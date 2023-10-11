const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signInBtnLink.addEventListener('click', () => { wrapper.classList.toggle('active'); });

signUpBtnLink.addEventListener('click', () => { wrapper.classList.toggle('active'); });

function toggleForm() {
    var formContainer = document.querySelector('.form-container');
    formContainer.classList.toggle('form-animate');

    var formHeader = formContainer.querySelector('h2');
    var submitButton = formContainer.querySelector('button[type="submit"]');
    var switchButton = formContainer.querySelector('.switch-btn button');

    if (formHeader.textContent === 'Register') {
        formHeader.textContent = 'Login';
        submitButton.textContent = 'Login';
        switchButton.textContent = 'Switch to Register';
    } else {
        formHeader.textContent = 'Register';
        submitButton.textContent = 'Register';
        switchButton.textContent = 'Switch to Login';
    }
}
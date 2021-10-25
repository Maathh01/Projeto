const init = ()=>{

    const validateEmail = (event) =>{
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.;:\s@\"]+)*)|(\".+\"))@(([^<>()[\\.;:\s@\"]+\.)+[^<>()[\]\.;:\s@\"]{2,})$/i;
        const emailTest = regex.test(input.value);

        if(!emailTest){
            submitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error');
        }
    }

    const validatePassword = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 8){
            submitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error');
        }
    }

    const validateCpf = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 14){
            submitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error');
        }
    }

    const validateUser = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 5){
            submitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error');
        }
    }

    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.cadastro_submit');
    const inputCpf = document.querySelector('input[type="cpf"]');
    const inputUser = document.querySelector('input[type="name"]');
    

    inputEmail.addEventListener('input', validateEmail);
    inputPassword.addEventListener('input', validatePassword);
    inputCpf.addEventListener('input', validateCpf);
    inputUser.addEventListener('input', validateUser);

    const errorHandler = () => {
        submitButton.classList.remove('success');
        submitButton.classList.add('error');
        submitButton.textContent = "Cadastro inválido!"
    }

    const successHandler = () => {
        submitButton.classList.remove('error');
        submitButton.classList.add('success');
        submitButton.textContent = "Cadastro efetuado!"
    }

    if(submitButton){
        submitButton.addEventListener('click', (event)=>{
            event.preventDefault();

            submitButton.textContent = "...Loading";

            fetch('https://reqres.in/api/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then((response) => {
                if (response.status !== 200){
                    return errorHandler();
                }
                successHandler();
            }).catch(() => {
                errorHandler();
            })
        })
    }
}

window.onload = init;
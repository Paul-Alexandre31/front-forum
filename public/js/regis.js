console.log('test1')
document.addEventListener("DOMContentLoaded", () => {

    let formRegister = document.getElementById('register')

    console.log(formRegister)

    formRegister.addEventListener("submit", (e) => {
        e.preventDefault()

        console.log(document.getElementById("username").value)
        console.log(document.getElementById("email").value)
        console.log(document.getElementById("repeatEmail").value)
        console.log(document.getElementById("password").value)
        console.log(document.getElementById("repeatPassword").value)


        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:1000/register", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(JSON.stringify({
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                repeatEmail: document.getElementById("repeatEmail").value,
                password: document.getElementById("password").value,
                repeatPassword: document.getElementById("repeatPassword").value,

            }),
        );
        let response = xhr.response

    })
})
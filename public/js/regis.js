
document.addEventListener("DOMContentLoaded", () => {

    let formLogin = document.getElementById('form-login')

    console.log(formLogin)

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault()

        console.log(document.getElementById("username").value)
        console.log(document.getElementById("email").value)
        console.log(document.getElementById("repeat_email").value)
        console.log(document.getElementById("password").value)
        console.log(document.getElementById("repeat_password").value)



        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:1000/connect", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(JSON.stringify({
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                repeat_email: document.getElementById("repeat_email").value,
                password: document.getElementById("password").value,
                repeat_password: document.getElementById("repeat_password").value,

            }),
        );
        let response = xhr.response

    })
})
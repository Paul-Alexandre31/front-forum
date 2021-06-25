

document.addEventListener("DOMContentLoaded", () => {

    let formLogin = document.getElementById('form-login')

    console.log(formLogin)

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault()

        console.log(document.getElementById("email").value)
        console.log(document.getElementById("password").value)

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:1000/connect", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(JSON.stringify({
                username: document.getElementById("email").value,
                password: document.getElementById("password").value
            }),
        );
        let response = xhr.response

    })
})
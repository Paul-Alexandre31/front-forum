

document.addEventListener("DOMContentLoaded", () => {

    let formLogin = document.getElementById('login')

    console.log(formLogin)

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault()

        console.log(document.getElementById("username").value)
        console.log(document.getElementById("password").value)

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:1000/login", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value
            }),
        );
        let response = xhr.response

    })
})
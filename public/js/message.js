

document.addEventListener("DOMContentLoaded", () => {

    let formLogin = document.getElementById('mess')

    console.log(formLogin)

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault()

        console.log(document.getElementById("message").value)

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:1000/message", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(JSON.stringify({
                message: document.getElementById("message").value,
            }),
        );
        let response = xhr.response

    })
})
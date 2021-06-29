console.log("message 213")

document.addEventListener("DOMContentLoaded", () => {

    let formMessage = document.getElementById('formMessage')

    console.log(formMessage)

    formMessage.addEventListener("submit", (e) => {
        e.preventDefault()

        // console.log(document.getElementById("message").value)
/*
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:1000/message", true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(JSON.stringify({
                message: document.getElementById("body").value,
            }),
        );*/
        console.log(document.getElementById("body").value)

        fetch("http://localhost:1000/message", {
            body: JSON.stringify({
                 body: document.getElementById("body").value,
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })

    })
})
document.addEventListener('DOMContentLoaded', (event) => {
    // event.preventDefault()
    // document.querySelector('.btn').addEventListener('click', () => {
    //     alert("ХУЙ")
    // })

    // const send = document.querySelector('.send')
    // const login = document.querySelector('.login')
    // const password = document.querySelector('.password')

    // send.addEventListener('click', () => {
    //     console.warn(login.value)
    //     console.warn(password.value)
    // })

    fetch('https://github.com/YuriTitko/dfhgdfjkgjkdfgh/blob/main/data.json')
      .then(response => response.json())
      .then(json => console.log(json))

})
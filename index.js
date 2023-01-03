const createContact = () => {
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value

    console.log(firstName, lastName, email, phone)

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 
                'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            firstName, lastName, email, phone
        })
    }

    fetch("http://localhost:3000/contact", options)
    .then(res => console.log(res))
    .catch((error) => {
        console.error('Error:', error);
      });
}
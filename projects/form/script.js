const form = function() {

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const url = document.getElementById("url").value;
    const birthday = document.getElementById("birthday").value;

    const currentDate = new Date();
    const birthDate = new Date(birthday);
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    const person = {
        fname: fname,
        lname: lname,
        email: email,
        tel: tel,
        website: url,
        birthday: birthday,
        age: age,
        fullName: function() {
            return `${fname} ${lname}`
        }
    };

    console.log(person);

    document.getElementById('data').innerHTML = 
    `
    <h1>Full Name:</h1>
    <p>${person.fullName()}</p>
    <h1>Email:</h1>
    <p>${email}</p>
    <h1>Phone:</h1>
    <p>${tel}</p>
    <h1>Website:</h1>
    <a href="${url}">${url}</a>
    <h1>Birthday:</h1>
    <p>${birthday}</p>
    <h1>Age:</h1>
    <p>${age}</p>
    `;
}
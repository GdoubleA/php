
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surName;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
    document.querySelector('#middleNameOutput').innerText = initPerson.middleName;
    document.querySelector('#profOutput').innerText = initPerson.prof;
};

document.querySelector('#deletePersonData').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = "нажмите 'Cгенерировать'";
    document.getElementById('surnameOutput').innerText = "Очищено";
    document.getElementById('middleNameOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('profOutput').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
})

document.querySelector('#btnRetry').addEventListener('click', function () {
    return window.onload();
})
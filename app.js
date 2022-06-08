const retrieveTextBtn = document.getElementById('retrieve-text');
const retrieveJsonBtn = document.getElementById('retrieve-json');
const retrieveApiBtn = document.getElementById('retrieve-api');
const postApiBtn = document.getElementById('post-api');

retrieveTextBtn.addEventListener('click', retrieveText);
retrieveJsonBtn.addEventListener('click', retrieveJson);
retrieveApiBtn.addEventListener('click', retrieveApi);
postApiBtn.addEventListener('click', postApi);

function retrieveText(){
    fetch('./data.txt')
        .then(function(response){
            // throw  new Error("Something went wrong.")
            return response.text();
        })
        .then(function(data){
            console.log(data);

            const output = document.createElement('ul');

            output.innerHTML = data;

            document.body.appendChild(output);
        })
        .catch(function(e){
            console.log(e);
        })
}

function retrieveJson(){
    fetch('./employees.json')
        .then(function(response){
            // throw  new Error("Something went wrong.")
            return response.json();
        })
        .then(function(data){
            console.log(data);

            const output = document.createElement('ul');

            data.forEach(function(employee){
                output.innerHTML += `
                    <li>Name: ${employee.name} Id: ${employee.id}</li>
                `
            });

            document.body.appendChild(output);
        })
        .catch(function(e){
            console.log(e);
        })
}

function retrieveApi(){
    fetch('https://dummy.restapiexample.com/api/v1/employees')
        .then(function(response){
            // throw  new Error("Something went wrong.")
            return response.json();
        })
        .then(function(response){
            console.log(response.data);

            const output = document.createElement('ul');

            response.data.forEach(function(employee){
                output.innerHTML += `
                    <li>Name: ${employee.employee_name} Id: ${employee.id}</li>
                `
            });

            document.body.appendChild(output);
        })
        .catch(function(e){
            console.log(e);
        })
}

function postApi(){
    const employee = {
        name: 'Phil',
        age: 20,
        salary: 2000
    }

    fetch('https://dummy.restapiexample.com/api/v1/create',{
        method: 'POST',
        body: JSON.stringify(employee),
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    })
}
let HTMLString = "";
function fetchEmployee(){
    fetch("http://localhost:8088/employees?_expand=department&_expand=computer", {})
    .then(response => response.json())
    .then((parsedResponse) => {
        parsedResponse.forEach((employee) => {
            console.log(employee.departments)
            document.querySelector("#employee-information").innerHTML += `<article class="employee">
            <header class="employee__name">
                <h1>${employee.name}</h1>
            </header>
            <section class="employee__department">
                Works in the ${employee.department.name} department
            </section>
            <section class="employee__computer">
                Currently using the ${employee.computer.name} computer.
            </section>
        </article>`
        console.log(HTMLString);
        })
    })
    }

    fetchEmployee();

// const employeeString = fetchEmployee();
// console.log(employeeString);
// document.querySelector("#employee-information").innerHTML = fetchEmployee();

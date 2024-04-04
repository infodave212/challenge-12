

//WHEN I choose to view all departments
//THEN I am presented with a formatted table showing department names and department ids
//WHEN I choose to view all roles
//THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
//WHEN I choose to view all employees
//THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
//WHEN I choose to add a department
//THEN I am prompted to enter the name of the department and that department is added to the database
//WHEN I choose to add a role
//THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
//WHEN I choose to add an employee
//THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
//WHEN I choose to update an employee role
//THEN I am prompted to select an employee to update and their new role and this information is updated in the database

const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'Favor@24',
        database: 'employee_traker'
    },
    console.log(`Connected to the classlist_db database.`)
);
db.connect(() => {
    start()
})
function start() {

    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: "list",
                message: "what would you like to do?",
                name: "options",
                choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]

            }
        ])
        .then((answers) => {
            // Use user feedback for... whatever!!
            if (answers.options === "view all departments") {
                viewDepartment()
            }
            if (answers.options === "view all roles") {
                viewRole()
            }

            if (answers.options === "view all employees") {
                viewEmployee()
            }
            if (answers.options === "add a department") {
                addAdepartment()
            }
            if (answers.options === "add a role") {
                addArole()
            }
            if (answers.options === "add an employee") {
                addAnemployee()
            }
            if (answers.options === "update an employee role") {
                updateanemployeerole()
            }

        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

}
function viewDepartment() {
    db.query("select * from department", (err, data) => {
        console.table(data)
        start()
    })
}
function viewRole() {
    db.query("select * from role", (err, data) => {
        console.table(data)
        start()
    })

}
function viewEmployee() {
    db.query("select * from employee", (err, data) => {
        console.table(data)
        start()
    })
}
function addAdepartment() {
    inquirer.prompt([{
        type: "input",
        message: "enter a new department",
        name: "department",
    }
    ])
        .then(answers => {
            db.query("insert into department(name)values(?)", [answers.department], (err, data) => {
                viewDepartment()
            })
        })

}
function addArole() {
    inquirer.prompt([{
        type: "input",
        message: "what is the new title?",
        name: "title"
    }, {
        type: "input",
        message: "what is the new salary?",
        name: "salary"
    }, {
        type: "input",
        message: "what is the new department id?",
        name: "department_id"
    }])
        .then(response => {
            db.query("insert into role (title,salary,department_id)values(?,?,?)", [response.title, response.salary, response.department_id], (err, data) => {
                viewRole()
            })
        })

}
function addAnemployee() {
    inquirer.prompt([{
        type: "input",
        message: "what is the new employee first name?",
        name: "first_name"
    }, {
        type: "input",
        message: "what is the new employee last name?",
        name: "last_name"
    }, {
        type: "input",
        message: "what is the new employee role id?",
        name: "role_id"
    }, {
        type: "input",
        message: "what is the new manager id?",
        name: "manager_id"
    }])
        .then(response => {
            db.query("insert into employee(first_name,last_name,role_id,manager_id)values(?,?,?,?)", [response.first_name, response.last_name, response.role_id, response.manager_id], (err, data) => {
                viewEmployee()
            })
        })
    }
    function updateanemployeerole(){
        inquirer.prompt([{
            type:"input",
            message:"what is the employee id that you want to update the role?",
            name:"employee_id"
        },{
            type:"input",
            message:"what is new employee role id that you want to update the role",
            name:"role_id"  
        }])
        .then(response =>{
            db.query("update employee set role_id=? where id=?",[response.role_id,response.employee_id],(err,data)=>{
                viewEmployee()
            })
        }
            
        )
    }
       

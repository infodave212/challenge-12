INSERT INTO department (name)
VALUES ("sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");
INSERT INTO role (title,salary, department_id)
VALUES ("Sales lead",100000,1),
       ("Saleperson",80000,1),
       ("Lead Engineer",150000,2),
       ("Software Engineer",120000,2),
       ("Account Manager",160000,3),
       ("Accountant",125000,3),
       ("Legal Team Lead", 250000,4),
       ("Lawyer", 190000,4);

INSERT INTO employee(first_name,last_name,role_id)
VALUES ("John","Doe",1),
       ("Mike","Chan",2),
       ("Ashley","Rodriguez",3),
       ("Kevin","Tupik",4),
       ("Kunal","Singh",5),
       ("Malia","Brown",6),
       ("Sarah","Lourd",7),
       ("Tom","Allen",8);
UPDATE EMPLOYEE SET manager_id =1 Where id = 2;
UPDATE EMPLOYEE SET manager_id =3 where id =4;
UPDATE EMPLOYEE SET manager_id = 5 where id =6;
UPDATE EMPLOYEE SET manager_id = 7 where id =8;





     
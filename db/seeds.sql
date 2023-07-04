INSERT INTO department (id, name) VALUES (1, 'Admin');
INSERT INTO department (id, name) VALUES (2, 'HR');
INSERT INTO department (id, name) VALUES (3, 'Finance');
INSERT INTO department (id, name) VALUES (4, 'Coperate');

INSERT INTO role (id, title, salary, department_id) VALUES (1, 'Lead Administrator', 31000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (2, 'Resource Manager', 40000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (3, 'Accountant', 50000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (4, 'CEO', 90000, 4);
INSERT INTO role (id, title, salary, department_id) VALUES (5, 'Customer Service', 26000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (6, 'Vice President', 69000, 4);
INSERT INTO role (id, title, salary, department_id) VALUES (7, 'Counseller', 41000, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'Garfeild', 'Cat', 1, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Paris', 'Hilton', 5, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'John', 'Cena', 1, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, 'Sarah', 'Jane', 1, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'Jungkook', 'Jeon', 4, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'Maryam', '', 3, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, 'Bob', 'TheBuilder', 1, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, 'Harry', 'Potter', 1, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (9, 'Voldermort', 'Smith', 1, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (10, 'Jisoo', 'Kim', 6, NULL);

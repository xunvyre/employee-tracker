DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS department;

CREATE TABLE departments
(
    id INTEGER PRIMARY KEY NOT NULL,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles
(
    id INTEGER PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    management BOOLEAN NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
);

CREATE TABLE employees
(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(30) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employees(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
);
INSERT INTO departments (department_id, department_title)
VALUES
    (001, 'Engineering'),
    (002, 'Customer Service'),
    (003, 'Finance'),
    (004, 'Marketing');

INSERT INTO roles (role_id, role_title, salary, department_id, management)
VALUES
    (011, 'Software Engineer', 75000, 001, 0),
    (022, 'Engineering Team Lead', 100000, 001, 1),
    (033, 'Customer Service Agent', 32000, 002, 0),
    (044, 'Service Team Lead', 100000, 002, 1),
    (055, 'Accountant', 50000, 003, 0),
    (066, 'Financial Manager', 100000, 003, 1),
    (077, 'Salesperson', 32000, 004, 0),
    (088, 'Graphic Designer', 32000, 004, 0),
    (099, 'Marketing Director', 60000, 004, 1);

INSERT INTO employees (last_name, first_name, role_id, manager_id)
VALUES
    ('G. Pig', 'Meatloaf', 022, null),
    ('Squash', 'Butternut', 011, 1),
    ('Pie', 'Sweetie', 044, null),
    ('Soup', 'Miso', 033, 3),
    ('Nugget', 'Chicken', 033, 3),
    ('Puff', 'Cream', 066, null),
    ('Roll', 'Sushi', 055, 6),
    ('Wigglesworth', 'Taimi', 099, null),
    ('Wigglesworth', 'Dumpling', 077, 8),
    ('Bean', 'Vanilla', 088, 8),
    ('Bar', 'Hershey', 077, 8),
    ('Pudding', 'Tapioca', 011, 1),
    ('Plum', 'Sugar', 033, 3);
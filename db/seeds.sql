INSERT INTO departments (id, name)
VALUES
    (001, 'Engineering'),
    (002, 'Customer Service'),
    (003, 'Finance'),
    (004, 'Marketing');

INSERT INTO roles (id, title, salary, department_id, management)
VALUES
    (011, 'Software Engineer', 75000, 001, 0),
    (022, 'Engineering Team Lead', 100000, 001, 1),
    (033, 'Customer Service Agent', 32000, 002),
    (044, 'Service Team Lead', 100000, 002, 1),
    (055, 'Accountant', 50000, 003, 0),
    (066, 'Financial Manager', 100000, 003, 1),
    (077, 'Salesperson', 32000, 004, 0),
    (088, 'Graphic Designer', 32000, 004, 0),
    (099, 'Marketing Director', 60000, 004, 1);

INSERT INTO employees (last_name, first_name, role_id, manager_id)
VALUES
    ('G. Pig', 'Meatloaf', 022, null),
    ('Squash', 'Butternut', 011, 111),
    ('Pie', 'Sweetie', 044, null),
    ('Soup', 'Miso', 033, 333),
    ('Nugget', 'Chicken', 033, 333),
    ('Puff', 'Cream', 066, null),
    ('Roll', 'Sushi', 055, 666),
    ('Wigglesworth', 'Taimi', 099, null),
    ('Wigglesworth', 'Dumpling', 077, 888),
    ('Bean', 'Vanilla', 088, 888),
    ('Bar', 'Hershey', 077, 888),
    ('Pudding', 'Tapioca', 011, 111),
    ('Plum', 'Sugar', 033, 333);
--liquibase formatted sql

--changeset crewsakan:1
CREATE TABLE Merchants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION
);

CREATE TABLE Menus (
    id SERIAL PRIMARY KEY,
    merchant_id INT REFERENCES Merchants(id),
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price DOUBLE PRECISION
);

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY,
    menu_id INT REFERENCES Menus(id),
    user_id VARCHAR(255),
    optional VARCHAR(255),
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    order_datetime TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Wishlists (
    id SERIAL PRIMARY KEY,
    merchant_id INT REFERENCES Merchants(id),
    name VARCHAR(255) NOT NULL,
    recipes TEXT,
    steps TEXT
);

--changeset crewsakan:2
INSERT INTO merchants (id, name, lat, lng) VALUES (1, 'Warung mak ijah', 12.3, 3.21);
INSERT INTO merchants (id, name, lat, lng) VALUES (2, 'Merchant 1', 12.34, 56.78);
INSERT INTO merchants (id, name, lat, lng) VALUES (3, 'Merchant 2', 13.45, 57.89);
INSERT INTO merchants (id, name, lat, lng) VALUES (4, 'Merchant 3', 14.56, 58.9);
INSERT INTO merchants (id, name, lat, lng) VALUES (5, 'Merchant 4', 15.67, 59.01);
INSERT INTO merchants (id, name, lat, lng) VALUES (6, 'Merchant 5', 16.78, 60.12);
INSERT INTO merchants (id, name, lat, lng) VALUES (7, 'Merchant 6', 17.89, 61.23);
INSERT INTO merchants (id, name, lat, lng) VALUES (8, 'Merchant 7', 18.9, 62.34);
INSERT INTO merchants (id, name, lat, lng) VALUES (9, 'Merchant 8', 19.01, 63.45);
INSERT INTO merchants (id, name, lat, lng) VALUES (10, 'Merchant 9', 20.12, 64.56);
INSERT INTO merchants (id, name, lat, lng) VALUES (11, 'Merchant 10', 21.23, 65.67);
INSERT INTO merchants (id, name, lat, lng) VALUES (12, 'Amazing Merchant', 12.345678, 98.765432);

INSERT INTO menus (id, merchant_id, name, description, price) VALUES (1, 1, 'Beef Burger', 'A juicy beef burger with lettuce, tomato, and cheese.', 8.99);
INSERT INTO menus (id, merchant_id, name, description, price) VALUES (2, 2, 'Chicken Sandwich', 'A grilled chicken sandwich with mayonnaise and pickles.', 7.49);
INSERT INTO menus (id, merchant_id, name, description, price) VALUES (3, 3, 'Veggie Pizza', 'A delicious veggie pizza with bell peppers, onions, and olives.', 9.99);
INSERT INTO menus (id, merchant_id, name, description, price) VALUES (4, 4, 'Pasta Carbonara', 'Creamy pasta carbonara with bacon and parmesan cheese.', 11.49);
INSERT INTO menus (id, merchant_id, name, description, price) VALUES (5, 5, 'Caesar Salad', 'A classic Caesar salad with croutons and Caesar dressing.', 6.99);
INSERT INTO menus (id, merchant_id, name, description, price) VALUES (6, 6, 'Sushi Platter', 'An assorted sushi platter with salmon, tuna, and avocado rolls.', 14.99);
INSERT INTO menus (id, merchant_id, name, description, price) VALUES (7, 7, 'Taco Combo', 'Three soft tacos with your choice of beef, chicken, or veggie.', 10.49);
INSERT INTO menus (id, merchant_id, name, description, price) VALUES (8, 8, 'Steak Dinner', 'A tender steak dinner with mashed potatoes and green beans.', 19.99);
INSERT INTO menus (id, merchant_id, name, description, price) VALUES (9, 9, 'Fish and Chips', 'Crispy fish and chips served with tartar sauce.', 12.49);
INSERT INTO menus (id, merchant_id, name, description, price) VALUES (10, 10, 'Pad Thai', 'Traditional Pad Thai with shrimp, peanuts, and bean sprouts.', 13.99);
INSERT INTO menus (id, merchant_id, name, description, price) VALUES (11, 1, 'Nasi Goreng', 'Nasi goreng spesial', 15000);
INSERT INTO menus (id, merchant_id, name, description, price) VALUES (12, 1, 'Nasi Goreng', 'Nasi goreng spesial', 15000);
INSERT INTO menus (id, merchant_id, name, description, price) VALUES (13, 2, 'Nasi Goreng', 'Nasi goreng spesial', 15000);

INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (2, 4, 'user_324', 'spicy', 12.695959, 19.628821, '2024-07-22 23:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (3, 1, 'user_342', 'spicy', 11.127538, 16.926263, '2024-07-22 22:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (4, 10, 'user_847', 'spicy', 7.85711, 14.306676, '2024-07-22 21:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (5, 2, 'user_282', 'spicy', 5.948553, 12.385519, '2024-07-22 20:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (6, 1, 'user_572', 'spicy', 8.965123, 12.231539, '2024-07-22 19:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (7, 9, 'user_654', 'spicy', 12.084478, 18.666815, '2024-07-22 18:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (8, 9, 'user_758', 'spicy', 10.442785, 13.599772, '2024-07-22 17:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (9, 1, 'user_401', 'spicy', 9.630405, 15.233459, '2024-07-22 16:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (10, 8, 'user_985', 'spicy', 10.544886, 13.672924, '2024-07-22 15:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (11, 3, 'user_88', 'spicy', 6.613706, 16.579628, '2024-07-22 14:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (12, 1, 'user_462', 'spicy', 14.21306, 11.548297, '2024-07-23 23:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (13, 1, 'user_70', 'spicy', 8.002127, 10.546578, '2024-07-23 22:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (14, 6, 'user_762', 'spicy', 8.013333, 11.720529, '2024-07-23 21:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (15, 8, 'user_289', 'spicy', 7.480246, 12.416105, '2024-07-23 20:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (16, 3, 'user_451', 'spicy', 13.704327, 13.225018, '2024-07-23 19:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (17, 1, 'user_730', 'spicy', 9.214487, 12.469339, '2024-07-23 18:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (18, 8, 'user_387', 'spicy', 11.369474, 12.645585, '2024-07-23 17:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (19, 8, 'user_798', 'spicy', 12.127543, 11.102205, '2024-07-23 16:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (20, 7, 'user_799', 'spicy', 11.608601, 18.33345, '2024-07-23 15:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (21, 4, 'user_70', 'spicy', 10.035625, 18.979371, '2024-07-23 14:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (22, 4, 'user_408', 'spicy', 8.75799, 15.137679, '2024-07-24 23:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (23, 4, 'user_599', 'spicy', 14.811634, 12.036927, '2024-07-24 22:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (24, 5, 'user_716', 'spicy', 6.869206, 15.629407, '2024-07-24 21:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (25, 1, 'user_708', 'spicy', 14.772337, 12.161079, '2024-07-24 20:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (26, 7, 'user_726', 'spicy', 13.333447, 13.589342, '2024-07-24 19:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (27, 4, 'user_219', 'spicy', 10.435916, 14.229009, '2024-07-24 18:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (28, 6, 'user_591', 'spicy', 13.278186, 10.123718, '2024-07-24 17:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (29, 7, 'user_266', 'spicy', 7.470411, 15.774307, '2024-07-24 16:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (30, 1, 'user_359', 'spicy', 13.220376, 12.665875, '2024-07-24 15:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (31, 6, 'user_308', 'spicy', 14.731052, 13.31637, '2024-07-24 14:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (32, 6, 'user_871', 'spicy', 12.477712, 17.649125, '2024-07-25 23:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (33, 7, 'user_719', 'spicy', 11.173849, 15.580582, '2024-07-25 22:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (34, 7, 'user_948', 'spicy', 5.412477, 16.179099, '2024-07-25 21:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (35, 7, 'user_694', 'spicy', 8.899147, 12.69528, '2024-07-25 20:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (36, 9, 'user_779', 'spicy', 14.094368, 15.88019, '2024-07-25 19:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (37, 1, 'user_694', 'spicy', 5.822674, 14.61864, '2024-07-25 18:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (38, 4, 'user_589', 'spicy', 12.121509, 18.137764, '2024-07-25 17:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (39, 1, 'user_470', 'spicy', 8.92009, 13.955969, '2024-07-25 16:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (40, 8, 'user_297', 'spicy', 9.413539, 11.421948, '2024-07-25 15:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (41, 3, 'user_800', 'spicy', 10.121679, 19.63828, '2024-07-25 14:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (42, 5, 'user_204', 'spicy', 8.871951, 13.282015, '2024-07-26 23:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (43, 9, 'user_68', 'spicy', 12.012153, 14.213053, '2024-07-26 22:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (44, 4, 'user_203', 'spicy', 11.822131, 17.851815, '2024-07-26 21:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (45, 5, 'user_229', 'spicy', 8.169775, 18.170082, '2024-07-26 20:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (46, 4, 'user_708', 'spicy', 8.410543, 18.161073, '2024-07-26 19:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (47, 10, 'user_57', 'spicy', 8.266158, 13.648917, '2024-07-26 18:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (48, 1, 'user_958', 'spicy', 11.28386, 18.486754, '2024-07-26 17:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (49, 2, 'user_349', 'spicy', 7.209905, 19.72224, '2024-07-26 16:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (50, 10, 'user_908', 'spicy', 6.160594, 13.024552, '2024-07-26 15:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (51, 9, 'user_244', 'spicy', 11.156619, 15.353127, '2024-07-26 14:18:28.13877');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (52, 1, '1', 'no chili', 1, 1, '2024-07-28 00:44:19.03537');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (53, 1, '1', 'no chili', 1, 1, '2024-07-28 00:45:04.405618');
INSERT INTO orders (id, menu_id, user_id, optional, lat, lng, order_datetime) VALUES (54, 1, '1', 'no chili', 1, 1, '2024-07-28 02:56:53.837487');

INSERT INTO wishlists (id, merchant_id, name, recipes, steps) VALUES (5, 1, 'nasi goreng', 'nasi', 'digoreng');
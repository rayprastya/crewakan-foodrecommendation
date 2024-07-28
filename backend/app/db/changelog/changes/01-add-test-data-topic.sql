--liquibase formatted sql

--changeset rayprastya:3
INSERT INTO Topic (Name, Description) Values ('Test', 'This is a test topic');
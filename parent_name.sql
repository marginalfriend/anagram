-- PostgreSQL

CREATE TABLE names (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    parent_id INT,
	-- Referencing to this table itself
    FOREIGN KEY (parent_id) REFERENCES names(id)
);

INSERT INTO names (name, parent_id) VALUES ('Zaki', 2);
INSERT INTO names (name, parent_id) VALUES ('Ilham', NULL);
INSERT INTO names (name, parent_id) VALUES ('Irwan', 2);
INSERT INTO names (name, parent_id) VALUES ('Arka', 3);

CREATE VIEW names_w_parent_name AS
SELECT
    a.id,
    a.name,
    b.name AS parent_name
FROM
    names a
LEFT JOIN
    names b
ON
    a.parent_id = b.id;

SELECT * FROM names_w_parent_name;
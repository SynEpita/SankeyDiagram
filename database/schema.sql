CREATE TABLE point (
    target integer[],
    weight_target integer[],
    id SERIAL NOT NULL,
    name character varying(500) NOT NULL,
    PRIMARY KEY (id)
);

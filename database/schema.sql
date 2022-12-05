CREATE TABLE point (
    target integer[],
    weight_target integer[] NOT NULL,
    id SERIAL NOT NULL,
    name character varying(500) NOT NULL,
    PRIMARY KEY (id),
    id_diagram integer NOT NULL
);

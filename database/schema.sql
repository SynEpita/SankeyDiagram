CREATE TABLE point (
    value integer NOT NULL,
    target integer[],
    weight_target integer[] NOT NULL,
    id SERIAL NOT NULL,
    name character varying(500) NOT NULL,
    id_diagram integer NOT NULL
);

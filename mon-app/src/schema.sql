CREATE TABLE public.point (
    "Valeur" integer NOT NULL,
    "Target" integer[],
    "Poids Target" bigint[] NOT NULL,
    id SERIAL NOT NULL,
    "Nom" character varying(500) NOT NULL
);



ALTER TABLE ONLY public.point
    ADD CONSTRAINT point_pkey PRIMARY KEY (id);
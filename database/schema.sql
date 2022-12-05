
CREATE TABLE connection (
    id_diagram SERIAL NOT NULL,
    id_point integer NOT NULL
);



CREATE TABLE diagram (
    id integer NOT NULL,
    name character varying(500) NOT NULL
);



CREATE TABLE point (
    value integer NOT NULL,
    target integer[],
    weight_target bigint[] NOT NULL,
    id SERIAL NOT NULL,
    name character varying(500) NOT NULL
);

CREATE SEQUENCE point_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3592 (class 0 OID 0)
-- Dependencies: 209
-- Name: point_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE  point_id_seq OWNED BY  point.id;


--
-- TOC entry 3441 (class 2604 OID 16428)
-- Name: point id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY  point ALTER COLUMN id SET DEFAULT nextval(' point_id_seq'::regclass);


--
-- TOC entry 3445 (class 2606 OID 24711)
-- Name: diagram diagram_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY  diagram
    ADD CONSTRAINT diagram_pkey PRIMARY KEY (id);


--
-- TOC entry 3443 (class 2606 OID 16432)
-- Name: point point_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY  point
    ADD CONSTRAINT point_pkey PRIMARY KEY (id);


--
-- TOC entry 3446 (class 2606 OID 24715)
-- Name: connection connection.diagram; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY  connection
    ADD CONSTRAINT "connection.diagram" FOREIGN KEY (id_diagram) REFERENCES  diagram(id);


--
-- TOC entry 3447 (class 2606 OID 24720)
-- Name: connection connection.point; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY  connection
    ADD CONSTRAINT "connection.point" FOREIGN KEY (id_point) REFERENCES  point(id) NOT VALID;


-- Completed on 2022-12-05 11:47:46 CET

--
-- PostgreSQL database dump complete
--


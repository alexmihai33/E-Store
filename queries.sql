-- Table: public.product

-- DROP TABLE IF EXISTS public.product;

CREATE TABLE IF NOT EXISTS public.product
(
    id integer NOT NULL DEFAULT nextval('product_id_seq'::regclass),
    sku character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    name character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    description character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    unit_price numeric(13,2) DEFAULT NULL::numeric,
    image_url character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    active boolean DEFAULT true,
    units_in_stock integer,
    date_created date,
    last_updated date,
    category_id integer NOT NULL,
    CONSTRAINT product_pkey PRIMARY KEY (id),
    CONSTRAINT fk_category FOREIGN KEY (category_id)
        REFERENCES public.product_category (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.product
    OWNER to postgres;


-- Table: public.product_category

-- DROP TABLE IF EXISTS public.product_category;

CREATE TABLE IF NOT EXISTS public.product_category
(
    id integer NOT NULL DEFAULT nextval('product_category_id_seq'::regclass),
    category_name character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    CONSTRAINT product_category_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.product_category
    OWNER to postgres;

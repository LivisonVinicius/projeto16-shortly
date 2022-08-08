0ENCODINENCODINGSET client_encoding = 'UTF8';

.pgdg20.04 + 1
) 14.4 (Ubuntu 14.4 -1.pgdg20.04 + 1) 00lse STDSTRINGS STDSTRINGS(
    SET
        standard_conforming_strings = 'on';

false 00 SEARCHPATH SEARCHPATH8SELECT pg_catalog.set_config('search_path', '', false);

false 126216967projeto16 - shortlDATABASEhCREATE DATABASE "projeto16-shortly" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'pt_BR.UTF-8';

#DROP DATABASE "projeto16-shortly";
postgresfalse � 125916968urlTABLE � CREATE TABLE public.url (
    id integer NOT NULL,
    "userId" integer,
    "shortUrl" text NOT NULL,
    "fullUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);

DROP TABLE public.url;

publicheapostgresfalse � 125916975 url_id_seSEQUENCE � CREATE SEQUENCE public.url_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

! DROP SEQUENCE public.url_id_seq;

publipostgresfalse209 00 url_id_seqSEQUENCE OWNED BY9ALTER SEQUENCE public.url_id_seq OWNED BY public.url.id;

publipostgresfalse210 � 125916976usersTABLE � CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);

DROP TABLE public.users;

publicheapostgresfalse � 125916982 users_id_seSEQUENCE � CREATE SEQUENCE public.users_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

#DROP SEQUENCE public.users_id_seq;
00blipostgresfalse211 users_id_seqSEQUENCE OWNED BY = ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;

publipostgresfalse212m 260416983url idDEFAULT `ALTER TABLE ONLY public.url ALTER COLUMN id SET DEFAULT nextval('public.url_id_seq'::regclass);
5ALTER TABLE public.url ALTER COLUMN id DROP DEFAULT;
publipostgresfalse210209o
                         26041698users idDEFAULTdALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
7ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
016968urlgresfalse212211
TABLE DATA]COPY public.url (id, "userId", "shortUrl", "fullUrl", "visitCount", "createdAt") FROM stdin;
016976usersesfalse209
TABLE DATAGCOPY public.users (id, name, email, password, "createdAt") FROM stdin;
00blipostgresfalse211
url_id_seq
          SEQUENCE SET8SELECT pg_catalog.setval('public.url_id_seq', 4, true);
00blipostgresfalse210
  users_id_seq
              SEQUENCE SET:SELECT pg_catalog.setval('public.users_id_seq', 3, true);
publipostgresfalse212q
                      260616986
                               url url_pkey
CONSTRAINTJALTER TABLE ONLY public.url
    ADD CONSTRAINT url_pkey PRIMARY KEY (id);
6ALTER TABLE ONLY public.url DROP CONSTRAINT url_pkey;
publipostgresfalse209s
                      260616988users users_email_key
CONSTRAINTQALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
?ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
publipostgresfalse211u
                      260616990users users_pkey
CONSTRAINTNALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
:ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
publipostgresfalse211v
FK CONSTRAINTuALTER TABLE ONLY public.urlerId_fkey
    ADD CONSTRAINT "url_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);
?ALTER TABLE ONLY public.url DROP CONSTRAINT "url_userId_fkey";
PGDMP  &                     |            prueba    17.0    17.0 /    7           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            8           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            9           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            :           1262    16395    prueba    DATABASE     �   CREATE DATABASE prueba WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE prueba;
                     postgres    false            �            1259    16441    familia    TABLE     R   CREATE TABLE public.familia (
    id integer NOT NULL,
    jefefamilia integer
);
    DROP TABLE public.familia;
       public         heap r       postgres    false            �            1259    16440    familia_id_seq    SEQUENCE     �   CREATE SEQUENCE public.familia_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.familia_id_seq;
       public               postgres    false    224            ;           0    0    familia_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.familia_id_seq OWNED BY public.familia.id;
          public               postgres    false    223            �            1259    16448 
   habitantes    TABLE     �  CREATE TABLE public.habitantes (
    id integer NOT NULL,
    nombres character varying(100) NOT NULL,
    apellidos character varying(100) NOT NULL,
    cedula character varying(11) DEFAULT '0'::character varying,
    genero character varying(10),
    instruccion character varying(50),
    ocupacion character varying(50),
    fnacimiento character varying(50),
    centrovotacion character varying(50),
    sectortrabajo character varying(50),
    estatusvivienda character varying(50),
    correo character varying(100),
    direccionvivienda text,
    telefono character varying(15),
    idfamilia integer,
    parentesco character varying(50)
);
    DROP TABLE public.habitantes;
       public         heap r       postgres    false            �            1259    16447    habitantes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.habitantes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.habitantes_id_seq;
       public               postgres    false    226            <           0    0    habitantes_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.habitantes_id_seq OWNED BY public.habitantes.id;
          public               postgres    false    225            �            1259    16486 
   infosocial    TABLE       CREATE TABLE public.infosocial (
    idhabitante integer NOT NULL,
    granmisionvivienda character varying(20) DEFAULT 'no'::character varying,
    barrionuevobarriotricolor character varying(20) DEFAULT 'no'::character varying,
    beneficiadojefepatria character varying(20) DEFAULT 'no'::character varying,
    partohumanizado character varying(20) DEFAULT 'no'::character varying,
    semanasparto character varying(15) DEFAULT 'no'::character varying,
    fechaparto character varying(15),
    ivss character varying(30),
    lactancia character varying(20) DEFAULT 'no'::character varying,
    bajopeso character varying(20) DEFAULT 'no'::character varying,
    beneficiadoinn character varying(20) DEFAULT 'no'::character varying,
    chambajuvenil character varying(20) DEFAULT 'no'::character varying,
    amormayor character varying(20) DEFAULT 'no'::character varying,
    otrosbeneficios character varying(150) DEFAULT 'no'::character varying,
    registradoenpatria character varying(20) DEFAULT 'no'::character varying,
    personacondiscapacidad character varying(20) DEFAULT 'no'::character varying,
    tipodiscapacidad character varying(50),
    carnetconapdis character varying(20) DEFAULT 'no'::character varying,
    beneficiadojosegregoriohernandez character varying(20) DEFAULT 'no'::character varying,
    beneficiadovenapp character varying(20) DEFAULT 'no'::character varying,
    padecimientos character varying(100),
    medicinas character varying(100),
    patioproductivo character varying(20) DEFAULT 'no'::character varying,
    descripcionpatioproductivo text,
    habilidadesdestrezas character varying(100),
    mascotas character varying(10) DEFAULT 'no'::character varying,
    brigadistamsv character varying(100),
    liderdecalle character varying(100)
);
    DROP TABLE public.infosocial;
       public         heap r       postgres    false            �            1259    16404    roles    TABLE     g   CREATE TABLE public.roles (
    id integer NOT NULL,
    description character varying(50) NOT NULL
);
    DROP TABLE public.roles;
       public         heap r       postgres    false            �            1259    16403    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public               postgres    false    218            =           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public               postgres    false    217            �            1259    16423    securityquestions    TABLE       CREATE TABLE public.securityquestions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    q1 character varying(100) NOT NULL,
    q2 character varying(100) NOT NULL,
    r1 character varying(100) NOT NULL,
    r2 character varying(100) NOT NULL
);
 %   DROP TABLE public.securityquestions;
       public         heap r       postgres    false            �            1259    16422    securityquestions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.securityquestions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.securityquestions_id_seq;
       public               postgres    false    222            >           0    0    securityquestions_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.securityquestions_id_seq OWNED BY public.securityquestions.id;
          public               postgres    false    221            �            1259    16411    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    pw character varying(150) NOT NULL,
    rol_id integer DEFAULT 1 NOT NULL
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    16410    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    220            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    219            s           2604    16444 
   familia id    DEFAULT     h   ALTER TABLE ONLY public.familia ALTER COLUMN id SET DEFAULT nextval('public.familia_id_seq'::regclass);
 9   ALTER TABLE public.familia ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    224    223    224            t           2604    16451    habitantes id    DEFAULT     n   ALTER TABLE ONLY public.habitantes ALTER COLUMN id SET DEFAULT nextval('public.habitantes_id_seq'::regclass);
 <   ALTER TABLE public.habitantes ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    225    226    226            o           2604    16407    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218            r           2604    16426    securityquestions id    DEFAULT     |   ALTER TABLE ONLY public.securityquestions ALTER COLUMN id SET DEFAULT nextval('public.securityquestions_id_seq'::regclass);
 C   ALTER TABLE public.securityquestions ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    221    222    222            p           2604    16414    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220            1          0    16441    familia 
   TABLE DATA           2   COPY public.familia (id, jefefamilia) FROM stdin;
    public               postgres    false    224   �?       3          0    16448 
   habitantes 
   TABLE DATA           �   COPY public.habitantes (id, nombres, apellidos, cedula, genero, instruccion, ocupacion, fnacimiento, centrovotacion, sectortrabajo, estatusvivienda, correo, direccionvivienda, telefono, idfamilia, parentesco) FROM stdin;
    public               postgres    false    226   �?       4          0    16486 
   infosocial 
   TABLE DATA           �  COPY public.infosocial (idhabitante, granmisionvivienda, barrionuevobarriotricolor, beneficiadojefepatria, partohumanizado, semanasparto, fechaparto, ivss, lactancia, bajopeso, beneficiadoinn, chambajuvenil, amormayor, otrosbeneficios, registradoenpatria, personacondiscapacidad, tipodiscapacidad, carnetconapdis, beneficiadojosegregoriohernandez, beneficiadovenapp, padecimientos, medicinas, patioproductivo, descripcionpatioproductivo, habilidadesdestrezas, mascotas, brigadistamsv, liderdecalle) FROM stdin;
    public               postgres    false    227   A       +          0    16404    roles 
   TABLE DATA           0   COPY public.roles (id, description) FROM stdin;
    public               postgres    false    218   kA       /          0    16423    securityquestions 
   TABLE DATA           H   COPY public.securityquestions (id, user_id, q1, q2, r1, r2) FROM stdin;
    public               postgres    false    222   �A       -          0    16411    users 
   TABLE DATA           @   COPY public.users (id, username, email, pw, rol_id) FROM stdin;
    public               postgres    false    220   �A       @           0    0    familia_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.familia_id_seq', 35, true);
          public               postgres    false    223            A           0    0    habitantes_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.habitantes_id_seq', 56, true);
          public               postgres    false    225            B           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 2, true);
          public               postgres    false    217            C           0    0    securityquestions_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.securityquestions_id_seq', 1, true);
          public               postgres    false    221            D           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 23, true);
          public               postgres    false    219            �           2606    16446    familia familia_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.familia
    ADD CONSTRAINT familia_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.familia DROP CONSTRAINT familia_pkey;
       public                 postgres    false    224            �           2606    16456    habitantes habitantes_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.habitantes
    ADD CONSTRAINT habitantes_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.habitantes DROP CONSTRAINT habitantes_pkey;
       public                 postgres    false    226            �           2606    16532    infosocial infosocial_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.infosocial
    ADD CONSTRAINT infosocial_pkey PRIMARY KEY (idhabitante);
 D   ALTER TABLE ONLY public.infosocial DROP CONSTRAINT infosocial_pkey;
       public                 postgres    false    227            �           2606    16409    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public                 postgres    false    218            �           2606    16428 (   securityquestions securityquestions_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.securityquestions
    ADD CONSTRAINT securityquestions_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.securityquestions DROP CONSTRAINT securityquestions_pkey;
       public                 postgres    false    222            �           2606    16416    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    220            �           2606    16514     familia familia_jefefamilia_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.familia
    ADD CONSTRAINT familia_jefefamilia_fkey FOREIGN KEY (jefefamilia) REFERENCES public.habitantes(id) ON DELETE SET NULL;
 J   ALTER TABLE ONLY public.familia DROP CONSTRAINT familia_jefefamilia_fkey;
       public               postgres    false    4753    224    226            �           2606    16457 $   habitantes habitantes_idfamilia_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.habitantes
    ADD CONSTRAINT habitantes_idfamilia_fkey FOREIGN KEY (idfamilia) REFERENCES public.familia(id) ON DELETE SET NULL;
 N   ALTER TABLE ONLY public.habitantes DROP CONSTRAINT habitantes_idfamilia_fkey;
       public               postgres    false    4751    224    226            �           2606    16509 &   infosocial infosocial_idhabitante_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.infosocial
    ADD CONSTRAINT infosocial_idhabitante_fkey FOREIGN KEY (idhabitante) REFERENCES public.habitantes(id) ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.infosocial DROP CONSTRAINT infosocial_idhabitante_fkey;
       public               postgres    false    4753    226    227            �           2606    16435 0   securityquestions securityquestions_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.securityquestions
    ADD CONSTRAINT securityquestions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public.securityquestions DROP CONSTRAINT securityquestions_user_id_fkey;
       public               postgres    false    4747    220    222            �           2606    16417    users users_rol_id_fkey    FK CONSTRAINT     u   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_rol_id_fkey FOREIGN KEY (rol_id) REFERENCES public.roles(id);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT users_rol_id_fkey;
       public               postgres    false    218    4745    220            1      x������ � �      3   $  x�]��j�0E���Ēl��X1��c?��Fu�`�%�I��*iIKa``�̙3�����fR�mhzk�����׫X�#ֲ�T^@��SZժ�J!4&x�mQ�4
���se�N~�{Q�����@�p�73����P���	Ν��.֛�#��V�TEN��DH��*̛ԃ)������^=��f�M����p�61�h	ʽʲ��}��5�	��Z�dJ���c��u��������%��%��k9�Γfr����&+��Y{����ƌ�њE�����"�/j�p      4   L   x�31���?NN(��0
��B ��&e&rz�&�%r��D���C�`� ��	��������� ~�)�      +   '   x�3�tL����,.)JL�/�2�-.M,������� �	k      /      x������ � �      -   `   x�32�LL��̃�鹉�9z����*FI*�*i9��a��>)�~��.�����ɉ�U�a��.���!��E�YF�^�n�A���\1z\\\ o(9     
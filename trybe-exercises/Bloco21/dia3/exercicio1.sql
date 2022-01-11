DROP SCHEMA IF EXISTS zoologico;
CREATE SCHEMA zoologico;
USE zoologico;

CREATE TABLE gerentes(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE animais(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    sexo VARCHAR(50) NOT NULL,
	idade INT NOT NULL,
    localizacao VARCHAR(50) NOT NULL
);

CREATE TABLE cuidadores(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerentes (gerente_id)
);

CREATE TABLE cuidadores_e_animais(
	animal_id INT,
	cuidador_id INT,
	CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores (cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animais (animal_id)
);

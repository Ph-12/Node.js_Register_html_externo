--Create Tabelas Coletalixo

create table coletalixo.usuario
( 
usuario_id					serial primary key,  
usuario_cpf					varchar(11) not null,
usuario_nome				varchar(60) not null,
usuario_tipo				varchar(9) not null,
usuario_localizacao			varchar(60) not null,
usuario_senha				varchar(15) not null,
usuario_status				varchar(3) not null,
usuario_data_criacao		timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);


create table coletalixo.coletas
(
coletas_id					serial primary key,
empresa_id					int,
usuario_id					int,
material_id					int,
coletas_destino				varchar(100),
coletas_data				timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

create table coletalixo.empresa
( 
empresa_id					serial primary key,
empresa_cnpj				varchar(14) not null,
empresa_email				varchar(60) not null,
empresa_tipo				varchar(9) not null,
empresa_razaosocial			varchar(60) not null,
empresa_telefone			varchar(11) not null,
empresa_celular				varchar(11) not null,			
empresa_responsavel			varchar(60) not null,
empresa_endereco			varchar(60) not null,
empresa_senha				varchar(15) not null,
empresa_status				varchar(3) not null,
empresa_regdate				timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

create table coletalixo.material
( 
 material_id				serial primary key,
 material_categoria			varchar(60) not null,
 material_peso				varchar(60) not null,
 material_quantidade		varchar(10) not null,
 material_localizacao		varchar(60) not null,
 material_status			varchar(8) not null,
 material_data_criacao		timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--Altera as tabelas e correlaciona as tabelas (Chave Estrangeira)
--Vale resaltar que a tabela coletas e filha de todas as outras.

ALTER TABLE coletalixo.coletas
ADD  CONSTRAINT fk_usuario_id
FOREIGN KEY (usuario_id)
REFERENCES coletalixo.usuario (usuario_id);

ALTER TABLE coletalixo.coletas
ADD  CONSTRAINT fk_empresa_id
FOREIGN KEY (empresa_id)
REFERENCES coletalixo.empresa (empresa_id);

ALTER TABLE coletalixo.coletas
ADD  CONSTRAINT fk_material_id
FOREIGN KEY (material_id)
REFERENCES coletalixo.material (material_id);

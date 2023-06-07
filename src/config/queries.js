export const CREATE_TABLE_VITIMA = `
  create table if not exists vitima (
    id integer primary key,
    nome text not null,
    idade integer not null,
    genero text null
  )
`;

export const CREATE_TABLE_OCORRENCIA = `
    create table if not exists ocorrencia (
      id integer primary key,
      descricao text not null,
      endereco text not null,
      id_vitima integer not null,
      obito boolean not null,
      foreign key(id_vitima)
        references vitima(id)
    )
`;

export const INSERIR_VITIMA = `
  insert into vitima (id, nome, idade, genero) values (?, ?, ?, ?)
`;

export const INSERIR_OCORRENCIA = `
      insert into ocorrencia (id, descricao, endereco, id_vitima, obito) values (?, ?, ?, ?, ?)
`;

export const SELECT_DESAFIO_UM = `
         select * from vitima where idade >=20 and idade <=30
 `;

export const SELECT_DESAFIO_DOIS = `
  select * from ocorrencia inner join vitima on ocorrencia.id_vitima = vitima.id where vitima.genero = 'feminino' and ocorrencia.obito = true
`;

export const SELECT_DESAFIO_TRES = `
select vitima.*, ocorrencia.* from vitima inner join ocorrencia on vitima.id = ocorrencia.id_vitima where lower(ocorrencia.endereco) like lower(?)
 `;

export const TRUNCATE_VITIMA = `
        delete from vitima
`;

export const TRUNCATE_OCORRENCIA = `
        delete from ocorrencia
`;

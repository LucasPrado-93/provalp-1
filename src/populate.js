import { openDB } from "./config/db.js";
import {
  CREATE_TABLE_VITIMA,
  CREATE_TABLE_OCORRENCIA,
  INSERIR_VITIMA,
  INSERIR_OCORRENCIA,
  TRUNCATE_VITIMA,
  TRUNCATE_OCORRENCIA,
} from "./config/queries.js";

const lista_vitimas = [
  {
    id: 0,
    nome: "José da Silva",
    idade: 35,
    genero: "masculino",
  },
  {
    id: 1,
    nome: "Carolina Santos",
    idade: 27,
    genero: "feminino",
  },
  {
    id: 2,
    nome: "Ricardo Ferreira",
    idade: 42,
    genero: "masculino",
  },
  {
    id: 3,
    nome: "Amanda Oliveira",
    idade: 31,
    genero: "feminino",
  },
  {
    id: 4,
    nome: "Felipe Almeida",
    idade: 29,
    genero: "masculino",
  },
  {
    id: 5,
    nome: "Mariana Costa",
    idade: 24,
    genero: "feminino",
  },
  {
    id: 6,
    nome: "Lucas Martins",
    idade: 38,
    genero: "masculino",
  },
  {
    id: 7,
    nome: "Juliana Pereira",
    idade: 32,
    genero: "feminino",
  },
  {
    id: 8,
    nome: "André Sousa",
    idade: 45,
    genero: "masculino",
  },
  {
    id: 9,
    nome: "Isabella Mendes",
    idade: 26,
    genero: "feminino",
  },
  {
    id: 10,
    nome: "Pedro Rodrigues",
    idade: 39,
    genero: "masculino",
  },
  {
    id: 11,
    nome: "Leticia Nunes",
    idade: 28,
    genero: "feminino",
  },
];
const lista_ocorrencias = [
  {
    id: 0,
    descricao: "roubo",
    endereco: "Rua das Flores, 123",
    id_vitima: 0,
    obito: false,
  },
  {
    id: 1,
    descricao: "furto",
    endereco: "Avenida Central, 456",
    id_vitima: 1,
    obito: false,
  },
  {
    id: 2,
    descricao: "assassinato",
    endereco: "Travessa dos Sonhos, 789",
    id_vitima: 2,
    obito: true,
  },
  {
    id: 3,
    descricao: "homicídio",
    endereco: "Rua Principal, 1011",
    id_vitima: 3,
    obito: true,
  },
  {
    id: 4,
    descricao: "furto",
    endereco: "Avenida das Palmeiras, 1213",
    id_vitima: 4,
    obito: false,
  },
  {
    id: 5,
    descricao: "assalto",
    endereco: "Rua da Esperança, 1415",
    id_vitima: 5,
    obito: false,
  },
  {
    id: 6,
    descricao: "roubo",
    endereco: "Avenida dos Sonhos, 1617",
    id_vitima: 6,
    obito: false,
  },
  {
    id: 7,
    descricao: "homicídio",
    endereco: "Rua das Pedras, 1819",
    id_vitima: 7,
    obito: true,
  },
  {
    id: 8,
    descricao: "assassinato",
    endereco: "Avenida das Flores, 2021",
    id_vitima: 8,
    obito: true,
  },
  {
    id: 9,
    descricao: "furto",
    endereco: "Rua Central, 2223",
    id_vitima: 9,
    obito: false,
  },
  {
    id: 10,
    descricao: "roubo",
    endereco: "Avenida dos Sonhos, 2425",
    id_vitima: 10,
    obito: false,
  },
  {
    id: 11,
    descricao: "assalto",
    endereco: "Rua Principal, 2627",
    id_vitima: 11,
    obito: false,
  },
];
console.log("chegou aqui!");
(async () => {
  const db = await openDB();
  await db.exec(CREATE_TABLE_VITIMA);
  await db.exec(CREATE_TABLE_OCORRENCIA);

  await db.exec(TRUNCATE_VITIMA);

  await db.exec(TRUNCATE_OCORRENCIA);

  for (let i = 0; i < lista_vitimas.length; i++) {
    const { id, nome, idade, genero } = lista_vitimas[i];

    console.log({ id, nome, idade, genero });

    await db.run(INSERIR_VITIMA, id, nome, idade, genero);
    console.log(`vitima numero: #${i + 1} criada`);
  }

  for (let i = 0; i < lista_ocorrencias.length; i++) {
    const { id, descricao, endereco, id_vitima, obito } = lista_ocorrencias[i];
    console.log({ id, descricao, endereco, id_vitima, obito });

    await db.run(INSERIR_OCORRENCIA, id, descricao, endereco, id_vitima, obito);
    console.log(`ocorrencia numero: #${i + 1} criada`);
  }
})();

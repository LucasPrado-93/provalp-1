import { openDB } from "./config/db.js";
import {
  SELECT_DESAFIO_DOIS,
  SELECT_DESAFIO_UM,
  SELECT_DESAFIO_TRES,
} from "./config/queries.js";
(async () => {
  const db = await openDB();

  console.log("caiu aqui");

  let resultado1 = await db.all(SELECT_DESAFIO_UM);
  resultado1.map((e) => {
    console.log(e);
  });
  let resultado2 = await db.all(SELECT_DESAFIO_DOIS);
  resultado2.map((e) => {
    console.log(e);
  });
  let resultado3 = await db.all(SELECT_DESAFIO_TRES, "%cen%");
  console.log(resultado3);
})();

const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripción de la tarea por hacer",
};
const completado = {
  default: true,
  alias: "c",
  desc: "Mara como completado o pendiente la tarea",
};

const argv = require("yargs")
  .command("actualizar", "Actualiza el estado completado de una tarea", {
    descripcion,
    completado,
  })
  .command("crear", "Crear un elemento por hacer", { descripcion })
  .command("listar", "Listar un elemento por hacer")
  .command("borrar", "Borrar un elemento por hacer", { descripcion })
  .help().argv;

module.exports = {
  argv,
};

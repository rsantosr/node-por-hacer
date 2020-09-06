const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile(`database/data.json`, data, (err) => {
    if (err) throw new Error(`No se pudo grabar`, err);
  });
};

const cargarDB = () => {
  try {
    listadoPorHacer = require("../database/data.json");
    console.log(listadoPorHacer);
  } catch (error) {
    listadoPorHacer = [];
  }
};

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
};
const crear = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false,
  };

  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex((tarea) => {
    return tarea.descripcion === descripcion;
  });
  console.log(index);
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrar = (descripcion) => {
  cargarDB();
  let nuevoListado = listadoPorHacer.filter((tarea) => {
    return tarea.descripcion !== descripcion;
  });
  let index = nuevoListado.findIndex((tarea) => {
    return tarea.descripcion === descripcion;
  });
  if (index >= 0) {
    return false;
  } else {
    listadoPorHacer = nuevoListado;
    guardarDB();
    return true;
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar,
};

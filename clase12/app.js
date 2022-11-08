let autosImportados = require("./autos.js");

let persona1 = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 30000,
  capacidadDePagoTotal: 100000000,
};

let persona2 = {
  nombre: "Pepe",
  capacidadDePagoEnCuotas: 100,
  capacidadDePagoTotal: 100000000,
};

let concesionaria = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    let encontro;
    for (let i = 0; i < this.autos.length; i++) {
      let autoBuscado = this.autos[i];
      if (autoBuscado.patente == patente) {
        return autoBuscado;
      } else {
        encontro = null;
      }
    }
    return encontro;
  },
  venderAuto: function (patente) {
    let auto = this.buscarAuto(patente);
    if (auto !== null) {
      auto.vendido = true;
    }
  },
  autosParaLaVenta: function () {
    return this.autos.filter((item) => item.vendido == false);
  },
  autosNuevos: function () {
    return this.autosParaLaVenta().filter((item) => item.km < 100);
  },
  listaDeVentas: function () {
    let vendidos = this.autos.filter((item) => item.vendido == true);
    return vendidos.map((item) => item.precio);
  },
  totalDeVentas: function () {
    let totalVentas = this.listaDeVentas().reduce(function (acum, item) {
      return acum + item;
    }, 0);
    return totalVentas;
  },
  puedeComprar: function (auto, persona) {
    autoCuota = auto.precio / auto.cuotas;
    let condicion1 = auto.precio <= persona.capacidadDePagoTotal;
    let condicion2 =  autoCuota <= persona.capacidadDePagoEnCuotas;

    return (condicion1 && condicion2) 
  },
  autosQuePuedeComprar: function (persona) {
   //return this.puedeComprar(this.autos[1],persona1);
   return this.autosParaLaVenta().filter((item) => this.puedeComprar(item, persona))
  },
  autosQuePuedeComprar2: function (persona) {
    let self = this;
    let autos = this.autosParaLaVenta().filter(function (item) {
       return self.puedeComprar(item, persona)
    })
    return autos
   },
};

concesionaria.venderAuto('APL123');
concesionaria.venderAuto('JJK116');
console.log(concesionaria.autosQuePuedeComprar2(persona1));
//console.log(concesionaria.puedeComprar(concesionaria.autos[1],persona1));
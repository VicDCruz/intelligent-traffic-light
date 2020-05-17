//File: trafficlights/trafficlights.js
// 1 - Colección no pudo ser obtenida
// 2 - Error para encontrar un ID
// 3 - Error al guardar con un registro
// 4 - Error al guardar con varios registros
// 5 - Género no es correcto
// 6 - Llaves no corresponden
// 7 - Error al actualizar
// 8 - Error al eliminar

module.exports = function (app) {

  var TrafficlightCollection = require('../models/trafficlights');

  //GET - Return all trafficlights in the DB
  findAllTrafficlights = (req, res) => {
    TrafficlightCollection.find(function (err, trafficlights) {
      if (!err) {
        console.log('GET /trafficlights')
        res.send(trafficlights);
      } else {
        console.log('ERROR: ' + err);
        res.status(404).send('ERROR: ' + err);
      }
    });
  };

  //GET - Return a Trafficlight with specified ID
  findById = (req, res) => {
    TrafficlightCollection.findById(req.params.id, (err, trafficlight) => {
      if (!err) {
        console.log('GET /trafficlight/' + req.params.id);
        res.send(trafficlight);
      } else {
        console.log('ERROR: ' + err);
        res.status(404).send('ERROR: ' + err);
      }
    });
  };

  //POST - Insert a new Trafficlight in the DB
  addTrafficlight = (req, res) => {
    console.log('POST');
    console.log(req.body);

    var trafficlight = new TrafficlightCollection({
      noeco: req.body.noeco,
      mac: req.body.mac,
      email: req.body.email,
      edad: req.body.edad,
      cp: req.body.cp,
      genero: req.body.genero,
      urlfoto: req.body.urlfoto,
      ap1: req.body.ap1,
      ap2: req.body.ap2,
      nombre: req.body.nombre,
      tipo: req.body.tipo,
      fase: req.body.fase
    });

    trafficlight.save(err => {
      if (!err) {
        console.log('Created');
      } else {
        console.log('ERROR: ' + err);
        res.status(404).send('ERROR: ' + err);
      }
    });

    res.send(trafficlight);
  };

  //POST - Insert a new Trafficlight in the DB
  addManyTrafficlights = (req, res) => {
    console.log('POST');
    console.log('Many (length): ' + req.body.length);

    var trafficlight;
    var trafficlights = [];
    var i = 1;

    req.body.forEach(element => {
      trafficlight = new TrafficlightCollection({
        noeco: element.noeco,
        mac: element.mac,
        email: element.email,
        edad: element.edad,
        cp: element.cp,
        genero: element.genero,
        urlfoto: element.urlfoto,
        ap1: element.ap1,
        ap2: element.ap2,
        nombre: element.nombre,
        tipo: element.tipo,
        fase: element.fase
      });

      trafficlight.save(err => {
        if (!err) {
          console.log('Created ' + i + ' of ' + req.body.length);
        } else {
          console.log('ERROR: ' + err);
          res.status(404).send('ERROR: ' + err);
        }
      });

      trafficlights.push(trafficlight);
      i++;
    });

    res.send(trafficlights);
  };

  //PUT - Update a register already exists
  updateTrafficlight = (req, res) => {
    TrafficlightCollection.findById(req.params.id, (_, trafficlight) => {
      trafficlight.identifier = req.body.identifier;
      trafficlight.total = req.body.total;

      trafficlight.save(err => {
        if (!err) {
          console.log('Updated');
        } else {
          console.log('ERROR: ' + err);
          res.status(500).send('ERROR: ' + err);
        }
        res.send(trafficlight);
      });
    });
  }

  //DELETE - Delete a Trafficlight with specified ID
  deleteTrafficlight = (req, res) => {
    TrafficlightCollection.findById(req.params.id, (_, trafficlight) => {
      trafficlight.remove(err => {
        if (!err) {
          console.log('Removed');
        } else {
          console.log('ERROR: ' + err);
          res.status(500).send('ERROR: ' + err);
        }
        res.send(trafficlight);
      })
    });
  }

  //Link trafficlights and functions
  app.get('/trafficlights', findAllTrafficlights);
  app.get('/trafficlights/:id', findById);
  app.post('/trafficlight', addTrafficlight);
  app.post('/trafficlights', addManyTrafficlights);
  app.put('/trafficlight/:id', updateTrafficlight);
  app.delete('/trafficlight/:id', deleteTrafficlight);

}


const controller = require('./base.controller');

controller.actions.getCharacters = function(req, res, next) {
    const response = controller.getDefaultResponse();

    // TODO: Realizar la carga de datos con seeds a través del ORM.
    let characters = [
        { id: 1, name: "Kano" },
        { id: 2, name: "Scorpion" },
        { id: 3, name: "Sub-Zero" },
    ];

    response.message = characters;

    // TODO: Devolver el JSON con la lista de entidades.
    res.send(response);
};

module.exports = controller;
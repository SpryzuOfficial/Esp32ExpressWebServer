const {response, request} = require('express');

const activateCard = (req = request, res = response) =>
{
    const {id} = req.query;

    res.status(200).json({ok: true, id});
}

module.exports = {activateCard};
const express = require('express');
const aut = require("../controller/autcontroller")

const router = express.Router();

router.get('/status', (req, res) => {
    res.status(200).send(aut.logs);
});

module.exports = router;
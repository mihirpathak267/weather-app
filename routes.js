const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('this works bruh!');
});

module.exports = router;
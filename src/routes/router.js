const {Router} = require('express');
const router = Router();
const conn = require('../database');



router.get('/', async (req, res) => {
    await conn.query("SELECT * FROM tarea" , (err,result) => {
        if(err) throw err
        console.log(result);
        res.json(result);
    })
       
}) 



router.get('/:id', async (req, res) => {
    const idTarea = req.params.id;
    const query = "SELECT * FROM tarea WHERE id_tarea = '"+idTarea+"' ";
    await conn.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json(result);
    })
})



router.post('/add', async (req, res) => {
    const tarea = req.body.tarea;
    const desc = req.body.descripcion;
    const query =
        "INSERT INTO tarea(nom_tarea, desc_tarea) VALUES('" +
        tarea +
        "', '" +
        desc +
        "' )";
    await conn.query(query, (err, result) => {
        if (err) throw err;
        console.log(err);
        res.json({
            state: "dato agregado",
        });
    });
})




router.delete('/:id', async (req, res) => {
    const idTarea = req.params.id;
    const sql = "DELETE FROM tarea WHERE id_tarea = '"+idTarea+"'";
    await conn.query(sql, (err, result) => {
        if(err) throw err
        console.log(err)
        res.json({
            state:'dato eliminado'
        })
    })
})




router.put('/:id', async (req, res) => {
    const idTarea = req.params.id;
    const tarea = req.body.tarea;
    const desc = req.body.descripcion;
    const query = "UPDATE tarea SET nom_tarea = '"+tarea+"', desc_tarea= '"+desc+"' WHERE id_tarea = '"+idTarea+"' ";
    await conn.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json({
            state:'datos actualizados'
        })
    })
})









module.exports = router;
const express = require('express');
const router = express.Router();
const clientPostgre = require('../db/postgre'); 

router.get('/', async (req, res) => {
    try {
        const result = await clientPostgre.query("SELECT * FROM tasks")
        const resultCompleted = await clientPostgre.query("SELECT * FROM tasks WHERE tasks.is_completed = true")
        console.log("Query result:", result.rows);
        res.render('index', { task: result.rows, complete: resultCompleted.rows });
    } catch (error) {
        res.status(500).send('Error executing query');
    }
});

// Route to add a new task
router.post('/addtask', async (req, res) => {
    console.log("Adding task:", req.body);
    try {
        await clientPostgre.query(`INSERT INTO tasks(name, is_completed) VALUES($1, $2)`, [req.body.newtask, false]);
        res.redirect('/');
    } catch (error) {
        console.log("Error adding task:", error);
        res.status(500).send('Error adding task');
    }
});

// Route to remove a task
router.post('/removetask', async (req, res) => {
    if (req.body.check !== "") {
        try {
            await clientPostgre.query(`DELETE FROM tasks WHERE id = $1;`, [req.body.check]);
            res.redirect('/');
        } catch (error) {
            console.log("Error removing task:", error);
            res.status(500).send('Error removing task');
        }
    }
});

// Route to mark a task as completed
router.post('/completetask', async (req, res) => {
    if (req.body.check !== "") {
        try {
            await clientPostgre.query(`
                UPDATE tasks SET is_completed = true WHERE id = $1;
            `, [req.body.check]);
            res.redirect('/');
        } catch (error) {
            console.log("Error removing task:", error);
            res.status(500).send('Error removing task');
        }
    }
});

module.exports = router;
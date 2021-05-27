const router = require("express").Router();
const pool = require("../db");
const authorization =require("../middleware/authorization");

router.get("/", authorization, async (req, res) => {
    try {

        // > req.user contains the payload
        // res.json(req.user);

        const user = await pool.query(`select user_name, user_id from amtoaleonar_todo.users 
                                       where user_id = $1`,[req.user]);
 
        res.json(user.rows[0]);

    } catch (err) {
        console.error(err.message);
        rse.status(500).json('Server Error');
    }
})

module.exports = router;
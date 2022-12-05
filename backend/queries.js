const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'api',
    password: 'postgres',
    port: 5432,
})

const getPoint = (request, response) => {
    pool.query('SELECT * FROM points', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const addPoints = (request, response) => {
    const { name, weight_target, target } = request.body

    pool.query('INSERT INTO points (name, weight_target, target) VALUES ($1, $2, $3) RETURNING *', [name, weight_target, target], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}

const FakePush = (request, response) => {
    const { } = request.body
    response.status(201).send('Done')
}

module.exports = {
    addPoints,
    getPoint,
    FakePush
}

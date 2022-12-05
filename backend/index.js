const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

const getPointByDiagram = (request, response) => {
    const id = parseInt(request.params.id)
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
const express = require('express')
const cors = require('cors')
const Yup = require('yup')

const app = express()

app.use(express.json())
app.use(cors({
  exposedHeaders: ['*']
}))

let database = [{
  name: 'Luis',
  email: 'luis_filipe42@outlook.com'
}];

app.get('/ping', (req, res) => {
  const headers = req.headers

  console.log(headers)

  if (headers && headers.aya) {
    res.setHeader('IAA', 'I am alive, please wait!')
  }

  return res.send(new Date())
})

app.get('/users', (req, res) => {
  setTimeout(() => {
    res.setHeader('ACK', 'Now you can do your job')
    return res.json(database)
  }, 20000)
})

app.post('/users', async (req, res) => {
  const { name, email } = req.body

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required()
  })

  if (!(await schema.isValid(req.body))) {
    res.setHeader('TA', 'Try again')

    return res.status(400).json({ error: 'Validation fails' })
  }

  
  database.push({
    name,
    email
  })
  
  console.log(database)

  res.setHeader('ACK', 'Request received successfully')
  return res.status(201).json(database)
})

app.listen(3333, () => {
  console.log('App is listening')
})
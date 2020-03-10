import React, { useState, useEffect, useMemo } from 'react'
import api from './services/api'

import { Container, Form, InputContainer, UserList } from './styles'

function App() {
  const [users, setUsers] = useState([])
  const [isProcessing, setIsProcessing] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/users')
      if (response.headers && response.headers.ack) {
        setIsProcessing(false)
        setUsers(response.data)
      }
    }

    fetchData()
  }, [])

  useMemo(() => {
    setTimeout(async () => {
      if (!users.length > 0) {
        const newResponse = await api.get('/ping', {
          headers: {
            aya: 'Are you alive?'
          }
        })

        console.log(newResponse.headers)

        if (newResponse.headers && newResponse.headers.iaa) {
          setIsProcessing(true)
        }
      }
    }, 10000)
  }, [users.length])

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const response = await api.post('/users', {
        name,
        email
      })

      setUsers(response.data)
      setName('')
      setEmail('')
    } catch (e) {
      const { headers } = e.response

      if(headers && headers.ta) {
        alert('Error, try again!')
      }
    }
  }

  return (
    <Container>
      <>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                autoComplete="off" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="off" />
            </div>
          </InputContainer>

          <button type="submit">Salvar</button>
        </Form>
      </>

      {!isProcessing ? (
        <UserList>
          {users.length > 0 && users.map(user => (
            <li key={user.email}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </UserList>
      ) : <p>Loading</p>}
    </Container>
  );
}

export default App;

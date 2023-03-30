import { useState } from 'react'
import styled from 'styled-components'
import { Form } from '../../components/form'

const Input = styled.input`
  margin-bottom: 25px;
  padding: 0 20px;
  height: 50px;
  border-radius: 25px;
  border: none;
  background-color: ${({ theme }) => theme.colors.body};
  font-size: 16px;
  width: 100%;
`

export const LoginPage = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <Form 
      title="Log in"
      onSubmit={handleSubmit}
      linkUnder={{ path: '/auth/signup', text: 'Go to sign up' }}
    >
      <Input
        type="text"
        name="username"
        placeholder="username"
        value={form.username}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="password"
        value={form.password}
        onChange={handleChange}
      />
    </Form>
  )
}
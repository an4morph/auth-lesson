import { useState } from "react"
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

export const SignUpPage = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    firstName: '',
    age: '',
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
      title="Sign Up" 
      onSubmit={handleSubmit} 
      linkUnder={{ path: '/auth/login', text: 'Go to log in' }}
    >
      <Input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="username"
        placeholder="Username*"
        value={form.username}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password*"
        value={form.password}
        onChange={handleChange}
      />
    </Form>
  )
}
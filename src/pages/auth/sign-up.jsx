import { useState } from "react"
import { Form } from '../../components/form'
import { TextField } from '../../components/text-field'

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
    
    fetch('http://localhost:1717/signin', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((data) => {
        localStorage.setItem('token', data.token)
      })
  }

  return (
    <Form 
      title="Sign Up" 
      onSubmit={handleSubmit} 
      linkUnder={{ path: '/auth/login', text: 'Go to log in' }}
    >
      <TextField
        type="text"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
      />
      <TextField
        type="text"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />
      <TextField
        type="text"
        name="username"
        placeholder="Username*"
        value={form.username}
        onChange={handleChange}
      />
      <TextField
        type="password"
        name="password"
        placeholder="Password*"
        value={form.password}
        onChange={handleChange}
      />
    </Form>
  )
}
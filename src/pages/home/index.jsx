import { useEffect, useState } from "react"

export const HomePage = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('http://localhost:1717/me', {
      headers: {
        'X-Auth': localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then((data) => {
        console.log('fetch', data)
        setUser(data)
      })
  }, [])

  return (
    <div>
      {user?.firstName}
      <div>{user?.username}</div>
    </div>
  )
}
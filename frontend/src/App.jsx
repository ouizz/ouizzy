
import React , { useState , useEffect } from 'react'

const App = () => {
  const [users , setUsers] = useState([])
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_API}/user`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setUsers(result)
      })
  },[])

  return (
    <div>
      <ul>
        {users.map((val , key) => (
          <li className={key}>{val.id} {val.name} {val.email}</li>
        ))}
      </ul>

    </div>
  )
}

export default App
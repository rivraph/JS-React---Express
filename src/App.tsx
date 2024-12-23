import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Effectuer la requête à ton backend
    fetch("http://localhost:5173/api/employees") 
      .then(response => {
        if (!response.ok) {
          throw new Error("Erreur de réseau");
        }
        return response.json();
      })
      .then(data => setEmployee(data.results[0]))
      .catch(error => console.error("Erreur de requête:", error));
  }, []);

  return (
    <>
    {employee ? (
        <div>
          <h1>{employee[0]}</h1>
          <p>Email: {employee[1]}</p>
          <img src={employee[2]} alt="Employee" />
        </div>
      ) : (
        <p>Chargement des données..</p> // Message affiché pendant le chargement
        )}
      </>
  );}

export default App;
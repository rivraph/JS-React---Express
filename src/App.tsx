import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [employee, setEmployee] = useState([]);
  
  useEffect(() => {
    
    fetch("http://localhost:3310/api/employees") 
      .then(response => {
        if (!response.ok) {
          throw new Error("Erreur de réseau");
        }
        return response.json();
      })
      .then(data => setEmployee(data))
      .catch(error => console.error("Erreur de requête:", error));
    }, []);
    
    console.log(employee);


  return (
    <>
    {employee && employee.results && employee.results.length > 0 ? (
        <div>
          <h1>{employee.results[0].name.first}</h1>
          <p>Email: {employee.results[0].email}</p>
          <img src={employee.results[0].picture.medium} alt="Employee" />
        </div>
      ) : (
        <p>Chargement des données...</p> // Message affiché pendant le chargement
        )}
      </>
  );}

export default App;
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Vehicle {
  _id: string;
  marca: string;
  modelo: string;
  ano: number;
}

function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('http://localhost:3000/vehicles');
      const data = response.data;   
      setVehicles(data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      setError('Failed to fetch vehicles');
    }
  };

  return (
    <div>
      <h1>Lista de Veículos</h1>
      {error && <p>{error}</p>}
      <ul>
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <li key={vehicle._id}>
              <strong>Marca:</strong> {vehicle.marca}, <strong>Modelo:</strong> {vehicle.modelo}, <strong>Ano:</strong> {vehicle.ano}
            </li>
          ))
        ) : (
          <p>Nenhum veículo encontrado</p>
        )}
      </ul>
    </div>
  );
}

export default App;

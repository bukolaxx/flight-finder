import { useState } from 'react'
import flightData from '/data/flights.json';
import '/src/App.css'

export default function SaerchBar() {
  const [flights] = useState(flightData);
  const [search, setSearch] = useState('');

  const filteredFlights = flights.filter(flight =>
    flight.destination.toLowerCase().includes(search.toLowerCase()) ||
    flight.airline.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Flight Finder</h1>
      <input
        type="text"
        placeholder="Search destination or airline..."
        className="border p-2 w-full rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="space-y-4">
        {filteredFlights.map(flight => (
          <li key={flight.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{flight.destination}</h2>
            <p>Airline: {flight.airline}</p>
            <p>Price: ${flight.price}</p>
            <p>Duration: {flight.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
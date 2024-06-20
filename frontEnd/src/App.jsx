import React, { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:6062/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className='tablecontainer'>
        <table>
          <thead>
            <tr>
              <th>userId</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>  
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.userId}</td>
                <td>{d.name}</td>
                <td>{d.phone}</td>
                <td>{d.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default App




// import React, { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:6062/users')
//       .then(res => res.json())
//       .then(data => setData(data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>userId</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((d, i) => (
//             <tr key={i}>
//               <td>{d.userId}</td>
//               <td>{d.name}</td>
//               <td>{d.phone}</td>
//               <td>{d.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
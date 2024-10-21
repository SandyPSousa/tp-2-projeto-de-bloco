// import React, { useEffect, useState } from "react";
// import { getTrendingMovies } from "./themoviedb";
// import Country from "./Components/Country-cards/Countries";

// function sayHello() {
//   console.log("hello");
// }

// export default function App2() {
//   sayHello();
//   const [count, setCount] = useState(0);
//   const [response, setResponse] = useState({ name: "rafael" });

//   useEffect(() => {
//     console.log("eu rodo quando o componente monta");
//     async function fetchData() {
//       const dados = await getTrendingMovies();
//       setResponse(dados);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>App2</h1>
//       <p>count: {count}</p>
//       <button onClick={(e) => setCount((state) => state + 1)}>Click-me</button>
//       <pre>{JSON.stringify(response, null, 2)}</pre>

//       {response?.results?.map((movie) => (
//         <Country
//           key={movie?.id}
//           title={movie?.title}
//           popularity={movie?.popularity}
//         />
//       ))}
//     </div>
//   );
// }

export default function app2() {
  return <p>hello</p>;
}

// import "./Popular-movies-card.css";

// export default function PopularMovies(props) {
//   const imageUrl = "https://image.tmdb.org/t/p/original${props.poster_path}";
 

//   return (
//     <div className="popular-movies-card">
//       {/* <img
//         className="popular-movies-img"
//         src="https://ae-pic-a1.aliexpress-media.com/kf/S9e87199b1b3a4955a31575d8c3f79df1h.jpg_640x640Q90.jpg_.webp"
//       /> */}
//        <img src={imageUrl} />
//       <p>{props?.title || "Country Name"}</p>
//       <p>{props?.popularity || "Popularity %"}</p>
//     </div>
//   );
// }

import "./Popular-movies-card.css";

export default function PopularMovies(props) {
  // const imageUrl = "https://image.tmdb.org/t/p/original${props.poster_path}";
 

  return (
    <div className="popular-movies-card">
      {/* <img
        
        src="https://ae-pic-a1.aliexpress-media.com/kf/S9e87199b1b3a4955a31575d8c3f79df1h.jpg_640x640Q90.jpg_.webp"
      /> */}
      <img className="popular-movies-img" src={`https://image.tmdb.org/t/p/original${props.img}`}/>
      <p>{props?.title || "Movie Name"}</p>
      <p>{props?.popularity || "Popularity %"}</p>
    </div>
  );
}

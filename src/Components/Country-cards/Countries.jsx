import "./Countries.css"


export default function Country(props){
  return (
    <div className="countries-card">
      <img className="img-card" src="https://flagpedia.net/data/flags/w702/ar.webp"/>
      <p>Country Name</p>
      <p>Popularity %</p>
    </div>
  )
}
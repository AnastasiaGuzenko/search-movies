const Preview = ({
  title, overview, backdrop
}) => {
  return <div>
    <img
      src={`https://image.tmdb.org/t/p/w500${backdrop}`}>
    </img> 
    <h1>{title}</h1>
    <button>details</button>
    <p>{overview}</p>

  </div>
}
export default Preview
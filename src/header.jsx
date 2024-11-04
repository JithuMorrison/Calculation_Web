import './App.css'
function Headermain({name}){
  return (
    <div className="header">
      <h1 className="title">{name}</h1>
          <a href="index.html">Return</a>
    </div>
  );
}
export default Headermain;
import "./styles.css";
import {data} from "./model"

export default function App() {
  return (
    <div className="main">
      <div className="loaderWrapper">
      {
        data.map(loader=>(
          <div className='loaderBox'>
           <loader.Component {...loader.props} />
           <hr/>
           <span>{loader.name}</span>
          </div>
        ))
      }
      </div>  
    </div>
  );
}

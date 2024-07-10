import Map from "./component/map"
import LocationSearch from "./component/locationSearch"
import type { Place } from "./api/Place"
import { useState } from "react"

function App() {
const [place, setplace] = useState<Place | null>(null);

const handleChange = ()=>{
  return place
}
 return <div className="h-screen w-screen grid grid-cols-12">
  <div className="col-span-3 p-2">
  <LocationSearch onPlaceClick={(p)=>setplace(p)} />
  </div>
  <div className="col-span-8">
  <Map place={place} onChange={handleChange}/>
  </div>
  </div>
}

export default App

import { Fragment, useState } from "react"
import type { Place } from "../api/Place"
import { search } from "../api/search"

interface LocationProp  {
    onPlaceClick: (a:Place)=>void;
}

export default function LocationSearch({onPlaceClick}:LocationProp){
const [places, setPlace] = useState<Place[]>([])
const [term, setTerm] = useState('');

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let placesreturn = await search(term);
    setPlace(placesreturn);
}
return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="term">
          Search
        </label>
        <input
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
      
      <h1 className="font-bold mt-6">found Location</h1>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-20">
        {
            places.map(place=> {
                return  <Fragment key={place.id}>
                    <p className="text-sm">{place.name}</p>
                    <button 
                    className="bg-blue-500 text-xs text-white"
                    onClick={()=>onPlaceClick(place)}>GO</button>
                    <div className="border-b w-full col-span-2"/>
                </Fragment>
            })
        }
      </div>
    </div>
  );
}
import 'leaflet/dist/leaflet.css'
import type { Place } from "../api/Place"
import { Map as LeafletMap } from 'leaflet';
import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

interface Mapprops {
    place: Place | null;
    onChange: (a: string)=>Place | null
}

export default function Map({ place , onChange}: Mapprops) {

    useEffect(()=>{
        if (mapRef.current && place) {
            mapRef.current.flyTo([place.latitude, place.longitude])
        }
    },[place])

    const mapRef = useRef<LeafletMap | null>(null)
    return <MapContainer 
    ref={mapRef}
    center={[40.7,-74]}
    zoom={12}
    scrollWheelZoom
    className='h-full'
    >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    {place && <Marker position={[place.latitude, place.longitude]}></Marker>}
    </MapContainer>

}
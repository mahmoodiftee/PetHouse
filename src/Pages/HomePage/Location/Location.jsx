import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import json from './loations.json'
const Location = () => {
    const initialPosition = [23.827810, 90.361319];
    const [position, setPosition] = useState(initialPosition);
    const [cards, setCards] = useState([]);
    const [popup, setPopup] = useState([]);
    useEffect(() => {
        setCards(json);
    }, [])
    const handleLocation = (p, location) => {
        setPosition(p);
        setPopup(location);
    }
    return (
        <>
            <div className="relative isolate rounded-xl mx-2 md:mx-0 py-16 md:py-20 ">
                <div className="mx-auto max-w-7xl px-2 md:px-6">
                    <div className="my-4">
                        <h1 className="text-3xl md:text-5xl italic text-orange mb-2 md:mb-6 text-center font-extrabold">Our <span className="text-white">Locations</span></h1>
                    </div>
                    <div className="mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-10">
                            {
                                cards.map((card) =>
                                    <button onClick={() => handleLocation(card.position, card.details)} key={card.id} className="flex justify-center items-center md:items-start md:justify-start bg-dark bg-opacity-[90%] py-5 px-3 rounded-xl flex-col">
                                        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </div>
                                        <dt className="mt-2 w-full text-center md:text-start font-semibold text-white">{card.location}</dt>
                                        <dd className="mt-2 hidden md:block leading-7 text-start text-gray-400">
                                            {card.details}
                                        </dd>
                                    </button>
                                )
                            }
                        </div>
                        <div className="h-96 lg:h-full max-w-full">
                            <MapContainer key={position.toString()} center={position} scrollWheelZoom={true} zoom={13} style={{ height: '100%', borderRadius: '12px', width: '100%', margin: 'auto' }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
                                    <Popup>
                                        {popup}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Location;

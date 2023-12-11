import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Title from "../../../Components/Title/Title";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Location = () => {
    const position = [23.772458, 90.404479];
    return (
        <>
            <div className="relative isolate overflow-hidden rounded-xl mx-2 md:mx-0 py-16 md:py-20 ">
                <div className="mx-auto max-w-7xl px-2 md:px-6">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg md:pb-6">
                            <div className="my-4">
                                <h1 className="text-3xl md:text-5xl italic text-orange text-start font-extrabold">Our <span className="text-white">Locations</span></h1>
                            </div>
                            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                                <div className="flex flex-col items-start">
                                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>

                                    </div>
                                    <dt className="mt-2 font-semibold text-white">Niketon Society, Gulshan 1</dt>
                                    <dd className="mt-2 leading-7 text-gray-400">
                                        Non laboris consequat cupidatat laborum magna.
                                    </dd>
                                </div>
                                <div className="flex flex-col items-start">
                                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <dt className="mt-2 font-semibold text-white">Pallabi, Mirpur 12</dt>
                                    <dd className="mt-2 leading-7 text-gray-400">
                                        Officia excepteur ullamco ut sint duis proident.
                                    </dd>
                                </div>
                                <div className="flex flex-col items-start">
                                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <dt className="mt-2 font-semibold text-white">Bangladesh Navy,Banani</dt>
                                    <dd className="mt-2 leading-7 text-gray-400">
                                        Non laboris consequat cupidatat laborum magna.
                                    </dd>
                                </div>
                                <div className="flex flex-col items-start">
                                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <dt className="mt-2 font-semibold text-white">Uttara Sector 11 No Park</dt>
                                    <dd className="mt-2 leading-7 text-gray-400">
                                        Officia excepteur ullamco ut sint duis proident.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <dl className="grid grid-cols-1 ">
                            <MapContainer center={position} scrollWheelZoom={true} zoom={13} style={{ height: '100%', borderRadius: '12px', width: '100%', margin: 'auto' }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={position}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Location;

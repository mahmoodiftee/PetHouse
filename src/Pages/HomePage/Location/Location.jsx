import { FaFacebookSquare, FaGlobe, FaWhatsapp } from "react-icons/fa";
import Title from "../../../Components/Title/Title";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Location = () => {
    const position = [23.7681, 90.3823];
    return (
        <>
            <div className="relative isolate overflow-hidden rounded-xl mx-2 md:mx-0 py-16 md:py-20 ">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">

                        <div className="max-w-xl  lg:max-w-lg">
                            <Title head1={'Our'} head2={'Locations'} />
                            <dl className="grid grid-cols-1 gap-y-[30px] md:-mt-4">
                                <div className="flex flex-row gap-x-4 text-gray-400 items-center">
                                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                        <FaWhatsapp className="h-4 w-4md:h-6 md:w-6 text-white" aria-hidden="true" />
                                    </div>
                                    <h1>+880 1234567890</h1>
                                </div>
                                <div className="flex flex-row gap-x-4 text-gray-400 items-center">
                                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                        <FaGlobe className="h-4 w-4md:h-6 md:w-6 text-white" aria-hidden="true" />
                                    </div>
                                    <h1>www.pethouse.com</h1>
                                </div>
                                <div className="flex flex-row gap-x-4 text-gray-400 items-center">
                                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                        <FaFacebookSquare className="h-4 w-4md:h-6 md:w-6 text-white" aria-hidden="true" />
                                    </div>
                                    <h1 className="hidden md:flex">www.facebook.com/pethouse.com.bd</h1>
                                    <h1 className="flex md:hidden text-gray-400">www.fb.com/pethouse.com.bd</h1>
                                </div>
                            </dl>
                        </div>
                        <dl className="grid grid-cols-1 gap-y-[30px] md:-mt-4">
                            <MapContainer center={position} scrollWheelZoom={false} zoom={13} style={{ height: '400px', borderRadius: '12px', width: '100%', margin: 'auto' }}>
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

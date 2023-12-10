import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Title from '../../../Components/Title/Title';
const Location = () => {
    const position = [23.772458, 90.404479];
    return (
        <div className='mx-2 md:mx-6'>
            <div className='md:my-10'>
                <Title head1={'Visit'} head2={'Us'} />
            </div>
            <div className='rounded-xl'>
                <MapContainer center={position} scrollWheelZoom={false} zoom={13} style={{ height: '400px', borderRadius:'12px', width: '100%', margin: 'auto' }}>
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
            </div>
        </div>
    );
};

export default Location;
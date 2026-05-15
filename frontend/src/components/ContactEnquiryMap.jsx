import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/marker-icon-2x.png',
    iconUrl: '/marker-icon.png',
    shadowUrl: '/marker-shadow.png',
});

function ContactEnquiryMap() {
    const position = [13.661293605573427, 121.05115835513249]; 

    return (
        <MapContainer
            center={position}
            zoom={13}
            style={{ height: '300px', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    Drift & Shore Resort
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default ContactEnquiryMap
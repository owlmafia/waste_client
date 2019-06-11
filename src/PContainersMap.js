import React from "react";
import './App.css';
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import L from 'leaflet';
import RoutingMachine from './RoutingMachine';

const markerIcon = new L.Icon({
    iconUrl: require('./marker.svg'),
    iconRetinaUrl: require('./marker.svg'),
    iconAnchor: null,
    popupAnchor: [-3, -26],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: 'leaflet-div-icon'
});

const PContainersMap = ({pContainers}) => {
    const markers = () => pContainers.map(container =>
        <Marker position={[container["lat"], container["lon"]]} icon={markerIcon}>
            <Popup>
                {container["name"]}<br/>{container["address"]}
            </Popup>
        </Marker>
    );

    const map = React.createRef();

    return (
        <div>
            <Map center={[52.520008, 13.404954]} zoom={11} ref={map} style={{height: 380}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers()}
                {pContainers.map(container =>
                    <RoutingMachine
                        color="#000"
                        map={map}
                        road={[L.latLng(52.520008, 13.404954), L.latLng(container["lat"], container["lon"])]}
                    />
                )}
            </Map>
            <div><a>Walking</a> | <a>Car</a> | <a>Public transport</a> | <a>Show all</a></div>
        </div>
    );
};

export default PContainersMap;
"use client"
import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, LatLngBounds, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.74868,
  lng: -73.98563
};

const Map: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAlk-soenCOTpMQw5G_uN_VxsAS4CoFfH8"
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState<boolean>(false);

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMarkerClick = () => {
    setInfoWindowOpen(true);
  };

  const handleInfoWindowClose = () => {
    setInfoWindowOpen(false);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {map && (
        <Marker
          position={center}
          label="...."
          title="Pixel Host headquarters"
          onClick={handleMarkerClick}
        >
          {infoWindowOpen && (
            <InfoWindow onCloseClick={handleInfoWindowClose}>
              <div>
                <h3>Pixel Host</h3>
                <p>20 W 34th St., <br /> New York, NY 10001, USA</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      )}
    </GoogleMap>
  ) : <></>;
};

export default Map;

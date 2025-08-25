"use client";

import { Location } from "@/app/generated/prisma";
import Map, { Marker } from "react-map-gl/mapbox";

interface MapProps {
  itineraries: Location[];
}

export default function MyMap({ itineraries }: MapProps) {
  const center =
    itineraries.length > 0
      ? { lat: itineraries[0].lat, lng: itineraries[0].lng }
      : { lat: 0, lng: 0 };

  return (
    <Map
      initialViewState={{
        longitude: center.lng,
        latitude: center.lat,
        zoom: 8,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
    >
      {itineraries.map((location, key) => (
        <Marker
          key={key}
          longitude={location.lng}
          latitude={location.lat}
          anchor="bottom"
        >
          📍
        </Marker>
      ))}
    </Map>
  );
}

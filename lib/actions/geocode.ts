interface GeocodeResult {
  country: string;
  formattedAddress: string;
}

export async function getCountryFromCoordinates(
  lat: number,
  lng: number
): Promise<GeocodeResult> {
  const apiKey = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${apiKey}`
  );

  const data = await response.json();

  if (!data.features || data.features.length === 0) {
    return {
      country: "Unknown",
      formattedAddress: "Unknown",
    };
  }

  const result = data.features[0];

  const countryFeature =
    result.context?.find((c: { id: string }) =>
      (c as { id: string }).id.startsWith("country")
    ) || (result.place_type.includes("country") ? result : null);

  return {
    country: countryFeature ? countryFeature.text : "Unknown",
    formattedAddress: result.place_name,
  };
}

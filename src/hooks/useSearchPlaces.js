const token =
	"pk.eyJ1IjoicXVpc3Bld2lsbWVyIiwiYSI6ImNrbm8weG1sNzEzZ3cydm1vcWluczVoZHMifQ.51O5VoB0t1sOhThd743wZw";

const formatQuery = (name) => {
    const formatNameHTTP = encodeURI(name)
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${formatNameHTTP}.json?country=PE&language=es&access_token=${token}`;
}

const useSearchPlaces = () => {
	const searchPlaces = async (name) => {
		const query = formatQuery(name)

		try {
			const response = await fetch(query);
			const data = await response.json();

			const places = data.features
				.map(feature=> ({
					center: feature.center,
					name: feature.matching_place_name || feature.place_name
				}))

			return places;
		} catch(error) {
			return [];
		}

	}

    return searchPlaces
}

export default useSearchPlaces

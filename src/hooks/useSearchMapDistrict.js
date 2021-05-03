const token =
	"pk.eyJ1IjoicXVpc3Bld2lsbWVyIiwiYSI6ImNrbm8weG1sNzEzZ3cydm1vcWluczVoZHMifQ.51O5VoB0t1sOhThd743wZw";

const formatQuery = (name) => {
	const formatNameHTTP = name.replace(/\s/g, "%20");

	return `https://api.mapbox.com/geocoding/v5/mapbox.places/${formatNameHTTP}.json?country=PE&access_token=${token}`;
};

const useSearchMapDistrict = (mapRef) => {
	const searchDistrict = async (name) => {
		const query = formatQuery(name);

		try {
			const response = await fetch(query);
			const data = await response.json();

			const center = data.features[0].center;

			mapRef.current.flyTo({
				center: center,
				essential: true,
				zoom: 13.5,
			});
		} catch {}
	};

	return searchDistrict;
};

export default useSearchMapDistrict;

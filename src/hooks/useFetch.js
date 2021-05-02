import { useEffect, useState } from "react";

const host = "https://open-covid-2-api-6b3whmne6q-uk.a.run.app";

const useFetch = (endpoint) => {
	const [state, setState] = useState({
		loading: false,
		data: undefined,
		error: undefined,
	});

	useEffect(() => {
		if (endpoint) {
			setState((prevState) => ({
				...prevState,
				loading: true,
			}));

			fetch(host + endpoint)
				.then((res) => res.json())
				.then((json) => {
					setState((prevState) => ({
						...prevState,
						loading: false,
						data: json,
					}));
				})
				.catch((error) => {
					setState((prevState) => ({
						...prevState,
						loading: false,
						error,
					}));
				});
		}
	}, [endpoint]);

	return state;
};

export default useFetch;

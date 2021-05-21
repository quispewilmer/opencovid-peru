import { useEffect, useState } from "react";

const host = "https://open-covid-api-vwgk4ckqbq-uk.a.run.app";

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
					if (Array.isArray(json)) {
						setState({
							loading: false,
							data: json,
							error: undefined,
						});
					} else {
						setState({
							loading: false,
							data: [],
							error: new Error("data not an array"),
						});
					}
				})
				.catch((error) => {
					setState({
						loading: false,
						data: [],
						error,
					});
				});
		}
	}, [endpoint]);

	return state;
};

export default useFetch;

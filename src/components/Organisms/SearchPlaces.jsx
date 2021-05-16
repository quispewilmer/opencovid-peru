import { useEffect, useState } from "react"
import useSearchPlaces from "../../hooks/useSearchPlaces"
import SearchMapbox from "../Molecules/SearchMapbox"

const SearchPlaces = ({ onSubmit, onPlaceSelected }) => {
    const [value, setValue] = useState("")
	const [currentPlaces, setCurrentPlaces] = useState([])
    const searchPlaces = useSearchPlaces()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            (async () => {
                if (value) {
                    const places = await searchPlaces(value)
                    setCurrentPlaces(places)
                }
            })()
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [value])

    const handlePlaceSelected = (center) => {
        onPlaceSelected(center)
        setCurrentPlaces([])
        setValue("")
    }
    
    // TODO place style into proper class
    return (
        <div className="emergency-map-container__search-region" style={{position: "relative"}}>
            <SearchMapbox
                text="Busca tu distrito"
                value={value}
                onChangeText={text => setValue(text)}
                onSubmit={onSubmit} />
            {currentPlaces.length > 0 && <div style={{
                position: "absolute",
                zIndex: "3",
                left: "98.7px",
                top: "0",
                width: "450px",
                background: "white",
                paddingTop: "48px",
                paddingLeft: "16px",
                paddingRight: "16px",
                paddingBottom: "8px",
                borderRadius: "20px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}>
                {currentPlaces.map((place, index) => {
                    return (
                        <button
                            key={index}
                            style={{
                                all: "unset",
                                cursor: "pointer",
                                padding: "8px 0px"
                            }}
                            onClick={() => handlePlaceSelected(place.center)}>{place.name}</button>
                     )
                })}
            </div>}
        </div>
    )
}

export default SearchPlaces

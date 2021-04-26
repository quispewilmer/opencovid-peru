import CovidBedIcon from "../../img/emergencymap/covidbed.svg";
import EssaludIcon from "../../img/emergencymap/essaludhealthcenter.svg";
import FfaaIcon from "../../img/emergencymap/ffaapnphealthcenter.svg";
import MinsaIcon from "../../img/emergencymap/minsahealthcenter.svg";
import OxigenIcon from "../../img/emergencymap/oxigencharge.svg";
import PharmacyIcon from "../../img/emergencymap/pharmacy.svg";
import PrivateIcon from "../../img/emergencymap/privatehealthcenter.svg";
import UciBedIcon from "../../img/emergencymap/ucibed.svg";

const nameIconMap = {
	ucibed: UciBedIcon,
	covidbed: CovidBedIcon,
	oxigen: OxigenIcon,
	pharmacy: PharmacyIcon,
	minsa: MinsaIcon,
	essalud: EssaludIcon,
	private: PrivateIcon,
	ffaa: FfaaIcon,
};

const MapMarker = ({ name }) => {
	return (
		<div className="map-marker">
			<div className="map-marker__holder"></div>
			<img src={nameIconMap[name]} className="map-marker__icon" />
		</div>
	);
};

export default MapMarker;

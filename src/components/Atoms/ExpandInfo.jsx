import React from 'react';
import InfoIcon from '../../img/icons/info.svg';
import '../../styles/theme/_expandinfo.scss'

const ExpandInfo = ({ text }) => {

	return (
		<div className="expand-info-container">
			<img src={InfoIcon} alt="info icon" className="expand-info__icon" />
			<div className="expand-info__legend">
				<p>{text}</p>
			</div>			
		</div>
		);
}

export default ExpandInfo;
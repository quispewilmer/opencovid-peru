import React,  { useState, useRef, useEffect } from 'react';
import InfoIcon from '../../img/icons/info.svg';
import classNames from 'classnames'
import '../../styles/theme/_expandinfo.scss'

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },

    [ref, handler]
  );
}


const ExpandInfo = ({ text, className, style }) => {
	const [visible, setVisible] = useState(false)
	const iconRef = useRef(null)

	useOnClickOutside(iconRef, () => setVisible(false))

	return (
		<div className={classNames('expand-info-container', className)} style={style}>
			<img src={InfoIcon} ref={iconRef} alt="info icon" className="expand-info__icon" onClick={() => setVisible(v => !v)} />
			<div className="expand-info__legend" style={{ display: visible ? 'block' : 'none' }}>
				{text}
			</div>			
		</div>
		);
}

export default ExpandInfo;
import React from 'react';

import style from './style.module.css';

const Preloader = () => (
	<div className={style.small}>
		<div className={style.loader}></div>
	</div>
);

export default Preloader;

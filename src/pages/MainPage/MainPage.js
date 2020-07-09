import React from 'react';
import Container from '@material-ui/core/Container';

import Films from 'components/Films';
import Search from 'components/Search';

const MainPage = () => {
	return (
		<Container>
			<Search />
			<Films />
		</Container>
	);
};

export default MainPage;

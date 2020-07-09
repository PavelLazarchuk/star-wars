import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
		padding: 10,
		borderRadius: 20,
	},
	title: {
		margin: 0,
		fontSize: 16,
		color: 'red',
		paddingBottom: 5,
	},
	bold: {
		fontWeight: 600,
	},
	details: {
		fontSize: 14,
		marginBottom: 5,
	},
}));

export default useStyles;

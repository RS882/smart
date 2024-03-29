import { DefaultTheme } from 'styled-components';

// constant values for stylization
export const theme: DefaultTheme = {
	width: {
		min: '320px',
		max: '1920px',
		maxContainer: '1300px',
		containerPadding: '20px',
	},
	media: {
		tablet: '(width >= 767.98px)',
		desktop: '(width >= 991.98px)',
	},
	font: {
		family: {
			main: '"Exo 2", sans-serif',
			input: '"Inter", sans-serif',
			userCab: '"Source Sans Pro", sans-serif',
		},
		size: '16px',

	},
	color: {
		bg: {
			main: '#fff',
		},
		text: {
			main: '#070C11',
			mainLight: '#fff',
			second: '#838688',
		},
		blue: '#4878A6',
		darkBlue: '#2A5275',
		red: '#F15152',
		lightBlue: '#EDF2F6',
		yellow: '#FBB13C',
		divider: '#C8CACB',
		menuBlue: '#0E1821',
		cardBorder: '#EAEAF0',
		ligthYellow: '#FFF7E3',
	},
}

import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		width: {
			min: string,
			max: string,
			maxContainer: number,
			containerPadding?: number,
		},
		media?: {
			phone?: string,
			tablet?: string,
			desktop?: string,

		},
		font: {
			family: {
				main: string,
				input?: string,
				userCab?: string,
			}
			size: string
		},
		color: {
			bg: {
				main: string,
			},
			text: {
				main: string,
				second?: string,
			},
			blue?: string,
			darkBlue?: string,
			red?: string,
			lightBlue?: string,
			yellow?: string,
			divider?: string,
			menuBlue?: string,
			cardBorder?: string,
			ligthYellow?: string,

		}
		// borderRadius: string;
		// colors: {
		// 	main: string;
		// 	secondary: string;
		// };
	}
}
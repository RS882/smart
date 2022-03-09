import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		width?: {
			min: string,
			max: string,
			maxContainer: string,
			containerPadding?: string,
		},
		media?: {
			phone?: string,
			tablet?: string,
			desktop?: string,

		}
		// borderRadius: string;
		// colors: {
		// 	main: string;
		// 	secondary: string;
		// };
	}
}
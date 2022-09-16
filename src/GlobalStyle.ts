import { createGlobalStyle } from 'styled-components'

// Numbering of stylization meanings
export const Global = createGlobalStyle`

* {
	padding: 0px;
	margin: 0px;
	border: 0px;
	box-sizing: border-box;
}
*,
*:before,
*:after {
	box-sizing: border-box;
}
:focus,
:active {
	outline: none;
}
a:focus,
a:active {
	outline: none;
}
html,
body {
	height: 100%;
	min-width: ${props => props.theme.width.min}
}
#root{
	height:100%;
	
	
}
body {
	
	line-height: 1;
	font-family: ${props => props.theme.font.family.main};
	font-size: ${props => props.theme.font.size};
	text-rendering: optimizeLegibility;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
input,
button,
textarea {
	font-family: ${props => props.theme.font.family.input};
	font-size: inherit;
	outline: none;
	resize: none;
}
button {
	font-family: ${props => props.theme.font.family.main};
	
	cursor: pointer;
	color: inherit;
	background-color: inherit;
}
a {
	color: inherit;
}
a:link,
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
ul li {
	list-style: none;
}
img {
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}
`
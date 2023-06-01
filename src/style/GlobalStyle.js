import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	button {
		width: 303px;
		height: 45px;
		background: #52B6FF;
		border-radius: 5px;
		border-style: none;
		font-family: Lexend Deca;
		font-weight: 400px;
		font-size: 21px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #FFFFFF;
		padding: 0 20px;
		&:disabled {
			background-color: lightgray;
		}
	}
	input {
		width: 303px;
		height: 45px;
		background: #FFFFFF;
		border: 1px solid #D4D4D4;
		border-radius: 5px;
		font-family: Lexend Deca;	
		font-size: 20px;	
		margin-bottom: 6px;
		padding: 0 10px;
		font-size: 18px;
		display: flex;
		align-items: center;
		&::placeholder{
			font-style: normal;
			color: #DBDBDB;
			font-family: Lexend Deca;
			font-style: normal;
			font-size: 20px;
			font-weight: 400;
		}		
	}
`

export default GlobalStyle
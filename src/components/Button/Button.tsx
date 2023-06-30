import React, { MouseEvent } from "react"
import { StyledButton } from "./Button.styles"

type Props = {
	onClick: Function
	children: React.ReactNode
}

export const Button: React.FC<Props> = (props) => {
	const { onClick, children } = props
	const onClickHandler = (event: MouseEvent) => {
		event.preventDefault()
		console.log("woot!")
		onClick()
	}
	return (
		<StyledButton role={"button"} onClick={onClickHandler}>
			{children}
		</StyledButton>
	)
}

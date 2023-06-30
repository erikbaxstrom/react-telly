import React from "react"

type PropsType = {
	onChange: Function
	value: string
	placeholder: string
}

export const TextInput: React.FC<PropsType> = ({
	onChange,
	value,
	placeholder,
}) => {
	return (
		<input
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
				onChange(e.target.value)
			}
		/>
	)
}

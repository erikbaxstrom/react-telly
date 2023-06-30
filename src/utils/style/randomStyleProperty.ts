import { COLORS } from "./constants"

export const getRandomGrayColor = (): string => {
	const shadesOfGray = [
		COLORS.neutral_black,
		COLORS.neutral_gray,
		COLORS.neutral_white,
		"#d4d4d4",
		"#b4b4b4",
		"#909090",
		"#636363",
		"#494848",
	]
	const randomNumber = Math.floor(Math.random() * shadesOfGray.length)
	return shadesOfGray[randomNumber]
}

export const getRandomAnimationTime = (): number => {
	const times = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3]
	const randomNumber = Math.floor(Math.random() * times.length)
	return times[randomNumber]
}

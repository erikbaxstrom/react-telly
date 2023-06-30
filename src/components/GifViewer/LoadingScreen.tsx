import React from "react"
import {
	getRandomAnimationTime,
	getRandomGrayColor,
} from "../../utils/style/randomStyleProperty"
import { BlinkPixel, LoadingWrapper } from "./GifViewer.styles"

export const LoadingScreen: React.FC = () => {
	const generateArray = (numberOfItems: number): number[] =>
		Array.from(Array(numberOfItems).keys())

	return (
		<LoadingWrapper>
			{generateArray(504).map((item: number) => (
				<BlinkPixel
					color={getRandomGrayColor()}
					time={getRandomAnimationTime()}
					key={item}
				/>
			))}
		</LoadingWrapper>
	)
}

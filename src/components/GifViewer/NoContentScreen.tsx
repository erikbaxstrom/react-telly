import React from "react"
import {
	NoSignalText,
	NoSignalColorWrapper,
	NoSignalColorBar,
} from "./GifViewer.styles"

type Props = {
	title?: string | null
}

export const NoContentScreen: React.FC<Props> = ({
	title = "No Signal :(",
}) => {
	return (
		<React.Fragment>
			<NoSignalText>{title}</NoSignalText>
			<NoSignalColorWrapper>
				<NoSignalColorBar />
				<NoSignalColorBar />
				<NoSignalColorBar />
				<NoSignalColorBar />
			</NoSignalColorWrapper>
		</React.Fragment>
	)
}

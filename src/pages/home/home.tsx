import React from "react"
import { PageWrapper } from "./home.styles"
import { Header, GifViewer, Button } from "../../components"
import { useGif } from "../../data/hooks/useGif"

export const DEFAULT_KEYWORD = "dance"

export const HomePage = () => {
	const {
		data: gif,
		refetch: fetchNewGif,
		isLoading,
		isFetching,
		isError,
	} = useGif(DEFAULT_KEYWORD)

	const [tvOn, setTvOn] = React.useState<boolean>(false)
	const buttonMsg: string = tvOn ? "Change channel" : "Turn on"

	const handleClick = (): void => {
		fetchNewGif()
		if (!tvOn) {
			setTvOn(true)
		}
	}

	return (
		<PageWrapper>
			<Header>React Telly</Header>
			<GifViewer
				gifUrl={gif?.data.images.downsized_medium.url}
				altText={gif?.data.title}
				isLoading={isLoading || isFetching}
				isError={isError}
				isNoGifReturned={isError}
			/>
			<Button onClick={handleClick}> {buttonMsg}</Button>
		</PageWrapper>
	)
}

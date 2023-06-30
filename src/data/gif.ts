import { DEFAULT_KEYWORD } from "../pages/home/home"

export const RANDOM_GIPHY_ENDPOINT = "/v1/gifs/random"

const API_KEY: string | undefined = process.env.REACT_APP_GIPHY_API_KEY

export type GifType = {
	data: {
		title: string
		images: {
			downsized_medium: {
				url: string
			}
		}
	}
}

export const fetchGif = async (
	keyWord: string | undefined
): Promise<GifType> => {
	const tag: string = keyWord ? keyWord : DEFAULT_KEYWORD

	const requestUrl: string = `https://api.giphy.com${RANDOM_GIPHY_ENDPOINT}?api_key=${API_KEY}&rating=g&tag=${tag}`

	const response: Response = await fetch(requestUrl, {
		headers: {
			"Content-Type": "application/json",
		},
		method: "GET",
	})

	const gif: GifType = await response.json()

	return gif
}

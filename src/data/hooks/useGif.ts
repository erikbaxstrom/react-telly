import { useQuery } from "react-query"
import { fetchGif, GifType } from "../gif"

export const GIF_QUERY_KEY: string = "fetchingGif"

export const useGif = (keyWord: string) =>
	useQuery<GifType, Error>([GIF_QUERY_KEY], async () => fetchGif(keyWord), {
		enabled: false,
	})

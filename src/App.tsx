import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from "./pages"

const queryClient = new QueryClient()

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
])

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<main>
				<RouterProvider router={router} />
			</main>
		</QueryClientProvider>
	)
}

export default App

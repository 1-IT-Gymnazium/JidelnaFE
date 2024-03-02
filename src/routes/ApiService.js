export const load = async (id, lunch_out) => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/users/${id}`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}
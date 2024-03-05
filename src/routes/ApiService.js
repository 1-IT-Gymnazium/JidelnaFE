export const loadUser = async (id) => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/users/${id}`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const loadUsers = async () => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/usersAll`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const loadUsersWithLunchOut = async () => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/users`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}


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
		const response = await fetch(`http://127.0.0.1:8000/users/lunch`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const loadUsersWithLunchOut = async () => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/users/lunch`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const getLunchesOut = async () => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/lunches/out/total`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const getLunchesRest = async () => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/lunches/rest/total`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}



export const uploadUser = async (id, name, grade) => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/users`, {
			method: 'POST',
			headers: {
				'accept' : 'application/json',
				'Content-Type': 'application/json'
			}, body: JSON.stringify({id: id, name:name, grade:grade,lunches:[]})
		})
		if (response.ok) {
			return await response.json()
		}
		return null
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const getUsersCount = async () => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/users/total`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const deletUser = async (id) => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/users/${id}`, {
			method: 'DELETE'
		})
		if (response.ok) {
			return await response.json()
		}
		return null
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const deleteGrade = async (grade) => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/user/grade/${grade}`, {
			method: 'DELETE'
		})
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const getUserName= async (id) => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/users/${id}/name`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const createUsers = async (data) => {
	try {
		const response = await fetch('http://127.0.0.1:8000/users', {
			method: 'POST',
			headers: {
				'accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			console.log('Data sent successfully');
		} else {
			console.error('Failed to send data:', response.statusText);
		}
	} catch (error) {
		console.error('Error sending data:', error.message);
	}
}
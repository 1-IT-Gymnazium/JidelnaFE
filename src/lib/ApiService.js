import {countOut, countRest} from './count.js';

export const loadUser = async (id) => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/user/${id}`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const loadUsers = async () => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/users/All`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const loadUsersWithLunchOut = async () => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/users/WithLunchOut`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const getLunchesOut = async () => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/lunches/count/out`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const getLunchesRest = async () => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/lunches/count/rest`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}



export const uploadUser = async (id, name, grade) => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/create/user`, {method: 'POST',
			headers: {
				'accept' : 'application/json',
				'Content-Type': 'application/json'
			}, body: JSON.stringify({id: id, name:name, grade:grade,lunches:[]})
		})
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const getUsersCount = async () => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/users/count`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const deletUser = async (id) => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/user/delete/${id}`, {
			method: 'DELETE'
		})
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export const deleteGrade = async (grade) => {
	try {
		const response = await fetch(`http://127.0.0.1:8000/user/delete/by/grade/${grade}`, {
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
		const response = await fetch(`http://127.0.0.1:8000/user/name/${id}`)
		return await response.json()
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}
import { writable } from 'svelte/store';

export const userInfoStore = writable([])

// Function to add a new user and their lunch
export function addUserAndLunch(newUser, newLunch, newid) {
	// Update the store by appending the new user and lunch to the existing array
	userInfoStore.update(users => {
		return [...users, { name: newUser, lunch: newLunch, id: newid}]
	})
}

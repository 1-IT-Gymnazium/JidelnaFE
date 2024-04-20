# Jidlena FE

## Introduction
This is an frontend created in svelte for school cafeteria for chipping lunches.

## Use cases

### **Use Case: Creating a New User**
- **Description:** The administrator creates a new student user in the system.
- **Actor:** Administrator
- **Basic Flow of Events:**
    1. The administrator navigates to the user management area in the system.
    2. The administrator selects the option to create a new user.
    3. The system presents a form requesting necessary student details.
    4. The administrator enters the student's details into the form fields.
    5. The administrator submits the form.

### Use Case: Student Tag Scanning
- **Description:** The system scans the RFID tag as a student presents it.
- **Actor:** RFID scanner
- **Basic Flow of Events:**
    1. The student presents their card to the RFID scanner.
    2. The scanner reads and verifies the card data.
    3. The system retrieves the student's lunch number if has any.

### Use Case: Assigning Lunch to Student
- **Description:** The system assigns lunch to the student after validating their RFID card.
- **Actor:** Lunch assignment system.
- **Basic Flow of Events:**
    1. The system assigns a lunch to the student.
    2. The system logs the assignment in the student's account.


## Authentication

### Login Component

The login form component is a part of our application developed using Svelte. This component takes care of user authentication.

### Design

The component has a minimalistic and efficient design having two main fields; `username` and `password`, and a `submit` button.

### Login Functionality

The `login` function is triggered when the form is submitted. This function sends a `POST` request to the `/admins/login` endpoint, with the `username` and `password` as body parameters.

If the response status is <300, it is translated as 'Success' and the `user` observable store is updated with returned `user` data.

Should there be any errors during the request or from the server response, they are caught, logged to the console, and our `currentError` state is updated to reflect this error.

## Error Handling
### Error Handling in Login Component

In the `login` function of the Svelte Login Component, error handling is done using the `.catch` method of the Promise returned by the `fetch` method when making the API request to the `/admins/login` endpoint.

### Error Handling Steps

1. **API Response Status Code Check:** After the API request is made, there is a check on the HTTP status code of the response. If the status code is greater than `299` (indicating an error response from the server), the `currentError` variable is set to 'Something went wrong with the server'.

    ```javascript
    if (res.status > 299) currentError = 'Something went wrong with the server';
    ```

2. **API Response Parsing:** If the HTTP status code of the response is less than `299` (indicating a successful response), the response body is parsed to JSON. If there is an issue with parsing the response to JSON, it will lead to a rejection of the Promise which will be caught in the `.catch` block below.

3. **Promise Rejection Catch:** If an error is thrown at any point during the execution of the Promise chain (like network failure, issue with parsing response to JSON, etc.), it will be caught in the `.catch` block. In the catch block, the error is assigned to the `currentError` variable and also logged to the console.

    ```
    catch((error) => {
    currentError = error;
    console.log('Error logging in: ', currentError);
    });
    ```
##### Note:

The `currentError` variable holds the latest error occurred during the login. If `currentError` is not null, then it means an error occurred while logging in.

It's important to note that this error handling strategy doesn't differentiate between types of errors beyond checking the HTTP response status code. Any other issues such as network errors or runtime errors are treated in a generic manner.
## Source Code
All source code is stored on GitHub at [GitHub Repository](https://github.com/vendeliin/JidelnaBackEnd.git).

## Technologies Used
- Svelte
- SvelteKit
- JS

## Sources
- [Svelte Documentation](https://svelte.dev/docs/introduction)
  - [Svelte Modal](https://svelte.dev/examples/modal)
  - [Svelte FileDrop](https://svelte.dev/repl/961863cf346c474888b658b98dcbf287?version=3.46.4)
  - [Svelte Login](https://github.com/consultingninja/loginFromAPI)
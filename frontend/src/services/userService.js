import axios from 'axios';
const USER_BASE_RES_API_URL = 'http://localhost:8080/user';
class UserService {
    createUser(user) {
        return axios.put(`${USER_BASE_RES_API_URL}/register`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
async function handleSubmit(e) {
        e.preventDefault();
        try {            const response = await fetch('${USER_BASE_RES_API_URL}/register', {
                method: 'POST',
                headers: {  
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(FormData)
            })
            if (response.ok) {
                navigate('/');
            }
        } catch (error) {
            console.error('Error creating account:', error);
        }
    }
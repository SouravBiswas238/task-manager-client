import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user.email;
        const name = user?.user.displayName;

        const sUser = { email, name };

        if (email) {
            fetch('http://localhost:5000/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(sUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                    if (data.success === true) {
                        toast.success('User crated Successfully');
                    }
                    else {
                        toast.warning('User already exist database');
                    }
                })
        }

    }, [user]);
    return [token];
}

export default useToken;
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../features/auth/authReducer'

const Login = () => {


    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    console.log(user)

    const handleLogin = () => {
        let user = {
            name: 'Huitzitzili',
            username: 'Leon',
            email: 'leon@hotmail.com'
        }
        dispatch(setUser(user))
    }

    const handleLogout = () => {
        dispatch(setUser(false))
    }

    return (
        <div>
            {!user && (<button onClick={handleLogin}>Log in</button>)}
            {user && (<button onClick={handleLogout}>Log out</button>)}

        </div>
    )
}

export default Login

import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../features/auth/authReducer'

const Login = () => {


    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    console.log(user)
    
    const handleClick = () => {
        const user = {
            name: 'Huitzitzili',
            username: 'Leon',
            email: 'leon@hotmail.com'
        }
        dispatch(setUser(user))
    }


    return (
        <div>
            <button onClick={handleClick}>Log in</button>
        </div>
    )
}

export default Login

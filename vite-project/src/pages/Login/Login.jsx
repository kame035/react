import {useState} from "react";
import './Login.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const newErrors = {}

        if(!email){
            newErrors.email = 'Email должен быть заполнен'
        }else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = 'Не корректный email'
        }

        if(!password){
            newErrors.password = 'Пароль должен быть заполнен'
        }else if(password.length < 6 ){
            newErrors.password = 'Пароль должен содердать больше 6 символов'
        }

        if(!confirmPassword){
            newErrors.confirmPassword = 'Подтверждение пароля обязательно'
        }else if(password !== confirmPassword){
            newErrors.confirmPassword = 'Пароли не совпадают'
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validateForm()){
            console.log({email, password, confirmPassword})
        }
    }

    return (
        <>
            <div className="container">
                <h1>Это страница логина</h1>

                <form onSubmit={handleSubmit} className='login-form'>
                    <input type="text" className={errors.email ? 'error' : ''} id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    { errors.email && <span>{errors.email}</span> }
                    <input type="password" className={errors.password ? 'error' : ''} id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    { errors.password && <span>{errors.password}</span> }
                    <input type="password" className={errors.confirmPassword ? 'error' : ''} id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    { errors.confirmPassword && <span>{errors.confirmPassword}</span> }
                    <input type="submit" value="Войти"/>
                </form>
            </div>
        </>
    )

}
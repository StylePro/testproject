import style from './style.module.css'import Greeting from "../Greeting.tsx";const Login = () => {    const name = 'Hi'    return (        <div >           <h1 className={style.heading}>Вы перешли в раздел авторизации</h1>            <Greeting name={name}/>        </div>    );};export default Login;
import { Button } from "antd";
import Box from '../../Box';
import Input from "antd/lib/input/Input";
import styles from './registration.module.css';



export default function Registration() {
    var login;
    var password;
    var email;

    function sendAuthData() {
        var auth_json = {
            "login": login,
            "password": password,
            "email": email
        }
        fetch('http://localhost:8080/register', {
            method: 'POST',
            body: JSON.stringify(auth_json),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    }

    function loginChange(e) {
        login = e.target.value;
        console.log(login)
    }

    function passwordChange(e){
        password = e.target.value;
        console.log(password)
    }

    function emailChange(e){
        email = e.target.value;
        console.log(email)
    }

    return <Box>
        <Input placeholder="login" className={styles.item} onChange={loginChange}/>
        <Input placeholder="password" className={styles.item} onChange={passwordChange}/>
        <Input placeholder="email" className={styles.item} onChange={emailChange}/>
        <Button className={styles.item} onClick={sendAuthData}>submit</Button>
    </Box>
}
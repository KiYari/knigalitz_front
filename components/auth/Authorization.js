import { Button } from "antd";
import Box from '../Box';
import Input from "antd/lib/input/Input";
import styles from './auth.module.css';
import axios from "axios";
import Error from "./error/Error";
import { useState } from "react";



export default function Authorization() {
    var login = "root";
    var password = "root";
    const [response, setResponse] = useState()
    const [error, setError] = useState()

    function sendAuthData() {
        var auth_json = {
            "login": login,
            "password": password
        }
        fetch('http://localhost:8080/auth', {
            method: 'post',
            body: JSON.stringify(auth_json),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())        
        .then(res => {
            setResponse(res)
            console.log(res)
            console.log("then: " + response.error)
            if(errorPresent) setError(response.error)
        });
    }

    function errorPresent(response) {
        try {
            return response.error != null
        } catch(e) {
            return false;
        }
        
    }

    function loginChange(e) {
        login = e.target.value;
    }

    function passwordChange(e){
        password = e.target.value;
    }

    return <Box>
        <Input placeholder="login" className={styles.item} onChange={loginChange}/>
        <Input placeholder="password" className={styles.item} onChange={passwordChange}/>
        <Button className={styles.item} onClick={sendAuthData}>submit</Button>
    </Box>
}
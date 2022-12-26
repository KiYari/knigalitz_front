import { Button } from "antd";
import React from "react";
import reactUseCookie from "react-use-cookie";

export default function Profile() {
    const [token, setToken] = reactUseCookie('token', '0');

    function 

    function parse(value) {
        var profile_json = {
            "description": null,
            "birthday": null,
            "first_name": null,
            "last_name": null
        };


        

        fetch('http://localhost:8081/register', {
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



    return (<div>
        <Button>take profile</Button>
    </div>)
}
import { Button } from 'antd';
import axios from 'axios'
import { useState } from 'react'
import Layout from '../layout/Layout'

export default function Home() {
  var axios = require('axios');
  const [tryn, setTryn] = useState();
  var json = {
    "login": "eida",
    "password": "pass", 
    "email": "mail@mail.sss"
}

  function handleFetch() {
    axios.get("http://localhost:8080/")
    .then(res => setTryn(res))
    console.log(tryn)
  }

  function handleFetch2() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(json)
    axios({
      url: 'http://localhost:8080/',
      method: 'post',
      data : JSON.stringify(json),
      redirect: 'follow',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

  function handleFetch3() {
    axios.post("http://localhost:8080/auth/login")
    .then(res => setTryn(res))
  }
  
  return (
    <Layout>

      <Button onClick={handleFetch}>FETCH</Button>
      <Button onClick={handleFetch2}>FETCH2</Button>
      <Button onClick={handleFetch3}>FETCH3</Button>
      
    </Layout>
  )
}

import axios from 'axios'
import React from 'react'

const createLoginQR = () => {
  const query = new URLSearchParams({
    client_key: 'awqc9spoo1gfge2y',
    scope: 'user.info.basic',
    next: 'http://127.0.0.1:5173/',
    state: 'key%3Dabc'
  })

  axios.get('https://open-api.tiktok.com/v0/oauth/get_qrcode?' + query).then((res) => res.json()).then((res) => console.log(res)).catch((err) => console.log(err))
}

function GenerateLogin() {
  return (
    <div>
      <h2>Please log in using next method</h2>
      <button onClick={createLoginQR}>
        Login with QR
      </button>
    </div>
  )
}

export default GenerateLogin    
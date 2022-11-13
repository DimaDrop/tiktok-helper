import React from 'react'
import { data } from '../utils/constants'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <a href="/tos">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
            @ {new Date().getFullYear()} Vlados Website
            <a href={`mailto:${data.supportEmail}`}>{data.supportEmail}</a>
        </div>
    )
}

export default Footer
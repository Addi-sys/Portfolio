import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Marc Coxon
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

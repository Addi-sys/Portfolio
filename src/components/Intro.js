import React from 'react'
import profileImage from '../images/profileimage.png'
import { Jumbotron, Container } from 'react-bootstrap'

export default function Intro() {
    return (
        <div>
            <Container>
                <Jumbotron style={{
                    backgroundColor: "#0d47a1",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}>
                    <div>
                        <img src={profileImage} style={{ height: "120px", width: "auto" }} alt="profileImage" />
                    </div>
                    <h1>Welcome to my page!</h1>
                </Jumbotron>
            </Container>
        </div>
    )
}

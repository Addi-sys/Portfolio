import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap'

export default function Intro() {
    return (
        <div>
            <Container>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </Container>
        </div>
    )
}

import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordconfirmRef = useRef()
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 classname="text-center mb-4">
                        Signup
                    </h2>

                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-conform">
                            <Form.Label>Password-conform</Form.Label>
                            <Form.Control type="password" ref={passwordconfirmRef} required></Form.Control>
                        </Form.Group>
                        <Button classname="w-100" type="submit" > Signup </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div classNames="w-100 text-center mt-2">
                Already have an account ? login
            </div>
        </>
    )
}

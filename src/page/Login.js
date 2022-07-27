import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ({ setAuthenticate }) => {

    const navigate = useNavigate()

    const loginUser = (event) => {

        //이벤트 정지
        event.preventDefault()
        console.log("login user function issue.")
        setAuthenticate(true)
        navigate('/')

    }

    return (
        <Container>
            <Form onSubmit={(event) => loginUser(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                {/* type이 submit이면 refresh됨 왜? form태그 안에 있기 때문. 그래서 onClick이 아닌 form에 onSubmit 생성 */}
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Login

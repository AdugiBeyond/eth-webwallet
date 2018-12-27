import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (

        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='images/logo.png' /> 黑马钱包
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='private key' />

                        <Button color='teal' fluid size='large'>
                            私钥导入
                        </Button>
                    </Segment>
                </Form>
                <br />
                <Message size="mini">
                    没有账号? <a href='#'>&nbsp; 立即创建</a>
                </Message>
                <br/>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='12 words' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <Button color='teal' fluid size='large'>
                            助记词导入
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
)
export default LoginForm

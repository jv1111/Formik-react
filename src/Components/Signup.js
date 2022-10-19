import { Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
    const validate = Yup.object({
        firstName: Yup
            .string()
            .max(15, 'Must be 15 character or less')
            .required('Required'),
        lastName: Yup
            .string()
            .max(15, 'Must be 15 character or less')
            .required('Required'),
        email: Yup
            .string()
            .email('Email is required')
            .required('Required'),
        password: Yup
            .string()
            .max(15, 'Must be 15 character or less')
            .required('Required'),
        confirmPassword: Yup
            .string()
            .oneOf([Yup.ref('password'), null], 'Password not match')
            .required('Required'),
    })
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={onSubmit}
        >
            {formik => (
                <div>
                    <h1>Sign Up</h1>
                    {console.log(formik.value)}
                    <Form>
                        <TextField label='First Name' name='firstName' type='text' />
                        <TextField label='Last Name' name='lastName' type='text' />
                        <TextField label='Email' name='email' type='email' />
                        <TextField label='Password' name='password' type='password' />
                        <TextField label='Confirm Password' name='confirmPassword' type='password' />
                        <Button variant='dark' type='submit'>Register</Button>
                        <Button variant='danger'>Reset</Button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
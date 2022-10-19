import { Formik, Form } from 'formik';
import { TextField } from './TextField'

export const Signup = () => {
    const initialValues = {
        firstMame: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    return (
        <Formik
            initialValues={initialValues}
        >
            {formik => (
                <div>
                    <h1>Sign Up</h1>
                    <Form>
                        <TextField label='First Name' name='firstName' type='text'/>
                        <TextField label='Last Name' name='lastName' type='text'/>
                        <TextField label='Email' name='email' type='email'/>
                        <TextField label='Password' name='password' type='password'/>
                        <TextField label='Confirm Password' name='confirmPassword' type='password'/>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
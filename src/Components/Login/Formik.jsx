import { Formik, Form, Field, ErrorMessage} from 'formik'
import {Col} from 'reactstrap'
import * as yup from 'yup';

function Login () {

    const validationSchema = yup.object().shape({
        user: yup.string().required('Usuário é obrigatório'),
        password: yup.string().required('Password é obrigatório').min(6, 'A senha deve ter pelo menos 6 caracteres')
      });

    return (
        <Col className='d-flex flex-column p-5' sm={6} md={4} style={{margin: '200px auto', border:'solid 1px #001f3d' }}>
        <h1>Login</h1>
        <Formik initialValues={{ user: '', password: '' }}
        validationSchema={validationSchema}

        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2 ))
                setSubmitting(false)
            }, 400)
        }}
        >
            {({ isSubmittting }) => (
                <Form className='d-flex flex-column'>
                    <Field className='mb-3 p-2' type='text' name='user' placeholder='Usuário'   />
                    <ErrorMessage name='user' component='div' />
                    <Field className='mb-3 p-2' type='password' name='password' placeholder='Senha' />
                    <ErrorMessage name='password' component='div' />
                    <button className='mb-3 p-3' type='submit' disabled={isSubmittting}>
                        Enviar 
                    </button>         
                </Form>
            )}
        </Formik>
        </Col>
         

    )
}

export default Login
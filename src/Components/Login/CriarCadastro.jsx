import { Col, Label, FormGroup, Form } from "reactstrap";
import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Submit from "./Submit";
import axios from 'axios'

function CriarCadastro() {
    const [post, setPost] = useState({
        title: '',
        subTitle: '',
        postbody: '',
        image: '',
    })


    const submit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const postData = Object.fromEntries(formData)
        const image = postData.image
         try {
            const response = await axios.post('/post', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            if (response.data.success) {
                alert('Form data successfully stored in MySQL database')
                setPost({
                    title: post.title,
                    subTitle: post.subTitle,
                    postbody: post.postbody,
                    image: post.image
                })
            } else {
              alert('Error storing form data in MySQL database');
            }
          } catch (error) {
            console.error(error);
            alert('Error storing form data in MySQL database');
          }
          
    }

    function handleChange(e) {
        e.persist()
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    return (
        <Col lg='15' sm='15'  className="container d-flex justify-content-center" style={{ margin: '200px auto' }}>
        <Form onSubmit={submit}>
            <h2>Cadastrar nova postagem</h2>
            <FormGroup floating>
                <Input 
                text="Título do post" 
                type="text" 
                name="title" 
                placeholder="Título" 
                onChange={handleChange}
                defaultValue={post.title}
                />
                <Label for="title">
                    Título
                </Label>
            </FormGroup>

            <FormGroup floating>
                <Input 
                text="Subtítulo do post" 
                type="text" 
                name="subTitle" 
                placeholder="Subtítulo" 
                onChange={handleChange}
                defaultValue={post.subTitle}
                />
                <Label for="subTitle" className="form-label">
                    Subtítulo
                </Label>
                
            </FormGroup>


            <FormGroup floating>
                <TextArea 
                    text="Postagem" 
                    name="postbody" 
                    type="textarea" 
                    placeholder="Digite aqui a postagem" 
                    onChange={handleChange}
                    defaultValue={post.postbody}
                />
                <Label for="postbody" className="form-label">
                    Digite o texto do post
                </Label>
            </FormGroup>

            
            <FormGroup floating>
                <Input 
                text="Enviar imagem"
                type='File'
                onChange={handleChange}
                defaultValue={post.image}
                />
                <Label>
                    Imagem do post
                </Label>
            </FormGroup>

            <Submit
            text="Cadastrar"
            name='submitCadastro'
            />
                
        
        </Form>
        </Col>
    )
}

export default CriarCadastro;
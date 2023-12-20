import { Col } from "reactstrap";
import Cards from "./Cards";
import axios from 'axios'
import { useEffect, useState } from "react";

function Cadastros() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('/posts').then(response => {
            setPosts(response.data)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <Col lg='15' sm='15'  className="container d-flex justify-content-center bg-primary" style={{ margin: '200px auto' }}>
            {posts.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <img src={post.image} alt={post.title} />
                </li>
            ))}

        </Col>
    )
}

export default Cadastros;
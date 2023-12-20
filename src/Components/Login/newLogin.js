import React from 'react'
import authService from '../Services/auth.service'
import {Col} from 'reactstrap'
import { Navigate } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  
            nickName: '',
            password: '',
            redirectTo: null,
        }
    }


    sendLogin = async (e) => {
        e.preventDefault()
        let data = {
            nickName : this.state.nickName,
            password : this.state.password
        }
        try {
            const res = await authService.authenticate(data)
            console.log('res', res.data)
            authService.setLoggedUser(res.data)
        } catch (error) {
            console.log('error')
            alert("Errou ao efetuar login")
        }}


    render() {
        if(this.state.redirectTo) {
            return <Navigate to={this.state.redirectTo} />

            
        }
        return (
            <Col lg='15' sm='15'  className="container d-flex justify-content-center" style={{ margin: '200px auto' }}>
                <div className="card mt-5 w-50">
                    <div className="card-body">
                        <form onSubmit={this.sendLogin} className='danger'>
                            <div className="form-group">
                                <label htmlFor="nickName">Usuário</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    value={this.state.nickName}
                                    onChange={e => this.setState({nickName : e.target.value})}
                                    id="nickName" 
                                    placeholder="Usuário" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    value={this.state.password}
                                    onChange={e => this.setState({password : e.target.value})}
                                    id="password" 
                                    placeholder="Senha"/>
                            </div>
                            <button type="submit" className="btn btn-secondary">Entrar</button>
                        </form>
                    </div>
                </div>
            </Col> 
        )}
    }




export default Login
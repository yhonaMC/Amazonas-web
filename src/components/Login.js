import React from 'react'

const Login = () => {
    return (
        <div>
            <div class="div-usuario">
                <div class="row usuario">
                    <h1 class="Headline1">Login</h1>
                </div>
                <form id="formulario">
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="name" class="form-label body1Regular label-edit">Usario</label>
                        <input id="name" name="name" class="ms-1 edit body1Regular form-control" type="text" placeholder="" />
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="password" class="form-label body1Regular label-edit">Password</label>
                        <input id="password" name="password" class="ms-1 edit body1Regular form-control" type="password" placeholder="" />
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                    <button type="submit" class="btn btn-primary mb-2">Aceptar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login;
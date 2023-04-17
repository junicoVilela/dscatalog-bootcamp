import React, { useState } from "react";
import AuthCard from "../Card";
import {Link, useHistory} from "react-router-dom";
import ButtonIcon from "../../../../core/components/ButtonIcon";
import { useForm } from 'react-hook-form';
import './styles.scss';
import {makeLogin} from "../../../../core/utils/request";
import {saveSessionData} from "../../../../core/utils/auth";

type FormData = {
    username: string;
    password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [hasError, setHasError] = useState(false);
  const history = useHistory();

  const onSubmit = (data: FormData) => {
      makeLogin(data)
      .then(response => {
          setHasError(false);
          saveSessionData(response.data);
          history.push('/admin');
      })
      .catch(() => {
          setHasError(true);
      })
  }
  
  return (
      <AuthCard title="login">
        {hasError && (
        <div className="alert alert-primary d-flex align-items-center mt-5" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                Usuário ou senha inválidos!
            </div>
        </div>
        )}
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <input
                type="email"
                className="form-control input-base margin-bottom-30"
                placeholder="Email"
                name="username"
                ref={register({required: true})}
            />
            <input
                type="password"
                className="form-control input-base"
                placeholder="Senha"
                name="password"
                ref={register({required: true})}
            />
            <Link to="/admin/auth/recover" className="login-link-recover">
                Esqueci a senha?
            </Link>
            <div className="login-submit">
                <ButtonIcon text="logar" />
            </div>
            <div className="text-center">
                <span className="not-registered">
                    Não tem Cadastro?
                </span>
                <Link to="/admin/auth/register" className="login-link-register">
                    CADASTRAR
                </Link>
            </div>
        </form>
      </AuthCard>
  )
}

export default Login;
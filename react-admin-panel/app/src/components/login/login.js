import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ""
        }
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        const {password} = this.state;
        const {login, lengthErr, loginErr} = this.props;

        let renderLogErr, renderLengthErr;

        loginErr ? renderLogErr = <span className='login-error'>Введен неправильный пароль</span> : null;
        lengthErr ? renderLengthErr = <span className='login-error'>Пароль должен быть длиннее 7 символов</span> : null;

        return (
            <div className='login-container'>
                <div className='login'>
                    <h2 className="uk-modal-title uk-text-center">Авторизация</h2>
                    <div className="uk-margin-top uk-text-lead">Пароль</div>
                    <input
                        type="password"
                        name=""
                        id=""
                        className='uk-input uk-margin-top'
                        placeholder='Пароль:'
                        value={password}
                        onChange={(e) => this.onPasswordChange(e)}
                    />

                    {renderLogErr}
                    {renderLengthErr}

                    <button
                        className='uk-button uk-button-primary uk-margin-top'
                        type="button"
                        onClick={() => login(password)}
                    >Вход</button>
                </div>
            </div>
        )
    }
}
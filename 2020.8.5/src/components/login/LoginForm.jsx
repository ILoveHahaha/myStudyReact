import React from 'react';
import classnames from 'classnames';
import { login } from "../../actions/login";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import validateInput from '../../utils/validations/login';

class LoginForm extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.login(this.state).then(
        (res) => this.props.history.push('/'),
        (err) => this.setState({errors: err.response.data.errors, isLoading: false})
      )
    }
  };

  isValid = (e) => {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors })
    }
    return isValid
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render () {
    const { username, password, errors, isLoading } = this.state;
    return (
      <form onSubmit={ this.onSubmit }>
        <h1>Login</h1>
        { errors.from && <div className={'alert alert-danger'}>{ errors.from }</div> }
        <div className={ 'form-group' }>
          <label className={ 'control-label' }>Username</label>
          <input
            type={ 'text' }
            name={ 'username' }
            value={ username }
            onChange={ this.onChange }
            className={ classnames('form-control', { 'is-invalid': errors.username }) } />
          { errors.username && <span className={ 'form-text text-muted' }>{ errors.username }</span> }
        </div>
        <div className={ 'form-group' }>
          <label className={ 'control-label' }>Password</label>
          <input
            type={ 'password' }
            name={ 'password' }
            value={ password }
            onChange={ this.onChange }
            className={ classnames('form-control', { 'is-invalid': errors.password }) } />
          { errors.password && <span className={ 'form-text text-muted' }>{ errors.password }</span> }
        </div>
        <div className={ 'form-group' }>
          <button disabled={ isLoading } className={ 'btn btn-primary btn-lg' }>Login</button>
        </div>
      </form>
    )
  }
}

export default withRouter(connect(null, { login })(LoginForm));

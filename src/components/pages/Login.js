import React, { Component } from 'react';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validPasswordRegex = RegExp(/^(?=.{0,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%*!^&+=]).*$/);

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            submitted: false,
            email_error: true,
            email_pattern_error: false,
            pwd_error: true,
            pwd_pattern_error: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e, type) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        if(type === 'email') {
            let flag = (e.target.value === '') ? true : false;
            let isvalid_pattern = validEmailRegex.test(e.target.value);
            this.setState({ email_error: flag, email_pattern_error: !isvalid_pattern });    
        } else {
            let flag = (e.target.value === '') ? true : false;
            let isvalid_pattern = validPasswordRegex.test(e.target.value);
            this.setState({ pwd_error: flag, pwd_pattern_error: !isvalid_pattern });    
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        // const { email, password } = this.state;
        // const { dispatch } = this.props;
        // if (email && password) {
        //     dispatch(userActions.login(email, password));
        // }
    }
    
    render() {
        const { loggingIn } = this.props;
        const {email, password, submitted, email_pattern_error, email_error, pwd_error, pwd_pattern_error} = this.state;

        return (
            <div className="Login">
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                        <label htmlFor="email">email</label>
                        <input type="text" className="form-control" name="email" value={email} 
                        onChange={(e) => this.handleChange(e, 'email')} />
                        {submitted && !email && <p className="text-danger">Email is Required!</p>}
                        {submitted && !email_error && email_pattern_error && <p className="text-danger">Invalid Email!</p>}
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} 
                        onChange={(e) => this.handleChange(e, 'password')} />
                        {submitted && !password && <p className="text-danger">Password is Required!</p>}
                        {submitted && !pwd_error && pwd_pattern_error && <p className="text-danger">Must include one uppercase letter and one special character</p>}
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {loggingIn &&
                            <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;

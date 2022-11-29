import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from '../../assets/images/login/76432196.png'
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
    const { login, google, user } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        login(email, password, name)
            .then(res => {
                const user = res.user;
                setLoginUserEmail(email)
                // toast.success('Login Successfully');
                // form.reset();

            })
            .catch(err => console.error(err));


    }


    const handleGoogle = () => {
        google()
            .then(result => {
                const user = result.user
                if (user) {
                    toast.success('Login Successfully')
                    navigate(from, { replace: true })

                }

            })
            .catch(error => console.error(error))
    }


    return (
        <div className="hero my-20">
            <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className='text-5xl text-center font-bold'>Login Here</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>Have an new account <Link className=' font-bold text-orange-500' to={'/signup'}>Registration</Link></p>
                    <div className="">
                        <button onClick={handleGoogle} className='btn mt-4 btn-success mx-5'> Google</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Login;
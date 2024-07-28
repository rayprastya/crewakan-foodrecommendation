import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../public/css/login.css'

export default function Login() {
  return (
    <main>
      <div className="login shadow">
      <div className="text-header">Login</div>
        <p className="text-body mt-2">Tidak punya akun ? <a href="#"> Daftar</a></p>
        <a className="btn fw-semibold text-dark rounded-5 w-100 mt-2" style={{border: 'solid .3px #d0d0d0'}} href="#"><img src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-768x768.png" alt="google" style={{width: '30px', height: '30px', marginRight:'10px'}} /> Masuk dengan Google</a>
        <div className="d-flex my-3">
            <div className="col"><hr /></div><span className="align-self-center mx-3" style={{fontSize:"small"}}>atau</span><div className="col"><hr /></div>
        </div>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label ms-2">Email address</label>
                <input type="email" className="form-control rounded-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label ms-2">Password</label>
                <input type="password" className="form-control rounded-5" id="exampleInputPassword1" />
            </div>
            <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Biarkan saya tetap masuk
                </label>
            </div>
            <div className="d-flex w-100">
                <button type="submit" className="btn btn-primary w-100 rounded-5">Login</button>
            </div>
            </form>
      </div>
    </main>
  );
}

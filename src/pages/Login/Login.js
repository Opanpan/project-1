import './login.scss';

function Login() {
  return (
    <>
      <div className='container-fluid custom-container'>
        <div className='row' style={{ height: '100vh' }}>
          <div className='col d-flex justify-content-center align-items-center'>
            <div className='card login-card'>
              <h3 className='text-center'>Sign In</h3>
              <div class='input-group mt-3 mb-3'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Username'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </div>

              <div class='input-group mb-5'>
                <input
                  type='password'
                  class='form-control'
                  placeholder='Password'
                  aria-label='Password'
                  aria-describedby='basic-addon1'
                />
              </div>

              <button type='button' class='btn btn-primary'>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

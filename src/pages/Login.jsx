
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lee Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
        <p>Don't you have an account? Register</p>
      </div>
    </div>
  );
};
export default Login;

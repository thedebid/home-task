import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <div class="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2 class="text-center">Sign up</h2>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              required="required"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">
              Register
            </button>
          </div>
          <div class="clearfix">
            <a href="#" class="pull-right">
              Forgot Password?
            </a>
          </div>
        </form>
        <p class="text-center">
          Already have an account?
          <Link to="/login"> Login </Link>
        </p>
      </div>
    </>
  );
}
export default Register;

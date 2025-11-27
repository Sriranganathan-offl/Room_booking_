import { useState } from "react";
import "./Account.css";

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="acc-wrapper">
      <div className="acc-card">
        <h2>{isLogin ? "Welcome Back" : "Create Your StayNest Account"}</h2>
        <p className="subtitle">
          {isLogin
            ? "Sign in to manage your bookings easily."
            : "Join StayNest and book your perfect stay."}
        </p>

        {isLogin ? (
          <form className="form">
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button className="btn">Sign In</button>
            <p className="switch">
              New to StayNest?{" "}
              <span onClick={() => setIsLogin(false)}>Create Account</span>
            </p>
          </form>
        ) : (
          <form className="form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Create Password" required />
            <button className="btn">Sign Up</button>
            <p className="switch">
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Sign In</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Account;

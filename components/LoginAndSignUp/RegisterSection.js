import classes from "./RegisterSection.module.css";
import Link from "next/link";

export default function RegisterSection() {
  return (
    <div className={classes.registerSection}>
      <div className={classes.headings}>
        <h1>
          Create new account<span>.</span>
        </h1>
        <p>
          Already a member?
          <span>
            <Link href="/login">
              <a> Login</a>
            </Link>
          </span>
        </p>
      </div>
      <form>
        <div className={classes.username}>
          <input type="text" name="username" />
          <label>Username</label>
        </div>
        <div className={classes.email}>
          <input type="email" name="email" />
          <label>Email</label>
        </div>
        <div className={classes.password}>
          <input type="password" name="password" />
          <label>Password</label>
        </div>
        <div className={classes.register}>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}

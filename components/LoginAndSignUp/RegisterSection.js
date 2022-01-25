import classes from "./RegisterSection.module.css";

export default function RegisterSection() {
  return (
    <div className={classes.container}>
      <div className={classes.header}></div>
      <div className={classes.registerSection}>
        <div className={classes.headings}>
          <h1>Create new account.</h1>
          <p>
            Already A Member? <span>Log In</span>
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
    </div>
  );
}

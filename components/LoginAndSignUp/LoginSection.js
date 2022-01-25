import classes from "./LoginSection.module.css";

export default function LoginSection() {
  return (
    <>
      <form>
        <div className={classes.username}>
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div className={classes.password}>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <div className={classes.login}>
          <button>Login</button>
        </div>
      </form>
    </>
  );
}

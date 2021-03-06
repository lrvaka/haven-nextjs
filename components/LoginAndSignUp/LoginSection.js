import classes from "./LoginSection.module.css";
import Image from "next/image";
import Link from "next/link";

export default function LoginSection() {
  return (
    <div className={classes.loginSection}>
      <div className={classes.imageContainer}>
        <Link href="/">
          <a>
            <Image
              width={150}
              height={76}
              src="/images/haven-logo.png"
              alt="Haven for your value"
            />
          </a>
        </Link>
      </div>

      <form>
        <div className={classes.username}>
          <input type="text" name="username" />
          <label>Username</label>
        </div>
        <div className={classes.password}>
          <input type="password" name="password" />
          <label>Password</label>
        </div>
        <div className={classes.login}>
          <button>Login</button>
        </div>
      </form>
      <p>
        Don&apos;t have an account?
        <span>
          <Link href="/register">
            <a> Register</a>
          </Link>
        </span>
      </p>
    </div>
  );
}

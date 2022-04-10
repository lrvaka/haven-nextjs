import classes from "./RegisterSection.module.css";
import Link from "next/link";
import Image from "next/image";

export default function RegisterSection() {
  return (
    <div className={classes.registerSection}>
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

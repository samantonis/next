import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <ul>
    <li>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href={"/account"}>
        <a>Account</a>
      </Link>
    </li>
    {authUser.roles &&
      authUser.roles.includes(ROLES.ADMIN) && (
        <li>
          <Link href={"/admin"}>
            <a>Admin</a>
          </Link>
        </li>
      )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href={"/login"}>
        <a>Login</a>
      </Link>
    </li>
    <li>
      <Link href={"/signup"}>
        <a>Register</a>
      </Link>
    </li>
  </ul>
);

export default Navigation;

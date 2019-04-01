import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";
import { Menu } from "semantic-ui-react";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class Navigation extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? (
            <NavigationAuth
              activeItem={this.state.activeItem}
              handleActive={this.handleItemClick}
              authUser={authUser}
            />
          ) : (
            <NavigationNonAuth
              handleActive={this.handleItemClick}
              activeItem={this.state.activeItem}
            />
          )
        }
      </AuthUserContext.Consumer>
    );
  }
}

const NavigationAuth = ({ authUser, activeItem, handleActive }) => (
  <Menu inverted>
    <Menu.Item
      name="home"
      active={activeItem === "home"}
      onClick={handleActive}
    >
      <Link href={"/"}>
        <a>Home</a>
      </Link>
    </Menu.Item>
    <Menu.Item
      name="account"
      active={activeItem === "account"}
      onClick={handleActive}
    >
      <Link href={"/account"}>
        <a>Account</a>
      </Link>
    </Menu.Item>
    {authUser.roles &&
      authUser.roles.includes(ROLES.ADMIN) && (
        <Menu.Item
          name="admin"
          active={activeItem === "admin"}
          onClick={handleActive}
        >
          <Link href={"/admin"}>
            <a>Admin</a>
          </Link>
        </Menu.Item>
      )}
    <Menu.Item>
      <SignOutButton />
    </Menu.Item>
  </Menu>
);

const NavigationNonAuth = ({ activeItem, handleActive }) => (
  <Menu inverted>
    <Menu.Item
      name="home"
      active={activeItem === "home"}
      onClick={handleActive}
    >
      <Link href={"/"}>
        <a>Home</a>
      </Link>
    </Menu.Item>
    <Menu.Item
      name="login"
      active={activeItem === "login"}
      onClick={handleActive}
    >
      <Link href={"/login"}>
        <a>Login</a>
      </Link>
    </Menu.Item>
    <Menu.Item
      name="register"
      active={activeItem === "register"}
      onClick={handleActive}
    >
      <Link href={"/signup"}>
        <a>Register</a>
      </Link>
    </Menu.Item>
  </Menu>
);

export default Navigation;

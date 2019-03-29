import ChangePasswordForm from "../components/PasswordChange/ChangePasswordForm";
import ResetPasswordForm from "../components/PasswordReset/ResetPasswordForm";
import { AuthUserContext, withAuthorization } from "../components/Session";

const Account = props => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <ChangePasswordForm />
        <ResetPasswordForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Account);

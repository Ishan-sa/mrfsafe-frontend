import { NextPage } from "next";

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  return (
    <>
      <div>
        <form>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="johndoe@example.com"
            className="text-black"
          />
          <input
            type="password"
            placeholder="********"
            className="text-black"
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default SignIn;

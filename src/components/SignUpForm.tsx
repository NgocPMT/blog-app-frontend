import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router";

interface SignUpFormProps {
  isAccount: boolean;
  setIsAccount: (isAccount: boolean) => void;
}

interface SubmitBody {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUpForm = ({ isAccount, setIsAccount }: SignUpFormProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmationInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleSubmitAccountForm = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        passwordConfirmation,
      } satisfies SubmitBody),
    });
    const data = await res.json();
    if (data.errors) {
      console.log(data.errors);
    } else {
      console.log(data.message);
    }
  };

  return (
    <div className="max-sm:min-w-lvw max-md:min-h-lvh md:p-12 sm:w-[40rem] flex flex-col justify-center items-center gap-6 md:gap-8">
      {isAccount ? (
        <>
          <h2 className="font-lora text-2xl">Sign up with account</h2>
          <form className="w-2/3">
            <div>
              <label htmlFor="username" className="block text-sm my-2">
                Username
              </label>
              <input
                value={username}
                onChange={handleUsernameInput}
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                className="bg-gray-100 focus:bg-gray-50 p-2 text-sm w-full rounded-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm my-2">
                Email
              </label>
              <input
                value={email}
                onChange={handleEmailInput}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="bg-gray-100 focus:bg-gray-50 p-2 text-sm w-full rounded-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm my-2">
                Password
              </label>
              <input
                value={password}
                onChange={handlePasswordInput}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="bg-gray-100 focus:bg-gray-50 p-2 text-sm w-full rounded-sm"
              />
            </div>
            <div>
              <label
                htmlFor="passwordConfirmation"
                className="block text-sm my-2"
              >
                Confirm Password
              </label>
              <input
                value={passwordConfirmation}
                onChange={handlePasswordConfirmationInput}
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
                placeholder="Confirm your password"
                className="bg-gray-100 focus:bg-gray-50 p-2 text-sm w-full rounded-sm"
              />
            </div>
            <div className="text-center mt-6">
              <button
                onClick={handleSubmitAccountForm}
                type="button"
                className="btn transition-opacity hover:opacity-80"
              >
                Create account
              </button>
            </div>
          </form>
          <button
            onClick={() => setIsAccount(false)}
            className="underline text-sm cursor-pointer"
          >
            Back to sign up options
          </button>
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="sign-in" className="underline">
              Sign in
            </Link>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-lora text-3xl">Join Esium.</h2>
          <div className="flex flex-col gap-4 ">
            <button className="btn bg-white text-black border px-8 md:px-16 md:py-2.5 relative">
              <FcGoogle className="h-1/2 w-auto absolute left-2 top-1/4" />
              <p>Sign up with Google</p>
            </button>
            <button className="btn bg-white text-black border px-8 md:px-16 md:py-2.5 relative">
              <FaFacebook className="h-1/2 w-auto absolute left-2 top-1/4 text-blue-600" />
              <p>Sign up with Facebook</p>
            </button>
            <button
              onClick={() => setIsAccount(true)}
              className="btn bg-white text-black border px-8 md:px-16 md:py-2.5 relative"
            >
              <MdAccountCircle className="h-1/2 w-auto absolute left-2 top-1/4 text-black" />
              <p>Sign up with account</p>
            </button>
          </div>
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="sign-in" className="underline">
              Sign in
            </Link>
          </p>
          <p className="text-center text-sm text-gray-500 -mt-2 max-md:max-w-2/3">
            Click “Sign up” to agree to Medium’s{" "}
            <Link to="" className="underline">
              Terms of Service
            </Link>{" "}
            and acknowledge that Medium’s{" "}
            <Link to="" className="underline">
              Privacy Policy
            </Link>{" "}
            applies to you.
          </p>
        </>
      )}
    </div>
  );
};

export default SignUpForm;

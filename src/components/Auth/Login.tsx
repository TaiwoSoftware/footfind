import React from "react";
import { Link } from "react-router-dom";
// import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth'
export const Login: React.FC = () => {
    // const auth = getAuth();
    
    // const [authing, setAuthing] = useState<boolean>(false)
    // const [email, setEmail] = useState<string>('')
    // const [password, setPassword] = useState<string>('')
    // const [error, setError] = useState<string>('')

    // const signInWithGoogle = async() => {
    //     setAuthing(true)

    //     signInWithPopup(auth, new GoogleAuthProvider())
    //     .then(response =>{
    //         console.log(response.user.uid)
    //         navigate('/shop')
    //     })
    //     .catch(error => {
    //         console.log(error)
    //         setAuthing(false)
    //     })
    // }

    // const signInWithEmail = async() => {
    //     setAuthing(true);
    //     setError('');

    //     signInWithEmailAndPassword(auth,email,password)
    //     .then(response => {
    //         console.log(response.user.uid);
    //         navigate('/shop')
    //     })
    //     .catch(error => {
    //         console.log(error)
    //         setError(error.message)
    //         setAuthing(false)
    //     })
    // }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-logo-orange text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/newUser" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

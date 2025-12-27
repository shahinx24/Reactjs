import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/home"); // redirect to home
  }

  return (
    <>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

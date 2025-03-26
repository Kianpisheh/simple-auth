import "./Home.css";
import { Link } from "react-router-dom";

function Home(props) {
    const { user } = props;
    return (
        <div className="home-main">
            <h2>Welcome {user ? user.username : ""}!</h2>
            <div>
                {!user ? (
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                ) : (
                    <p>You are logged in.</p>
                )}
            </div>
        </div>
    );
}
export default Home;

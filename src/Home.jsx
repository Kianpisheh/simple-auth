import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-main">
            <h2>Welcome!</h2>
            <div>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Home;

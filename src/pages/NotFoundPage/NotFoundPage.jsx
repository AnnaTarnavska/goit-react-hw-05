import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link to='/'>Go to Home Page</Link>
        </div>
    );
};

export default NotFoundPage;
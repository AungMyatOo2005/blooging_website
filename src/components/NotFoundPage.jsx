//404 page

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-grayNine text-white w-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page not found</p>
        <Link to="/" className="text-blue-500 underline">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

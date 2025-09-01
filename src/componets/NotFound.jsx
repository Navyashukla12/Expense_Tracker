
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-7xl font-bold text-blue-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600 text-center">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;


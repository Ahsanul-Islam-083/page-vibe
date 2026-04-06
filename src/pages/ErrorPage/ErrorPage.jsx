import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="text-center space-y-6">
                
                {/* Error Code */}
                <h1 className="text-8xl font-bold text-primary">404</h1>

                {/* Title */}
                <h2 className="text-3xl font-semibold">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-base-content/70 max-w-md mx-auto">
                    The page you are looking for might have been removed, 
                    had its name changed, or is temporarily unavailable.
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                    <Link to="/" className="btn btn-primary">
                        Go Home
                    </Link>
                    <button 
                        onClick={() => window.history.back()} 
                        className="btn btn-outline"
                    >
                        Go Back
                    </button>
                </div>

                {/* Optional Illustration */}
                <div className="mt-8">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/6195/6195678.png" 
                        alt="404 illustration"
                        className="w-60 mx-auto opacity-80"
                    />
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;
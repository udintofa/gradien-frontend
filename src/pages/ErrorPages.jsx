import { useRouteError } from "react-router-dom";

export default function ErrorPages() {
    const error = useRouteError();
    console.error(error); // Log the error for debugging purposes
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
            <p className="text-xl text-gray-700 mb-2">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg text-gray-600">
                {error.statusText || error.message}
            </p>
        </div>
    );
}
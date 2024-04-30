import React from "react";

const SuccessPage = () => {
    return <div className="bg-blue-600 min-h-screen flex flex-col items-center justify-center text-white font-semibold">

    <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-2">Success!</h1>
        <p className="text-lg mb-6">Your request has been processed.</p>
        <a href="#" className="bg-white text-blue-500 py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-500 hover:text-white">Go Back</a>
    </div>
</div>
}

export default SuccessPage;

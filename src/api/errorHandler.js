export const handleApiErrors = (error) => {
    if (error.response) {
        // The server responded with a status code outside the 2xx range
        console.error("API Response Error:", error.response.status, error.response.data);
    } else if (error.request) {
        // The request was made but no response was received
        console.error("API Request Error (No Response):", error.request);
    } else {
        // Something happened in setting up the request
        console.error("API Config Error:", error.message);
    }
};

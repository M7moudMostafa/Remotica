export const handleApiErrors = (error) => {
    if (error.request) {
        console.log("Error occurs in request ", error.request.data);
    } else if (error.response) {
        console.log("Error occurs in response ", error.response);
    } else {
        console.log("Axios config error ", error.message);
    }
};

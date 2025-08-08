const TOKEN_KEY = "authenticationToken";

const setToken = (authToken) => {
    try {
        localStorage.setItem(TOKEN_KEY, authToken);
    } catch (error) {
        console.error("Failed to store authentication token:", error);
    }
};

const getToken = () => {
    try {
        return localStorage.getItem(TOKEN_KEY);
    } catch (error) {
        console.error("Failed to retrieve authentication token:", error);
        return null;
    }
};

const removeToken = () => {
    try {
        localStorage.removeItem(TOKEN_KEY);
    } catch (error) {
        console.error("Failed to remove authentication token:", error);
    }
};

export { setToken, getToken, removeToken };

const baseUrl = "http://127.0.0.1:8000/api/";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiUrl = "https://www.toptal.com/developers/postbin/1699728673203-7364212437532/";

const useFetch = () => {
    const getFetch = async (url = baseUrl, breakpoint = "") => {
        try {
            const options = {
                method: "GET",
            };
            const response = await fetch(`${url}/${breakpoint}`, options);

            if (!response.ok) {
                throw new Error(`Ошибка запроса: ${response.status}`);
            }

            return await response.json();
        } catch (error) {}
    };

    const postFetch = async (url = baseUrl, breakpoint = "", body) => {
        try {
            const options = {
                method: "POST",
                body: JSON.stringify(body),
            };

            const response = await fetch(`${url}/${breakpoint}`, options);

            if (!response.ok) {
                throw new Error(`Ошибка запроса: ${response.status}`);
            }

            return await response.json();
        } catch (error) {}
    };

    return { getFetch, postFetch };
};

export { useFetch };

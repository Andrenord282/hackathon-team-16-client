const baseUrl = "http://127.0.0.1:8000/api/";

const useFetch = () => {
    const getFetch = async (breakpoint = "") => {
        try {
            const options = {
                method: "GET",
            };
            const response = await fetch(`${baseUrl}/${breakpoint}`, options);

            if (!response.ok) {
                throw new Error(`Ошибка запроса: ${response.status}`);
            }

            return await response.json();
        } catch (error) {}
    };

    const postFetch = async (breakpoint, body) => {
        try {
            const options = {
                method: "POST",
                body: JSON.stringify(body),
            };

            const response = await fetch(`${baseUrl}/${breakpoint}`, options);

            if (!response.ok) {
                throw new Error(`Ошибка запроса: ${response.status}`);
            }

            return await response.json();
        } catch (error) {}
    };

    return { getFetch, postFetch };
};

export { useFetch };

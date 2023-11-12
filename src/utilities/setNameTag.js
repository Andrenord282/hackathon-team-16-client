const setNameTag = (length) => {
    return "#" + Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
};

export { setNameTag };

import { useState } from "react";

const useToggleCardModal = () => {
    const [isOpenCardModal, setOpenCardModal] = useState(false);

    return { isOpenCardModal, setOpenCardModal };
};

export { useToggleCardModal };

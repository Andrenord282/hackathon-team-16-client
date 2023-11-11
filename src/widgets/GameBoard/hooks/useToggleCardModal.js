import { useState } from "react";

const useToggleCardModal = () => {
    const [isOpenCardModal, setIsOpenCardModal] = useState(false);

    return { isOpenCardModal, setIsOpenCardModal };
};

export { useToggleCardModal };

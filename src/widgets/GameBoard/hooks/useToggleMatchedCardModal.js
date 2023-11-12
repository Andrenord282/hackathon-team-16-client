import { useState } from "react";

const useToggleMatchedCardModal = () => {
    const [openMatchedCardModal, setOpenMatchedCardModal] = useState(false);

    return { openMatchedCardModal, setOpenMatchedCardModal };
};

export { useToggleMatchedCardModal };

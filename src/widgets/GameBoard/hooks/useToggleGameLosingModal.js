import { useState } from "react";

const useToggleGameLosingModal = () => {
    const [openGameLosingModal, setOpenGameLosingModal] = useState(false);

    return { openGameLosingModal, setOpenGameLosingModal };
};

export { useToggleGameLosingModal };

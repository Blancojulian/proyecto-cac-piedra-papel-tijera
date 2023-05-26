export const createSound = (src) => {
    const audio = new Audio(src);

    return () => {
        audio.play();
    }
}


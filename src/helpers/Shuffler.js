export const shuffleImages = (array) =>{
    let shuffledImages = [...array];
    for(let i = 0; i < shuffledImages.length; i++){
        let randomIndex = Math.floor(Math.random()*shuffledImages.length);
        [shuffledImages[i], shuffledImages[randomIndex]] = [shuffledImages[randomIndex], shuffledImages[i]];
    }
    return shuffledImages;
}

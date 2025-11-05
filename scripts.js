const imageMap = new Map();
const textMap = new Map();

imageMap.set(1, 'assets/image_gallery/cute.jpg');
imageMap.set(2, 'assets/image_gallery/meme.jpg');
imageMap.set(3, 'assets/image_gallery/punch.jpg');
imageMap.set(4, 'assets/image_gallery/you.jpg');
imageMap.set(5, 'assets/image_gallery/50.jpg');

textMap.set(1, "🐱");
textMap.set(2, "I didn't say that, must be the wrong bitch 🙄");
textMap.set(3, "This you");
textMap.set(4, "You are the best view");
textMap.set(5, "Frick all the schools that doesn't have radtech");

let count = 1;

function changeImage(currentCount) {
    currentCount++;
    if (currentCount > 5) currentCount = 1;
    return { source: imageMap.get(currentCount), newCount: currentCount, newCaption: textMap.get(currentCount) };
}

const image = document.getElementById("image-gallery-picture");
const text = document.getElementById("image-gallery-caption");
image.addEventListener('click', function() {
    const result = changeImage(count);
    count = result.newCount;
    image.src = result.source;
    text.textContent = result.newCaption;
});

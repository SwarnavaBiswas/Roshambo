let aboutAuthorContainer = document.getElementById('aboutAuthorContainer');
let flavicon = document.getElementById('flavicon');
let aboutAuthor = document.getElementById('aboutAuthor');

aboutAuthorContainer.style.transform = `translate(${aboutAuthor.offsetWidth}px)`;
aboutAuthorContainer.style.borderRadius = `${aboutAuthorContainer.offsetHeight * 0.5}px`;

aboutAuthorContainer.addEventListener('mouseover', () => {
    aboutAuthorContainer.style.transform = `translate(0px)`;
})
aboutAuthorContainer.addEventListener('mouseout', () => {
    aboutAuthorContainer.style.transform = `translate(${aboutAuthor.offsetWidth}px)`;
})
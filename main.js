const checkbox = document.getElementById("switch");
const heading = document.getElementById("heading")
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
     heading.classList.toggle('white')
});
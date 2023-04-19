let header = document.querySelector('.header');
const searchEl = `<label for="search" class="student-search">
<span>Search by name</span>
<input id="search" placeholder="Search by name...">
<button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`;

header.innerHTML += searchEl;


const students = document.querySelectorAll('h3');
const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', e => {
    let inputValue = e.target.value.toLowerCase();
    console.log(inputValue);

    students.forEach(student => {
        if(student.textContent.toLowerCase().includes(inputValue)){
            student.parentNode.parentNode.style.display = 'block';
            student.parentNode.parentNode.classList.add('match');
            let newList = document.querySelector('.match');
            
        } else {
            student.parentNode.parentNode.style.display = 'none';
            student.parentNode.parentNode.classList.remove('match');
        }
    })

    // const matches = document.querySelectorAll('.match');
    // console.log(matches.length);
    // addPagination(matches)
})
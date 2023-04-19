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
    const results = [];

    data.forEach(student => {
        const firstName = student.name.first.toLowerCase();
        const lastName = student.name.last.toLowerCase();
        const fullName = `${firstName} ${lastName}`;
        if(firstName.includes(inputValue) || lastName.includes(inputValue) || fullName.includes(inputValue)){
            results.push(student);
            console.log(results.length);
            showPage(results, 1)
            addPagination(results);
        } 
    })

    if (results.length === 0){
        document.querySelector('.student-list').innerHTML = `<h4 class="no-results">No results found</h4>`;
        addPagination(results);
    }
    // const matches = document.querySelectorAll('.match');
    // console.log(matches.length);
    // addPagination(matches)
})
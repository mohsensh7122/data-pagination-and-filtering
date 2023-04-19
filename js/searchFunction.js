let header = document.querySelector('.header');
const searchEl = `<label for="search" class="student-search">
<span>Search by name</span>
<input id="search" placeholder="Search by name...">
<button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`;

header.innerHTML += searchEl;
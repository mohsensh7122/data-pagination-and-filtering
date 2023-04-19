let studentList = document.querySelector('.student-list');
let linkList = document.querySelector('.link-list');

/*
The `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page){
   let startIndex = (page * 9) - 9;
   let endIndex = (page * 9);
   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++){
      if (i >= startIndex && i < endIndex){
         studentList.insertAdjacentHTML('beforeend', `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
           <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
       </li>`) 
      }
   }
}



/*
The `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){
   let paginationButtons = Math.ceil(list.length/9);
   linkList.innerHTML = "";

   for(let i = 1; i <= paginationButtons; i++){
      linkList.insertAdjacentHTML('beforeend',  `
      <li>
         <button type="button">${i}</button>
      </li>
      `);
      
      document.querySelector('button').classList.add('active');
   }
}





// Create an event listener to listen for clicks on the link-list variable that you created earlier.

// Inside this event listener:

// The click event should only fire when the buttons are clicked. The click event should not fire if the user clicks between or around buttons. So if the click target is a pagination button:





linkList.addEventListener('click', function(e){
   if(e.target.tagName.toLowerCase() === 'button'){

      // Holding all the buttons in the variable below

      const buttons = document.querySelectorAll('button');
      
      // Remove the active class from any other pagination button

      for(let i = 0; i < buttons.length; i++){
         buttons[i].classList.remove('active');
      }

      // Add the active class to the pagination button that was just clicked.
      e.target.classList.add('active');

      // Call the showPage function passing the list parameter and the page number to display as arguments.
      showPage(data, e.target.innerHTML)
   }
})

// Call functions

showPage(data, 1);
addPagination(data);
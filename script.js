console.log('it works');
/*
// code your solution in here 

const createNewPost = () => {
    let parentDiv = document.createElement('div');
    parentDiv.setAttribute('id', 'post-list');

    let newPost = document.createElement("div");
    newPost.classList.add("card");
    newPost.classList.add('some-space');

    let div = document.createElement('div');
    div.classList.add("card-body");

    let heading = document.createElement('h5');
    heading.classList.add("card-title");
    heading.textContent = document.querySelector("#new-post-title").value;

    let paragraph = document.createElement('p');
    paragraph.classList.add("card-text");
    paragraph.textContent = document.querySelector("#new-post-content").value;
    
    div.appendChild(heading);
    div.appendChild(paragraph);
    newPost.appendChild(div);
    parentDiv.appendChild(newPost);
    return parentDiv;
}

console.log(createNewPost());

const submitButton = document.querySelector("#submit-form");
submitButton.addEventListener('click', ($event) => {
    let newBlogPost = document.querySelector('#post-list');
    newBlogPost.appendChild(createNewPost());
    $event.preventDefault();
});
console.log(submitButton);
*/

// grab the elements we need
const postList = document.querySelector('#post-list');
const submitBtn = document.querySelector('#submit-form');
const postTitleInput = document.querySelector('#new-post-title');
const postContentTextarea = document.querySelector('#new-post-content');
const firstCheckBox = document.querySelector('#hobbies-tag');
const secondCheckBox = document.querySelector('#school-life-tag');
const thirdCheckBox = document.querySelector('#personal-tag');
const addPostForm = document.querySelector('form');

// add the event listener on the submit, click
submitBtn.addEventListener('click', ($event) => {
	$event.preventDefault();

	// ************** CREATE HTML ELEMENT ****************

	const myHTMLPost = `
    <div class="card some-space">
        <div class="card-body">
            <h5 class="card-title">${postTitleInput.value}</h5>
            <p class="card-text">${postContentTextarea.value}</p>
            <span class="badge badge-light ${!firstCheckBox.checked ? 'hidden' : ''}">Hobbies</span>
            <span class="badge badge-light ${
				!secondCheckBox.checked ? 'hidden' : ''
			}">School life</span>
            <span class="badge badge-light ${
				!thirdCheckBox.checked ? 'hidden' : ''
			}">Personal</span>
        </div>
    </div>
    `;

	// another way to create the HTML element inside javascript
	//const myFragment = document.createRange().createContextualFragment(myHTMLPost);
	//postList.appendChild(myFragment)

	postList.innerHTML += myHTMLPost;

	addPostForm.reset();
});



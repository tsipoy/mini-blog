console.log('it works');

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
    commentForm.reset();
});
console.log(submitButton);


// Adding Element

const main = document.getElementById('text-changer')
const p = document.createElement('p')
p.innerText = 'My name is Aareef'
main.appendChild(p)

// Option 1 Direct on HTML Element

// Option 2
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// Option 3
const blueButton = document.getElementById('make-blue')
blueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// Option 3 another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// Option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)
function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// Option 4 another
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

// Option 4 final
document.getElementById('make-goldenrod'). addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})

// Option 1

function handleOnClick(){
    const textChanger = document.getElementById('text-changer');
    textChanger.innerText = 'Hello, hope you are well today';
}
// Option 2
document.getElementById('event-listener').addEventListener('click', function(){
    const textChanger = document.getElementById('text-changer');
    textChanger.innerText = 'hi how are you'
})

// Option 2 recap
document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById("input-field");
    const inputText = inputField.value;
    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';
})

// Adding Comment

document.getElementById('submit').addEventListener('click', function(){
    const commentBox = document.getElementById('comment-box');
    const comment = commentBox.value;

    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = comment;
    commentContainer.appendChild(p);

    commentBox.value = ' ';
})

// GitHub Delete Style

document.getElementById('delete').addEventListener('click', function(){
    const hide = document.getElementById('hide')
    hide.style.display = 'none'
    const text = document.getElementById('text');
    text.value = ' ';
})

document.getElementById('text').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteBtn = document.getElementById('delete');
    if(text == 'delete'){
        deleteBtn.removeAttribute('disabled')
    }
    else{
        deleteBtn.setAttribute('disabled', true)
    }
})

// Adding Item

document.getElementById('list-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})
document.getElementById('btn-add-item').addEventListener('click', function(){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = "New Item Added";
    li.classList.add('item');
    listContainer.appendChild(li);
})
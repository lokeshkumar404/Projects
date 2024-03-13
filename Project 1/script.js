var add = document.querySelector('.add')
var change = document.querySelector('h5')
var check = 0

add.addEventListener('click', function () {
    if (check == 0) {
        change.innerText = "Friend"
        change.style.color = "green"
        check = 1
        add.innerHTML="Remove"
    }
    else{
        change.innerText = "Stanger"
        change.style.color = "black"
        check = 0
        add.innerHTML="Add Friend"
    }
})


if(-1){
    console.log('hello')
}
else{
    console.log('hii')
}
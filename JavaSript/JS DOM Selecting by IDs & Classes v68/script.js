console.log("Ironamn is cool");

// let frns = document.getElementsByClassName('box')
// console.log(frns)

// frns[2].style.backgroundColor = 'red'

// document.getElementById('red').style.backgroundColor = 'red'

// document.querySelector('.box').style.backgroundColor = 'green'

document.querySelectorAll('.box').forEach(e =>{
    // console.log(e)
    e.style.backgroundColor = 'green'
})
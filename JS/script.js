$(function() {
    $('.slider').animatedHeadline({
        animationType: 'rotate-1'
    });
})


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
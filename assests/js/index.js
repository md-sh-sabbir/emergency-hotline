// Count for heart Icon
const favourites = document.getElementsByClassName('favourite-call')
let count = 0

for(let favourite of favourites){
    favourite.addEventListener('click', function(){
        count++
        document.getElementById('favourite-count').innerText = count
    })

}

// Call buttons and coin managing
const callBtns = document.getElementsByClassName('call-btn')
const callBalance = 100

for(let callButton of callBtns){
    callButton.addEventListener('click', function(){
        const callTitle = callButton.parentNode.parentNode.children[1].children[0].innerText
        console.log(callTitle)

        const callNumber = callButton.parentNode.parentNode.children[2].children[0].innerText
        console.log(callNumber)

        // alert for call dialing
        alert(`📞 Calling ${callTitle} ${callNumber}...`)

    })
}

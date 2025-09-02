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

for(let callButton of callBtns){
    callButton.addEventListener('click', function(){
        const callTitle = callButton.parentNode.parentNode.children[1].children[0].innerText

        const callNumber = callButton.parentNode.parentNode.children[2].children[0].innerText

        const totalCoin = document.getElementById('total-coin').innerText
        const callCost = 20

        // alert for insuficient coin and call restriction
        if(totalCoin < 20){
            alert("❌ You don't have enough coin! You need atleast 20 coin to make a call.")
            return
        } 
        else{
            // alert for call dialing
            alert(`📞 Calling ${callTitle} ${callNumber}...`)

            let coinRemaining = totalCoin - callCost

            document.getElementById('total-coin').innerText = coinRemaining


            // Call history feature implented
            const callHistory = document.getElementById('call-history-container')
            const callLog = document.createElement('div')

            callLog.innerHTML = `<div class="bg-[#fafafa] flex justify-between items-center p-5 rounded-lg mb-5">
                                    <div>
                                        <h2 class="font-semibold text-md">${callTitle}</h2>
                                        <p class="font-medium text-md text-[#5c5c5c]">${callNumber}</p>
                                    </div>
                                    <p class="call-time text-md"></p>
                                </div>`

            callHistory.appendChild(callLog)

            let callTime = callLog.querySelector('.call-time')
            callTime.innerText = new Date().toLocaleTimeString()

            // Clear call history
            document.getElementById('clear-history').addEventListener('click', function(){
                callLog.innerHTML = ''
            })

        }
    })
}

// Clear call history
// document.getElementById('clear-history').addEventListener('click', function(){
//     callLog.innerHTML = ''
// })
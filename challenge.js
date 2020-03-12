document.addEventListener('DOMContentLoaded', function (){
    let counter = document.getElementById('counter')
    // let number = 0;
    // var i = 1;

    function incrementCounter(num){
        let number = parseInt(counter.innerText)
        let newNumber = number + num
        counter.innerHTML = newNumber
    }
    let timer = setInterval(function(){
        incrementCounter(1)
        },1000)

//    let plus = document.getElementById("+")
//    let minus = document.getElementById("-")
//    let like = document.getElementById("<3")
   const likes = document.querySelector(".likes")
   const commentList = document.getElementById("list")
   let likeCount = {}

   document.addEventListener("click",function(event){
    if (event.target.id == "-"){ //if you click on a node with id equals "-"
        --counter.innerHTML
    }
    if (event.target.id == "+"){
        ++counter.innerHTML
    }
    if (event.target.id == "<3"){
        let number = counter.innerText
        if (!document.getElementById(`${number}`)){ // if this id with the specific number doesn't exist, then create, and create new attribute in likeCount hash
            likeCount[number] = 1
            let li = document.createElement("li")
            li.id = `${number}`
            li.innerText = `${number} has been liked 1 time`
            likes.append(li)
        }
        else {
            likeCount[number]++ //increment existing like count for that specific number in the likeCount hash
            let li = document.getElementById(`${number}`)
            li.innerText = `${number} has been liked ${likeCount[number]} times`
        }

    }
    if (event.target.id == "pause"){
        document.getElementById("-").disabled = true 
        document.getElementById("+").disabled = true 
        document.getElementById("<3").disabled = true 
        document.getElementById("submit").disabled = true 
        clearInterval(timer)

        event.target.innerText = 'resume'
        event.target.id = 'resume'
    }
    else if (event.target.id == "resume") {
        document.getElementById("-").disabled = false 
        document.getElementById("+").disabled = false 
        document.getElementById("<3").disabled = false 
        document.getElementById("submit").disabled = false 
        timer = setInterval(function(){incrementCounter(1)},1000)
        event.target.innerText = 'pause'
        event.target.id = 'pause'
    }
    if (event.target.id === "submit"){
        event.preventDefault()
        let form = event.target.parentNode
        let comment = form[0].value // first form value input
        let p = document.createElement("p")
        p.innerText = comment 
        commentList.append(p)
        form.reset()

    }
    
   



   })

   
//    plus.addEventListener("click",function(event){
//        let target = event.target
//        ++counter.innerHTML
//    })

//    minus.addEventListener("click", function(event){
//        --counter.innerHTML
//    })


//    like.addEventListener("click",function(event){
//        let target = event.target
//        let parent = document.querySelector(".likes")
//        let hearts = 0
//        hearts ++
    
//        if (document.getElementsByClassName(`${seconds}`) == null){
//         let li = document.createElement('li')
//         li.id = `${seconds}`
//         li.innerHTML = `<h3>${seconds} has ${hearts} likes</h3>`
//         parent.appendChild(li)
//        }
//        else {
//         let li = document.getElementById(`#${seconds}`)
//         let current = li.innerHTML.split(' ')[2]
//         current++
//         li.innerHTML = `<h3>${seconds} has ${current} likes</h3>`
//         parent.appendChild(li)


//        }




//    })


   


})



// 1. As a user, i should see the timer increment every second once the page has loaded
// 2. As a user, i can manually increment and decrement the counter as i like
// 3. As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
// 4. As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
// 5. As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl).then(res=>res.json()).then(obj=>renderEach(obj))
function renderEach(obj){
    const dogImg=document.getElementById('dog-image-container')
    obj.message.forEach(element=>addImg(element))
    function addImg(element){
        const img=document.createElement('img')
        img.src=element
        dogImg.appendChild(img)
    }
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl).then(res=>res.json()).then(getAllBreeds)
function getAllBreeds(obj){
    const breedName=document.getElementById('dog-breeds')

    for(let item in obj.message){
        const li=document.createElement('li')
        li.innerHTML=`<p> ${item} </p>`
        breedName.appendChild(li)
        //following line of code address challenge3
        li.addEventListener('click',()=>li.style.color='red')
    }


    const startWith=document.getElementById('breed-dropdown')
    startWith.addEventListener('change',e=>{
    const selectedStartLetter=e.target.value
        breedName.innerHTML=''
        for(let key in obj.message){
        if(key.startsWith(selectedStartLetter)){

            const li=document.createElement('li')
            li.innerHTML=`<p> ${key} </p>`
            breedName.appendChild(li)
            //following line of code address challenge3
            li.addEventListener('click',()=>li.style.color='red')
        }
    }
})
}

let menu=document.getElementById("menu")
function toggle(){
    menu.classList.toggle("show")
}

let memes=document.querySelector("#memes")
let mems=async()=>{
    const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes.';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '72c555b131msh50a2631ce535ae3p13f161jsn245169d34fa8',
		'x-rapidapi-host': 'programming-memes-images.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    result.map((k)=>{
            let imgDiv=document.createElement('div')
            let images=document.createElement('h1')
            memes.append(imgDiv)
            imgDiv.append(images)
            images.src='https:'+k.image
        })
       
    
	console.log(result);
} catch (error) {
	console.error(error);
}
}

mems()
const btn = document.getElementById("btn");
const joke = document.getElementById("joke");
const apiKey = "tSLPtpQ+JHWzvaYXfGTScQ==n01FAxgP73uR9OSo";

//
const options = {
    method: "GET",
    headers: {
       "X-Api-Key": apiKey,    
    }
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// const getJokes = async() => {
//     const response = await fetch(apiURL, options);
//     const data = await response.json();
//     console.log(data);
// };
//
// async function  getJokes(){
//     const response = await fetch(apiURL, options);
//     const data = await response.json();
//     console.log(data); 
// }



btn.addEventListener("click", async() => {
    joke.innerHTML = 'updating...'
    btn.disable = true;
    btn.innerHTML = 'Loading...'
    try {
        const response = await fetch(apiURL, options);
        if(!response.ok){
            throw  Error('could not fetch data');
        }
        const data = await response.json();
        joke.innerHTML = data[0].joke;
        btn.disable = false;
        btn.innerHTML = 'Tell me a joke';
        
    } catch (error) {
        console.log('could not fetch data');
        btn.innerHTML = 'Tell me a joke';
        joke.innerHTML = error.message('');
    }
   
    //joke.innerHTML = ;
});
 



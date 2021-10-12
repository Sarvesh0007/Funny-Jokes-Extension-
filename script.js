fetch(' https://icanhazdadjoke.com/slack')   //calling API
    .then(data=>data.json())                //converting API data into JSON format
    .then(jokeData=>{
        const jokeText=jokeData.attachments[0].text;         //Fetching 'text' from the attachment array
        const jokeElement=document.getElementById('jokeElement');        //catching P tag by id         

        jokeElement.innerHTML=jokeText;            //setting inner HTMl of the P tag
    })
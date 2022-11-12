const jokes = document.getElementById("jokes");
const jokebtn = document.getElementById("jokebtn");

const generateJokes = () => {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", setHeader)
    .then((res) => res.json())
    .then((data) => {
      jokes.innerHTML = data.joke;
    })
    .catch((err) => {
      console.log(err);
    });
};

jokebtn.addEventListener("click", generateJokes);
generateJokes();

/*
const generateJokes =async () => {
try{
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  const jokesRes= await fetch("https://icanhazdadjoke.com/", setHeader)
      const data = await res.json();
	jokes.innerHTML = data.joke;
}catch(err){
console.log(err);
}
};


*/

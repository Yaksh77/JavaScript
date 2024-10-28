let image = document.querySelector("#photo");

const createTodo  = async (todo) =>{

    const options = {
        method:"POST",
        headers: {
        "Content-type" : "application/json"
    },
    body: JSON.stringify(todo),
}

const response = await fetch('https://jsonplaceholder.typicode.com/posts',options);
const data = await response.json();
console.log(data);
}

const updateData = async () =>{
   let response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'Blast',
          body: 'bar',
          userId: 1,
        description: "Hello World!"

        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    let data = await response.json();
    console.log(data);
}

const getData = async () => {
    let response  = await fetch('https://jsonplaceholder.typicode.com/posts?id=101');
    let data = await response.json();
    console.log(data);
}

const todo = {
    id:1,
    title: 'Yaksh',
    body: 'Chudasama',
    userId: 1, 
}

// const showImage = async ()=> {

//     let response = await fetch('https://jsonplaceholder.typicode.com/albums/2/photos');
//     let data = await response.json();
//     image.setAttribute("src",data[10].url);
    
// }

// createTodo(todo);
// updateData();
// getData();

showImage();
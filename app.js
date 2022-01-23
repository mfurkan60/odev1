import axios from "axios";

async function getInfo() {
    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/1");

    const { data: Post1 } = (await axios("https://jsonplaceholder.typicode.com/posts/1"));

    var nietos = [];
    nietos.push(user, Post1);
    console.log(nietos);
}






getInfo();


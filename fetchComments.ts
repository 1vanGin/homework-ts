// interface IComment {
//     ID: number
//     PostId: number
//     Email: string
//     Name: string
//     Body: string
// }

const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string) => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(1, data)
    }catch(e){
        console.error(e)
    }
}

getData(COMMENTS_URL)
    .then(data => {
        console.log(2, data)
    });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
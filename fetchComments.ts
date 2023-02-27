import fetch, {Response} from "node-fetch";
const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments?_limit=5';

interface IComment {
    id: number
    postId: number
    email: string
    name: string
    body: string
}

const getData = async (url: string): Promise<Array<IComment>> => {
    try {
        const response: Response = await fetch(url)
        return await response.json()
    } catch (e) {
        console.error(e)
        throw(e)
    }
}

const logger = (data: IComment[]): void => {
    data.forEach(comment => {
        console.log(`ID: ${comment.id}, Email: ${comment.email}, Name: ${comment.name}, Body: ${comment.body}, PostId: ${comment.postId}`)
        console.log(`------------------------`)
    })
}

getData(COMMENTS_URL)
    .then(data => logger(data));

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
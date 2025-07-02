
//ex 1
function getUser(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => {
            console.log(`User name: ${data.name}`);
        })

}


//ex 2

function getPost(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => {
            console.log(`Post title: ${data.title}`);

        })

}

//ex 3

function getUserEmail(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => {
            console.log(`User name: ${data.email}`);
        })

}

// ex 4

function listUserTodos(userId) {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(res => res.json())
        .then(data => {
            console.log(`User ${userId} has ${data.length} todos`);
        })
}


//ex 5

function checkPostExists(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.ok)
        .then(data => {
            if (data) {
                console.log(`post exis`);

            } else {
                console.log(`post not found`);

            }

        })

}

//ex 6

function fetchWithDelay(url, delay) {
    setTimeout(() => {
        fetch(url)
            .then(res => res.text())
            .then(data => {
                console.log(data.slice(0, 50));
            })
    }, delay);
}


//ex 7 

function showKeys(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(Object.keys(data[0]));


        })

}


//ex8 

function showFirstPostTitle(userId) {

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(user => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`))
        .then(res => res.json())
        .then(posts => {
            console.log(`First post title: ${posts[0].title}`);
        })
}



//ex 9 

function getPostCommentsCount(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(post => fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`))
        .then(res => res.json())
        .then(comments => {
            console.log(`Post has ${comments.length} comments`);

        }
        )

}
//10

function todoAndUser(todoId) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(res => res.json())
        .then(data => {
            console.log(`Todo title: ${data.title}`);
            return data.userId

        })
        .then(userId => fetch(`https://jsonplaceholder.typicode.com/users/${userId}`))
        .then(res => res.json())
        .then(user => {
            console.log(`User name: ${user.name}`);

        })

}
const posts = [
    {
        name: "Tutu",
        username: "Tutu0306",
        location: "Stockholm, Sweden",
        avatar: "images/tutu-avatar.jpg",
        post: "images/tutu.jpg",
        comment: "Chilling in the sun💅",
        likes: 667
    },
    {
        name: "Archie",
        username: "archie0815",
        location: "Melbourne, Australia",
        avatar: "images/mengde-avatar.jpg",
        post: "images/mengde.jpg",
        comment: "i'm feelin kawai rn🤳",
        likes: 741
    },
        {
        name: "Chestnut",
        username: "lili1010",
        location: "Tokyo, Japan",
        avatar: "images/lili-avatar.jpg",
        post: "images/lili.jpg",
        comment: "proud of myself🐕",
        likes: 846
    }
]

const clickImg = document.getElementById("img-click")
const avatar = document.getElementById("avatar")
const post = document.getElementById("post")
const iconHeart = document.getElementById("icon-heart")

const titlename = document.getElementById("name")
const place = document.getElementById("location")
const like = document.getElementById("likes")
const username = document.getElementById("username")
const comment = document.getElementById("comment")

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    render();
  })  

function render(){
    const item = posts[currentItem];
    avatar.src = item.avatar;
    titlename.textContent = item.name;
    place.textContent =item.location;
    post.src = item.post;
    username.textContent = item.username;
    comment.textContent = item.comment;
    like.textContent = item.likes;
}

clickImg.addEventListener('click', function(){
    currentItem++;
    if(currentItem > posts.length-1){
        currentItem = 0;
    }
    render();
})

iconHeart.addEventListener('click',function(){
    like.textContent = parseInt(like.textContent) + 1;
})

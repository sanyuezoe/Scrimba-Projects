class Cat {
    constructor(data){
        Object.assign(this, data)
    }

    matchStuation(bool) {
        this.hasBeenSwiped = true
        this.hasBeenLiked = bool
    }

    getCatHtml () {
        const { name, avatar, age, bio} = this
        return `
        <img class="like-icon" id="like-icon" src="images/badge-like.png">
        <img class="nope-icon" id="nope-icon" src="images/badge-nope.png">
        <img class="profile-img" src="${avatar}">
        <div class="profile-text">
            <div class="name-age">
                <h3 id="name">${name}</h3>
                <h3>,</h3>
                <h3 id="age">&nbsp;${age}</h3>
            </div>
            <p>${bio}</p>
        </div>`
    }
}


export default Cat
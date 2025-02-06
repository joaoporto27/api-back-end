const { v4: uuid4 } = require("uuid");

class Filme {
    constructor(title, year, duration, likes) {
        this.id = uuid4();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.likes = likes;
    }

    likes() {
        this.likes += 1;
    }
}

module.exports = Filme;
type Words = {
    [key:string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word:Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    get(term:string) {
        return this.words[term]
    }
    delete(word:Word) {
        if (this.words[word.term]) {
            delete this.words[word.term]
        }
    }
    update(word:Word) {
        if (this.words[word.term]) {
            this.words[word.term] = word.def
        }
    }
    showAll() {
        let wordList = Object.keys(this.words)
        return wordList.forEach((word) => console.log(word))
    }
    count() {
        return this.words.length
    }
}

class Word {
    constructor(
        public term:string,
        public def:string
    ) {}
}

const dict = new Dict()
const joy = new Word("joy", "기쁨")
const love = new Word("love", "사랑")
dict.add(joy)
dict.get("joy")
dict.add(love)
dict.delete(love)
dict.count()
dict.showAll()
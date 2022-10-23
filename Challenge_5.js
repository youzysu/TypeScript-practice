"use strict";
class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    get(term) {
        return this.words[term];
    }
    delete(word) {
        if (this.words[word.term]) {
            delete this.words[word.term];
        }
    }
    update(word) {
        if (this.words[word.term]) {
            this.words[word.term] = word.def;
        }
    }
    showAll() {
        let wordList = Object.keys(this.words);
        return wordList.forEach((word) => console.log(word));
    }
    count() {
        return this.words.length;
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const dict = new Dict();
const joy = new Word("joy", "기쁨");
const love = new Word("love", "사랑");
dict.add(joy);
dict.get("joy");
dict.add(love);
dict.showAll();
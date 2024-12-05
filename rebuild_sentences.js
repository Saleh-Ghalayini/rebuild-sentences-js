function rebuildSentences(words, lengths) {
    let sentence = [];

    for (let i = 0; i < words.length; i++) {
        sentence.push(words[i].slice(0, lengths[i]));
    }

    console.log(sentence.join(" "));
}

rebuildSentences(["the", "sky", "is", "blue"], [3, 2, 2, 1]);

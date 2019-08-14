function counter(num) {
    for(let i = 0; i < num; i++) {
        console.log(i)
    }
    return "hello world you count"
}

module.exports = { counter }

// counter(4)
const timer = function(times) {
    if(!times.length) {
        return;
    }
    for (let moments of times) {
        const inputtedSeconds = Number(moments);
        setTimeout(() => {
            console.log(`Beeps at ${inputtedSeconds} seconds`);
            process.stdout.write('\x07');
        }, inputtedSeconds * 1000);
    }
};
console.log(timer([10,5,6,7,9]));

((async) => {
    const input = "12bbccaaaammm";

    // Step 1: Create groups of consecutive characters
    const groups: string[] = [];
    let currentGroup = input[0];

    for (let i = 1; i < input.length; i++) {
        if (input[i] === input[i - 1]) {
            currentGroup += input[i];
        } else {
            groups.push(currentGroup);
            currentGroup = input[i];
        }
    }

    groups.push(currentGroup);

    // Step 2: Sort groups by length (occurrence count)
    groups.sort((a, b) => a.length - b.length);

    // Step 3: Join groups
    const result = groups.join("");

    console.log("Input :", input);
    console.log("Output:", result);
})();
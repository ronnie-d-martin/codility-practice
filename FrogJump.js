function FrogJumpXOR(X, Y, D) {
    return Math.ceil((Y - X) / D);
}

function solutionb(X, Y, D) {
    let distance = Y - X;
    let jumps = Math.floor(distance / D); // Get full jumps

    if (distance % D !== 0) { // If there's a remainder, add an extra jump
        jumps += 1;
    }

    return jumps;
}
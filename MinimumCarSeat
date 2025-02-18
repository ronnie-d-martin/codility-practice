function solution(P, S) {
    let totalPeople = P.reduce((sum, p) => sum + p, 0); // Total number of people
    let sortedSeats = S.sort((a, b) => b - a); // Sort seats in descending order
    let carsUsed = 0;
    let seatsFilled = 0;

    for (let seats of sortedSeats) {
        seatsFilled += seats;
        carsUsed++;

        if (seatsFilled >= totalPeople) {
            return carsUsed; // Minimum number of cars needed
        }
    }

    return carsUsed;
}

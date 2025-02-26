function solution(B) {
    const rows = B.length;
    const cols = B[0].length;
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    let shipCounts = [0, 0, 0];

    function dfs(r, c, shipCells) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || B[r][c] === '.' || visited[r][c]) {
            return;
        }
        visited[r][c] = true;
        shipCells.push([r, c]);
        
        dfs(r + 1, c, shipCells);
        dfs(r - 1, c, shipCells);
        dfs(r, c + 1, shipCells);
        dfs(r, c - 1, shipCells);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (B[r][c] === '#' && !visited[r][c]) {
                let shipCells = [];
                dfs(r, c, shipCells);
                let size = shipCells.length;
                if (size === 1) {
                    shipCounts[0]++; // Patrol Boat
                } else if (size === 2) {
                    shipCounts[1]++; // Submarine
                } else if (size === 3) {
                    shipCounts[2]++; // Destroyer
                }
            }
        }
    }

    return shipCounts;
}

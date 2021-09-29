function printSquare(size) {
    for (let count = 0; count < size; count++) {
        let row = '';
        for (let countColumn = 0; countColumn < size; countColumn++) {
            row = row + '🦠';
        }
        console.log(row);
    }
}

printSquare(4)
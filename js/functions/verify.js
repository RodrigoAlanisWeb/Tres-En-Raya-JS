function verify(board, turn) {
    win = '';

    if (turn == 1) {
        win = 'xxx';
    } else {
        win = 'ooo';
    }

    let suma = [];
    let suma_2 = [];

    board.forEach(r => {
        if (r[0].textContent + r[1].textContent + r[2].textContent == win) {
            return end(turn, board)
        }
        suma.push(r[0].textContent);
    });
    if (suma[0] + suma[1] + suma[2] == win) {
        return end(turn, board)
    } else {
        suma = [];
        board.forEach(r => {
            suma.push(r[1].textContent);
        });
    }

    if (suma[0] + suma[1] + suma[2] == win) {
        return end(turn, board)
    } else {
        suma = [];
        board.forEach(r => {
            suma.push(r[2].textContent);
        });
    }

    if (suma[0] + suma[1] + suma[2] == win) {
        return end(turn, board)
    } else {

        suma = [];
        count = 0;

        board.forEach(r => {
            suma.push(r[count].textContent);
            count++

            if (count == 3) {
                if (suma[0] + suma[1] + suma[2] == win) {
                    end(turn, board)
                }
            }
        });

        count_2 = 2

        board.forEach(r => {
            suma_2.push(r[count_2].textContent);
            count_2--

            if (count_2 == -1) {
                if (suma_2[0] + suma_2[1] + suma_2[2] == win) {
                    end(turn, board)
                }
            }
        });
    }
}

function end(turn, board) {
    board.forEach(element => {
        element.forEach(i => {
            i.textContent = ''
            i.classList.remove('blue');
            i.classList.remove('red');
        });
    });
    document.querySelector('.win').innerHTML = `El Jugador ${turn} gana`
}
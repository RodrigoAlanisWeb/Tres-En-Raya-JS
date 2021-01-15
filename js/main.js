board = [document.querySelectorAll('.board__item'), document.querySelectorAll('.board__item-2'), document.querySelectorAll('.board__item-3')];
turn = 1;

board.forEach(element => {
    element.forEach(i => {
        i.addEventListener('click', () => {
        if (i.textContent === '') {
            if (turn > 2) {
                turn = 1;
            }

            if (turn == 1) {
                i.textContent = 'x'
                i.classList.add('red')
            } else if (turn == 2) {
                i.textContent = 'o'
                i.classList.add('blue')
            }
            verify(board, turn)
            turn++;
        }
        })
    })

});


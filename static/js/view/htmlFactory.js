export const htmlTemplates = {
    board: 1,
    card: 2,
    status: 3
}

export const builderFunctions = {
    [htmlTemplates.board]: boardBuilder,
    [htmlTemplates.card]: cardBuilder,
    [htmlTemplates.status]: columnBuilder
};

export function htmlFactory(template) {
    if (builderFunctions.hasOwnProperty(template)) {
        return builderFunctions[template];
    }

    console.error("Undefined template: " + template);

    return () => {
        return "";
    };
}

function boardBuilder(board) {
    return `<div class="board-container">
                <section class="board" data-board-id="${board.id}">
                    <div class="board-header"><span class="board-title" data-title-id="${board.id}" contenteditable="true">${board.title}</span>
                        <button class="board-add" data-board-id="${board.id}">Add Card</button>
                        <button class="toggle-board-button" data-board-id="${board.id}">Show cards</button>
                    </div>
                    <div class="board-columns" data-board-id="${board.id}"></div>
                </section>
            </div>`

}

function cardBuilder(card) {
    return `<div class="card" data-card-id="${card.id}">${card.title}</div>`;
}


function columnBuilder(column, boardId) {
    return `<div class="board-column" data-column-id="${column.id}">
                <div class="board-column-title">${column.title}</div>
                <div class="board-column-content" data-column-id="${boardId}${column.id}"></div>
            </div>`
}

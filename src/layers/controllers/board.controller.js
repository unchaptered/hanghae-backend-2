export const getAllBoard = (req, res, next) => {
    return res.json('get all board');
}

export const postBoard = (req, res, next) => {
    return res.json('post board');
}

export const getBoardById = (req, res, next) => {
    return res.json('get baord by boardId');
}

export const putBoardById = (req, res, next) => {
    return res.json('put baord by boardId');
}

export const delBoardById = (req, res, next) => {
    return res.json('delete baord by boardId');
}

export const increaseBoardLike = (req, res, next) => {
    return res.json('increase board like');
}
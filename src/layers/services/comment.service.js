import { CommentPostDto, CommentPutDto } from '../../models/dtos/_.export.js';

/**
 * @param { CommentPostDto } commentPostDto 
 * @returns { Promise<CommentPostDto> }
 */
export const postComment = async (commentPostDto) => {
    return commentPostDto;
}

/**
 * @param { CommentPutDto } commentPostDto 
 * @returns { Promise<CommentPutDto> }
 */
export const putCommentByCommentId = async (commentPutDto) => {
    return commentPutDto;
}
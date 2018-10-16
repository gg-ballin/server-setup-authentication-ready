import commentsReducer from '../comments';
import { SAVE_COMMENT } from 'actions/constants';
import comments from '../comments';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'nuew comment'
    };
    const newState = commentsReducer([],action);
    expect(newState).toEqual(['nuew comment'])
})

it('handles action with unknown type', () => {
    const newState = commentsReducer([], {type: 'SJKDFKA'})
    expect(newState).toEqual([])
})
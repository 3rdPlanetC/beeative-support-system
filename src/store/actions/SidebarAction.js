export const HeaderTitle = (title) => {
    return (dispatch, state) => {
        dispatch({type: "TITLE_NAME", value: title})
    }
}
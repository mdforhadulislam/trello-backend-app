export const rootApi = `http://localhost:5000/api/v1`

export const SingUpApiURL = `${rootApi}/auth/register/`
export const SingInApiURL = `${rootApi}/auth/login/`
export const SingOutApiURL = `${rootApi}/auth/logout/`

export const accountApiURL = (username) =>{
    return `${rootApi}/auth/account/${username}`
}
export const allBoardsApiURL = `${rootApi}/boards/`
export const singleBoardsApiURL= (boardId)=>{
    return `${rootApi}/boards/${boardId}`
}
// export const
// export const
// export const
// export const
// export const
// export const
// export const
// export const
// export const


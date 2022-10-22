
export type UserType={
    email?:string,
    id?:number,
    username?:string
}


export type PostType={
    id?:number,
    createdat?:string,
    post?:string,
    postedBy?:UserType,
    userid?:number
}
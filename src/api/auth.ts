import api from "./axsios";


export const  login = api.get("/signUp")
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const  rigester=(data:any)=> api.post("/signUp",data)

export const  tasks= api.get("/AddTask")


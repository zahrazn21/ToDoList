import type { typeRes } from "../types/TypeRes";
import api from "./axsios";


export const  login = api.get("/signUp")
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const  rigester=(data:any)=> api.post("/signUp",data)

export const  tasks= api.get("/AddTask")

export const  editTasks=(id:string , data:typeRes)=> api.patch(`/AddTask/${id}`, data)

export const  addTasks=(data:typeRes)=> api.post(`/AddTask`, data)

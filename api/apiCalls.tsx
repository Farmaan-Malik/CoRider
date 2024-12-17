import axios from "axios";

export interface Chat{
    id: string
    message: string
    sender:sender
    time: string
}
export interface sender{
    image:string
    is_kyc_verified:boolean
    self:boolean
    user_id:string
}
export interface response {
    chats : Chat[]
}


export const getTexts = async (param:number) => {
  try {
    const data = await 
   axios
      .get<response>(`https://qa.corider.in/assignment/chat`,{params:{page:param}})
      .then( (response) =>{ 
        return response.data.chats
      });
      return data
  } catch(err) {
  }
};

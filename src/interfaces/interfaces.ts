export interface UserData {
    id: string;
    username?: string | null;
    texto?: string | null;
    avatar?: string | null;
    imagem?: string | null;
    curtidas?:number | undefined
  } 

  export interface UserLogin {
    username: string | null;
    password:string
  } 
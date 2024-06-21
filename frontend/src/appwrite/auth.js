/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAcc = await this.account.create(ID.unique(), email, password, name)
            if(userAcc){
                return this.login({email, password})
            }else{
                return userAcc
            }
        } catch (error) {
            console.log("Appwrite service error :: createAccount :: ",error);
        }
    }

    async login({email, password}){
        try{
            console.log(this.account)
            return await this.account.createEmailPasswordSession(email, password)
        }catch(error){
            console.log("Appwrite service error :: login :: ",error);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service error :: getCurrentUser :: ",error);
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service error :: logout :: ",error);
        }
    }
}

const authService = new AuthService();

export default authService;
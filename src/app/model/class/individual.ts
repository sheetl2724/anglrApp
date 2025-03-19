import { Community } from "./community";

export class Individual{
    firstName:string;
    lastName:string;
    mobileNumber:string;
    email:string;
    doorNo:string;
    apartmentName:string;
    address:string;
    pinCode:string;
    isAgreed:boolean;
    communityName:string;
    constructor(){
        this.firstName='',
        this.lastName='',
        this.mobileNumber='',
        this.email='',
        this.doorNo='',
        this.apartmentName='',
        this.address='',
        this.pinCode='',
        this.isAgreed=false;
        this.communityName=''
    }
}
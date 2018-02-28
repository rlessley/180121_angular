
/*
    A service is a piece of code that aims to provide some kind of functionality or
    data. The service should be standalone and, thus, be able to be picked up and used
    by any other component. This is what makes a service a service.
    The big appeal of such services, is that they are capable of being injected into
    othe components for use needed.
*/

import { Injectable } from '@angular/core';
import { Employee } from '../objects/employee';

/*
    The injectable decorator marks this class one that may act as a depenendency for
    another component. (eg, injected into a component via the constructor)
    Or Designate that this service may require another service to be injected into it.
*/
@Injectable()
export class EmpService{
    constructor(){

    }

    getEmps(): Employee[]{
        return [
            {
                id:1,
                name:"Bobbert",
                salary:1231231,
                title:"Professional Bob"
            },
            {
                id:2,
                name:"Robbert",
                salary:50,
                title:"Professional Robber"
            },
            {
                id:3,
                name:"Herbert",
                salary:51,
                title:"Professional Herb"
            }
        ]
    }
}
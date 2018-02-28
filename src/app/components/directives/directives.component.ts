import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../services/emp.service';
import { Employee } from '../../objects/employee';

/*
    In addition to templateUrl, you can use template literals instead.
    This lets you define the html inline in the typescript file. This is done
    by using the template: key with html coded within back ticks: `<html code>`
*/

@Component({
    selector: 'directives-component',
    templateUrl: './directive.component.html'
    //template: `<h1>Check me out!</h1>`
})

export class DirectivesComponent implements OnInit{
    constructor(private empService:EmpService){
        console.log("CONSTRUTCTOR");
    }

    public buttonValue= "SHOW ANSWER";

    public visible= false;
    public toggleAnswer(){
        if((this.visible = !this.visible)){
            this.buttonValue = "HIDE ANSWER";
        }else{
            this.buttonValue = "SHOW ANSWER"
        }
    }

    emp = {
        id:1,
        name:"Bobbert"
    }

    emps:Employee[];
    ngOnInit(){
        console.log("NGONINIT");
        this.emps = this.empService.getEmps();
        console.log(this.emps);
    }
    /*
    emps = [{
        id:1,
        name:"Bobbert"
    },
    {
        id:2,
        name:"Robert"
    },
    {
        id:3,
        name:"Dogbert"
    },
    {
        id:4,
        name:"Herbert"
    }]
    */
}
import { Component } from "@angular/core"
import { Customer } from "./../model/Customer.js"
@Component({
    selector: "customer-ui",
    templateUrl: "./../UI/Customer.html"
})
export class CustomerComponent{
//Logica di Binding
    customerobj: Customer = new Customer(); 
}
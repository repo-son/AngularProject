import { variable } from '@angular/compiler/src/output/output_ast';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { partitionArray } from '@angular/compiler/src/util';
import { Component} from '@angular/core';
import { never, NEVER } from 'rxjs';
import { __values } from 'tslib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent 
{
  title = 'Angular-App';

  todoArray=[''];
  addTodo(value:string)
  {    
    
    this.todoArray.push(value)
    console.log(this.todoArray)  

  }
  deleteItem(string:string)
  {
    for(let i=0 ;i<= this.todoArray.length ;i++)
    {    
      if(string== this.todoArray[i])
      {     
        this.todoArray.splice(i,1)    
      }   
    }

  }
  todoSubmit(value:any)
  {     
    if(value!=="")
    {    
      this.todoArray.push(value.todo)
         
    }
    else
    {     
       alert('Field required **')   
    }      
    
  }


}
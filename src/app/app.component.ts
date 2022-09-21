import { Component, OnInit } from '@angular/core';
import { FirstService } from './services/first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'segunda-claseA';
  name: string = '';
  order: string = '';

  constructor(public firstService: FirstService){
  }

  ngOnInit():void{
    this.getPokemonBtn();
  }  

  getPokemonBtn(){

    let btnSearch = document.getElementById("btnSearch");
    let findPkmInput: HTMLInputElement = <HTMLInputElement> document.getElementById("pkmFind"); 
    
    

    btnSearch?.addEventListener("click",()=>{
      this.firstService.getPokemon(findPkmInput.value).subscribe({
        next : (resp : any) => {
          
          this.name = resp.name;
          this.order = resp.order;
          console.log(resp);
        }
      });

    });
  }



}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, from, map, merge, of } from 'rxjs';

@Component({
  selector: 'app-observables-and-operators',
  templateUrl: './observables-and-operators.component.html',
  styleUrls: ['./observables-and-operators.component.scss'],
})
export class ObservablesAndOperatorsComponent implements OnInit, OnDestroy {
  // ! => non null assertion operator
  // sub!:Subscription;

  // obs = new Observable(observer => {
  //   console.log('Observable Started');

  //   setTimeout(()=>{
  //     observer.next('1');
  //   },1000);

  //   setTimeout(()=>{

  //     observer.next('2');
  //   },2000);

  //   setTimeout(()=>{

  //     observer.next('3');
  //   },3000);

  //   // setTimeout(()=>{
  //   //   observer.error("Error occurred!!");
  //   // },3500);
  //   setTimeout(()=>{

  //     observer.next('4');
  //   },4000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 5000);
  // });

  ngOnInit(): void {
    //  this.sub= this.obs.subscribe({
    //     // callback functions
    //     next:(value) =>{
    //       console.log(value);
    //     },
    //     error:(err)=>{
    //       console.log(err);
    //     },
    //     complete: () =>{
    //       console.log("Completeddddd");
    //     }
    //   })
    // Operators

    // merge
    // let obs1=new Observable((observer:any)=>{
    //   observer.next("First Observable");
    // })
    // let obs2=new Observable((observer:any)=>{
    //   observer.next("Second Observable");
    // })
    // let obs3=merge(obs1,obs2);

    // obs3.subscribe(data =>{
    //   console.log(data);

    // });


    // creation observable

    // of , from

    // of("item1","item2","item3").subscribe({
    //   next:()=>{},
    //   error:()=>{},
    //   complete:() =>{}
    // });

    // from([1,2,3]).subscribe(data =>{
    //   console.log(data);

    // })


    let obs=of("hello world");

    // pipe
    // obs.pipe(map(data=>data.toUpperCase())).subscribe(data =>{
      obs.pipe(map(data=>data.toUpperCase().includes("H"))).subscribe(data =>{
      console.log(data);

    })



  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
    // console.log("Observable stoooooped");
  }
}

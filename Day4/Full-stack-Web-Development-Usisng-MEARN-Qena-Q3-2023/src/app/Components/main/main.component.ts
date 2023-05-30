import { Component } from '@angular/core';
import { TrackDataInterface } from 'src/app/Models/track-data-interface';
import { TrackInfo } from 'src/app/Models/track-info';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {


  // properties

  // pageTitle:string="MEARN";

  // method
  // sayHello(){
  //   return "Hello "+this.pageTitle;
  // }


  // test model class
  trackClass:TrackInfo=new TrackInfo("MEARN Track","https://static.javatpoint.com/blog/images/mern-stack.png",["JS","Angular","React js"]);
  trackClass2:TrackInfo=new TrackInfo("Frontend Track","https://static.javatpoint.com/blog/images/mern-stack.png",["JS","Angular","React js"]);

  // test model interface
  track:TrackDataInterface={trackName:"MEARN track",trackNum:60,trackCourses:["Node JS","Mongo DB","Boostrap"]}


}

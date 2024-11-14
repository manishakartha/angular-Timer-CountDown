import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'countdown-timer-app';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  isStart :boolean = false;
  isPause :boolean = false;
  timer:any

  handleStart(){
    // if (this.hours === null) this.hours = 0;
    // if (this.minutes === null) this.minutes = 0;
    // if (this.seconds === null) this.seconds = 0;
    
    this.isStart = true;
    this.isPause = false;
    this.countDownStarts();
  }

  countDownStarts(){
    let hours = parseInt(this.hours, 10);
      let minutes = parseInt(this.minutes, 10);
      let seconds = parseInt(this.seconds, 10);
    this.timer = setInterval(()=>{
      if(seconds !==null && seconds>0){
        
       seconds--
      }else if(minutes!==null && minutes>0){ 
          
        minutes--;
       seconds=59;
      }else if(hours!==null && hours>0){
       
        hours--;
       minutes=59;
        seconds=59;
      }else{
        this.handleReset()
      }
      this.hours = this.formatInput(hours);
      this.minutes = this.formatInput(minutes);
      this.seconds = this.formatInput(seconds);
    },1000)
  }

  formatInput(value: number | string): string {
    const num = typeof value === 'string' ? parseInt(value, 10) : value;
    if (isNaN(num) || num < 0) return '00';
    return num < 10 ? `0${num}` : `${num}`;
  }

  handlePause(){
    this.isPause = true;
    clearInterval(this.timer);
  }

  handleReset(){
    this.isStart=false
    this.isPause=false
    clearInterval(this.timer);
    this.hours="00";
    this.seconds="00";
    this.minutes="00";
  }

  handleResume(){
    this.isPause=false;
    this.countDownStarts()
  }

 
  
 

}

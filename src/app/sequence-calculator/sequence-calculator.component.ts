import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { SequenceCalculatorVO } from '../models/SequenceCalculatorVO.model';
import { SequenceCalculatorService } from './sequence-calculator.service';

@Component({
  selector: 'app-sequence-calculator',
  templateUrl: './sequence-calculator.component.html',
  styleUrls: ['./sequence-calculator.component.css']
})
export class SequenceCalculatorComponent implements OnInit {

  isDataLoaded = false;
  isCacheLoaded = false;
  inputNumber = 0;

  resultAlticciSequence: SequenceCalculatorVO = {
    processingTime: 'Processing time: 0 s 000 ms 0 ns',
    result: 0
  }

  constructor(
    private alticciService: SequenceCalculatorService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  calcularNumeroAlticciSequence() {
    if(this.inputNumber < 0 || this.inputNumber > 2526) {
      this.messageService.add({severity:'error', summary:'Error', detail:'The number inputed is invalid, enter a number from 0 to 2526!'});
      return;
    }


    this.alticciService.calculateAlticciSequenceNumber(this.inputNumber).subscribe(resp => {
      this.resultAlticciSequence.result = resp.result;
      this.resultAlticciSequence.processingTime = resp.processingTime;
      console.log(this.resultAlticciSequence);
      this.isDataLoaded = true;
    });
  }



}

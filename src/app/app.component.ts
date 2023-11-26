import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject, auditTime, debounceTime, exhaustMap, forkJoin, map, mergeAll, mergeMap, sampleTime, shareReplay, skipLast, skipUntil, skipWhile, switchMap, takeLast, takeUntil, takeWhile, tap, throttleTime } from 'rxjs';
import { first } from 'rxjs';
import { reduce } from 'rxjs';
import { take } from 'rxjs';
import { from, fromEvent, interval, mapTo, of, pluck, range, timer, merge, concat, combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private http: HttpClient) { }
  @ViewChild('btn') btn: ElementRef | undefined;
  title = 'app';


  ngAfterViewInit(): void {

  }

  public sub = new Subject()

  ngOnInit(): void {
    this.sub.subscribe(res => {
      console.log(res);

    })
    this.http.get('https://api.github.com/users',).subscribe(res => {
      this.sub.next(res)
    })



  }
}

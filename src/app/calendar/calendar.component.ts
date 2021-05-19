import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  week: any = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
  ];
  monthSelect: any[] = [];
  dateSelect: any;
  dateValue: any;

  constructor() {
    
  }

  ngOnInit(): void {
    this.getDaysFromDate(4, 2021)
  }

  getDaysFromDate(month: number, year: number) {
    
    const startDate = moment(`${year}/${month}/01`);
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;
    //obtenemos la diferencia entre el inicio y fin de mes en dias y lo redondeadamos.
    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);
    //creamos un array con el numero de dias y lo iteramos
    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      //construimos una fecha con los datos que tenemos
      const dayObject = moment(`${year}-${month}-${a}`);
      //obtenemos el dia de la semana en numero
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });
    //se guarda en la variable
    this.monthSelect = arrayDays;
  }

  //si es menor a cero le resto un mes a la fecha seleccionada
  //de lo contrario le sumo un mes a la fecha seleccionada
  changeMonth(flag: number) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  //le paso el numero del dia que se selecciona
  //saco el mes y anio y luego el dia y los conacateno
  clickDay(day: { value: any; }) {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    //obtenemos el objeto y lo guardamos
    const objectDate = moment(parse)
    this.dateValue = objectDate;

    console.log(this.dateValue);
    
  }


}

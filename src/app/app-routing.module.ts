import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';

const routes: Routes = [  
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/:id', component: RoomsBookingComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

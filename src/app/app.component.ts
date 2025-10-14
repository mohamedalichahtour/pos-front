import { Component , OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sidebarVisible = true;
  menuBarItems: MenuItem[] | undefined;
  menuItems: MenuItem[] | undefined; 
  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.menuBarItems = [
            {
                label: '',
                icon: 'pi pi-bars',
                command: () => {this.sidebarVisible = !this.sidebarVisible;
                  
                }
            },
            
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off',
                styleClass: 'menu-item-right',
            }
        ];

        this.menuItems = [
            {
                label: 'New',
                icon: 'pi pi-users',
                routerLink :'/employees',

            },

        ];
        
    }
}

import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit { 
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.initializeSidebarToggle();
  }

  initializeSidebarToggle(): void {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        if (sidebar) {
          sidebar.classList.toggle("open");
        }
        this.menuBtnChange(); // calling the function(optional)
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search icon
        if (sidebar) {
          sidebar.classList.toggle("open");
        }
        this.menuBtnChange(); // calling the function(optional)
      });
    }
  }

  menuBtnChange(): void {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");

    if (sidebar && closeBtn) {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); // replacing the icons class
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); // replacing the icons class
      }
    }
  }
}

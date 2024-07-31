import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initializeSidebarToggle();
  }

  initializeSidebarToggle(): void {
    const sidebar = this.el.nativeElement.querySelector('.sidebar');
    const closeBtn = this.el.nativeElement.querySelector('#btn');
    const searchBtn = this.el.nativeElement.querySelector('.bx-search');
    const links: NodeListOf<HTMLAnchorElement> = this.el.nativeElement.querySelectorAll('.nav-list a');

    if (closeBtn) {
      this.renderer.listen(closeBtn, 'click', () => {
        if (sidebar) {
          this.toggleClass(sidebar, 'open');
        }
        this.menuBtnChange();
      });
    }

    if (searchBtn) {
      this.renderer.listen(searchBtn, 'click', () => {
        if (sidebar) {
          this.toggleClass(sidebar, 'open');
        }
        this.menuBtnChange();
      });
    }

    // Add console.log to test link clicks
    links.forEach((link: HTMLAnchorElement) => {
      this.renderer.listen(link, 'click', (event) => {
        console.log('Link clicked:', link.href);
      });
    });
  }

  toggleClass(element: any, className: string): void {
    if (element.classList.contains(className)) {
      this.renderer.removeClass(element, className);
    } else {
      this.renderer.addClass(element, className);
    }
  }

  menuBtnChange(): void {
    const sidebar = this.el.nativeElement.querySelector('.sidebar');
    const closeBtn = this.el.nativeElement.querySelector('#btn');

    if (sidebar && closeBtn) {
      if (sidebar.classList.contains('open')) {
        this.renderer.removeClass(closeBtn, 'bx-menu');
        this.renderer.addClass(closeBtn, 'bx-menu-alt-right');
      } else {
        this.renderer.removeClass(closeBtn, 'bx-menu-alt-right');
        this.renderer.addClass(closeBtn, 'bx-menu');
      }
    }
  }
}

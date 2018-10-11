

export class MainApp extends HTMLElement { 

  constructor() { 
    super();
    this.classList = ['main-app'];
    this.render();
  }

  get template() { return `
    <div class="main-app__container">
      <h3 class="main-app__card-list-title">CARD LIST</h3>
      <card-list></card-list>
      <br><br><br>
      <h3 class="main-app__card-slider-title">CARD SLIDER</h3>
      <card-slider></card-slider>
    </div>
    `;}

 
  render() {
    const html = this.sanitize(`${this.template}`);
    this.innerHTML = html;
  }

  sanitize(value) {
    return value.replace(/null|undefined/g, '');
  }

}

customElements.define("main-app", MainApp);
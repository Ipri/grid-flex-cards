import { cards } from "../../data/cards.js";
import { CardOne } from "../card-one/card-one.component.js";

export class CardSlider extends HTMLElement { 

  constructor() { 
    super();
    this.classList = ['card-slider'];
    this.cards = [];
    this.render();
    this.initViewChild();
    this.loadCards(4);
    this.currentSlide = 0;
  }

  get template() { return `
    <div class="card-slider__container">
      <span class="card-slider__icon-angle-left fas fa-angle-left"></span>
      <div class="card-slider__band-container">
        <div class="card-slider__band"></div>
      </div>
      <span class="card-slider__icon-angle-right fas fa-angle-right"></span>
    </div>
  `;}

  initViewChild() {
    this.band = this.querySelector('.card-slider__band');
    this.prevArrow = this.querySelector('.card-slider__icon-angle-left');
    this.nextArrow = this.querySelector('.card-slider__icon-angle-right');

    this.prevArrow.addEventListener('click', () => {

      if (this.currentSlide === 0) return;
      this.currentSlide--;
      this.band.style.transform = `translateX(-${this.currentSlide * 252}px)`;

    });

    this.nextArrow.addEventListener('click', () => {

      if (this.currentSlide === cards.length) return;

      this.loadCards();
      this.currentSlide++;
      this.band.style.transform = `translateX(-${this.currentSlide * 252}px)`;

    });
  }
 
  render() {
    const html = this.sanitize(`${this.template}${this.styles}`);
    this.innerHTML = html;
  }

  loadCards(count) {
    
    if(this.cards.length === cards.length) return;

    const 
      skip = this.cards.length,
      lastIndex = skip + (count || 1),
      newCards = cards.slice(skip, lastIndex);

    this.cards.push(...newCards);
    this.appendCards(newCards);
  }

  appendCards(cards) {
    cards.forEach((userData, index) => {
      const card = new CardOne(userData);
      this.band.appendChild(card);
    });
  }

  sanitize(value) {
    return value.replace(/null|undefined/g, '');
  }

}

customElements.define("card-slider", CardSlider);
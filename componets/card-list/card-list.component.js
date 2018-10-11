

import { cards } from "../../data/cards.js";
import { CardOne } from "../card-one/card-one.component.js";

export class CardList extends HTMLElement { 


  constructor() { 
    super();
    this.classList = ['card-list'];
    this.render();
    this.container = this.querySelector('.card-list__container');
    this.appendCards(cards);
  }

  get template() { return `
    <div class="card-list__container"></div>
  `;}

 
  render() {
    const html = this.sanitize(`${this.template}${this.styles}`);
    this.innerHTML = html;
  }

  appendCards(userCards) {
    userCards.forEach(userData => {
      const card = new CardOne(userData);
      this.container.appendChild(card);
    });
  }

  sanitize(value) {
    return value.replace(/null|undefined/g, '');
  }

}

customElements.define("card-list", CardList);
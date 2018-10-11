
export class CardOne extends HTMLElement { 

  /**
   * @param {Object} params 
   * @param {String} params.userName
   * @param {String} params.productName
   * @param {String} params.productDescription 
   * @param {Number} params.rating
   * @param {Number} params.responders
   * @param {Number} params.cost
   */

  constructor(params) { 
    super();
    this.classList = ['card-one'];
    this.trimIndex = 95;
    this.shortDescription = '';
    Object.assign(this, params);
    this.trimDescription();
    this.render();
  }

  get template() { return `
    <div class="card-one__container">
      <span class="card-one__icon-angle-left fas fa-angle-left"></span>
      <span class="card-one__icon-angle-right fas fa-angle-right"></span>
      <span class="card-one__icon-photo far fa-address-card"></span>
      <div class="card-one__image-title">${this.productName}</div>
      <div class="card-one__user-communications">
        <span class="card-one__call fas fa-phone"></span>
        <span class="card-one__sms fas fa-comment"></span>
        <span class="card-one__telegram fas fa-paper-plane"></span>
      </div>
      <div class="card-one__product-description">${this.shortDescription}</div>
      <div class="card-one__user">
        <span class="card-one__icon-user-status fas fa-circle"></span>
        <span class="card-one__icon-user-name">${this.userName}</span>
      </div>
      <div class="card-one__rating">
        <span class="card-one__icon-rating fas fa-star"></span>
        <span class="card-one__rating-number">${this.rating}</span>
        <span class="card-one__rating-responders">(${this.responders})</span>
      </div>
      <hr class="card-one_divider-line">
      <span class="card-one__icon-like fas fa-heart"></span>
      <div class="card-one__cost">
        <span class="card-one__cost-number">${this.cost}</span>
        <span class="card-one__cost-currency fas fa-ruble-sign"></span>
      </div>
    </div>
  `;}

  trimDescription() {

    if (this.productDescription.length < this.trimIndex) {

      this.shortDescription = this.productDescription;

    } else {

      const 
        spaceIndex = this.productDescription.substr(0, this.trimIndex).lastIndexOf(' '),
        trimmedAbout = this.productDescription.substr(0, spaceIndex) + '...';

      this.shortDescription = trimmedAbout;
    }
    
  }

 
  render() {
    const html = this.sanitize(`${this.template}`);
    this.innerHTML = html;
  }

  sanitize(value) {
    return value.replace(/null|undefined/g, '');
  }

}

customElements.define("card-one", CardOne);
import AbstractView from '../framework/view/abstract-view.js';

function createTripInfoTemplate({title, dateRange, totalCost}) {
  return (
    `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
              <h1 class="trip-info__title">${title}</h1>

              <p class="trip-info__dates">${dateRange}</p>
            </div>

            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
            </p>
    </section>`);
}
export default class TripInfoView extends AbstractView{
  constructor({title, dateRange, totalCost}) {
    super();
    this.title = title;
    this.dateRange = dateRange;
    this.totalCost = totalCost;
  }

  get template() {
    return createTripInfoTemplate({
      title: this.title,
      dateRange: this.dateRange,
      totalCost: this.totalCost,
    });
  }
}

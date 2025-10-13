import EventsListView from '../view/trip-events-list-view.js';
import SortingView from '../view/sorting-view.js';
import EventItemView from '../view/events-item-view.js';
import NewPointView from '../view/add-new-point-view.js';
import { render, RenderPosition } from '../render.js';


export default class ItineraryPresenter {
  #boardComponent = new EventsListView();
  #boardContainer = null;
  #eventsModel = null;
  #boardPoints = [];

  constructor({ boardContainer, eventsModel }) {
    this.#boardContainer = boardContainer;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#boardPoints = [...this.#eventsModel.events];

    render(this.#boardComponent, this.#boardContainer, RenderPosition.BEFOREEND);
    render(new SortingView(), this.#boardComponent.getElement(), RenderPosition.BEFOREEND);

    if (!this.#boardPoints.length) {
      return;
    }

    const firstPoint = this.#boardPoints[0];

    render (
      new NewPointView({
        point: firstPoint,
        checkedOffers: [...this.#eventsModel.getOffersById(firstPoint.type, this.#boardPoints[0].offers)],
        offers: this.#eventsModel.getOffersByType(firstPoint.type),
        destination: this.#eventsModel.getDestinationsById(firstPoint.destination)
      }),
      this.#boardComponent.getElement(),
      RenderPosition.AFTERBEGIN
    );


    for (let i = 0; i < this.#boardPoints.length; i++) {
      const point = this.#boardPoints[i];

      render(
        new EventItemView({
          point,
          offers: [...this.#eventsModel.getOffersById(point.type, point.offers)],
          destination: this.#eventsModel.getDestinationsById(point.destination)
        }),
        this.#boardComponent.getElement(),
        RenderPosition.BEFOREEND
      );
    }
  }
}

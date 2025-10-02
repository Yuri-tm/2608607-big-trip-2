import EventsListView from '../view/trip-events-list-view.js';
import SortingView from '../view/sorting-view.js';
import EventItemView from '../view/events-item-view.js';
import NewPointVeiw from '../view/add-new-point-view.js';
import { render, RenderPosition } from '../render.js';

export default class ItineraryPresenter {
  boardComponent = new EventsListView();

  constructor({ boardContainer, eventsModel }) {
    this.boardContainer = boardContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    this.boardPoints = [...this.eventsModel.getEvents()];
    render(this.boardComponent, this.boardContainer);
    render(new SortingView(), this.boardComponent.getElement(), RenderPosition.BEFOREEND);

    const firstPoint = this.boardPoints[0];

    render(new NewPointVeiw({
      point: firstPoint,
      checkedOffers: [...this.eventsModel.getOffersById(firstPoint.type, this.boardPoints[0].offers)],
      offers: this.eventsModel.getOffersByType(firstPoint.type),
      destination: this.eventsModel.getDestinationsById(firstPoint.destination)
    }),
    this.boardComponent.getElement());


    for (let i = 0; i < this.boardPoints.length; i++) {
      const point = this.boardPoints[i];

      render(new EventItemView({
        point: this.boardPoints[i],
        offers: [...this.eventsModel.getOffersById(point.type, point.offers)],
        destination: this.eventsModel.getDestinationsById(point.destination)
      }), this.boardComponent.getElement());
    }
  }
}

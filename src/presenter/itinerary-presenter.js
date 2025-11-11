import { render, replace } from '../framework/render.js';
import EventsListView from '../view/trip-events-list-view.js';
import SortingView from '../view/sorting-view.js';
import EventItemView from '../view/events-item-view.js';
import NewPointVeiw from '../view/add-new-point-view.js';
import NoEventsView from '../view/no-events-view.js'


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
    this.#renderBoard()
  }

  #renderPoint(point) {
    const offers = [...this.#eventsModel.getOffersById(point.type, point.offers)];
    const destination = this.#eventsModel.getDestinationsById(point.destination);
    const escKeyHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyHandler);
      }
    }
  };

    if (this.#boardPoints.length === 0) {
      render(new NoEventsView(), this.#boardContainer);
      return;
    }

    const editItemElement = document.createElement('li');
    editItemElement.className = 'trip-events__item';
    render(
      new EventEditView({
        point: this.#boardPoints[0],
        offers: [...this.#eventsModel.getOffersById(this.#boardPoints[0].type, this.#boardPoints[0].offers)],
        destination: this.#eventsModel.getDestinationsById(this.#boardPoints[0].destination),
        // provide a safe submit handler (implement save/close logic here)
        onFormSubmit: () => {}
      }),
      editItemElement,
      RenderPosition.BEFOREEND
    );
    render(editItemElement, this.#boardComponent.getElement(), RenderPosition.BEFOREEND);

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

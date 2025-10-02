
import FiltersView from './view/filters-view.js';
import ItineraryPresenter from './presenter/itinerary-presenter.js';
import EventsModel from './model/events-model.js';
import TripInfoPresenter from './presenter/info-presenter.js';
import { render } from './render.js';

const siteHeaderElement = document.querySelector('.page-header');
const siteTripInfoElement = siteHeaderElement.querySelector('.trip-main');
const siteHeaderFiltersElement = siteHeaderElement.querySelector('.trip-controls');
const siteMainElement = document.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

const eventsModel = new EventsModel();

const itineraryPresenter = new ItineraryPresenter({
  boardContainer: siteTripEventsElement,
  eventsModel});

const tripInfoPresenter = new TripInfoPresenter({
  infoContainer: siteTripInfoElement,
  eventsModel,
});

render(new FiltersView(), siteHeaderFiltersElement);

itineraryPresenter.init();
tripInfoPresenter.init();

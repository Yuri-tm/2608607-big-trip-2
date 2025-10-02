import {render, RenderPosition} from '../render.js';
import TripInfoView from '../view/trip-info-view.js';


export default class TripInfoPresenter {
  constructor({infoContainer, eventsModel}) {
    this.infoContainer = infoContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    const tripTitle = this.eventsModel.getTripTitle();
    const tripDateRange = this.eventsModel.getTripDateRange();
    const totalCost = this.eventsModel.getTotalCost();

    this.infoComponent = new TripInfoView({
      title: tripTitle,
      dateRange: tripDateRange,
      totalCost: totalCost
    });

    render(this.infoComponent, this.infoContainer, RenderPosition.AFTERBEGIN);
  }
}

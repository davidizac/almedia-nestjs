import { validateInput } from 'src/decorators/validate.decorator';
import { Offer2DTO } from '../dto';
import { Offer } from '../entity';

export class Offer2Provider {
  @validateInput(Offer2DTO)
  mapDTOToEntity(offerDto: Offer2DTO): Offer {
    const offer = new Offer();
    offer.externalOfferId = offerDto.Offer.campaign_id.toString();
    offer.name = offerDto.Offer.name;
    offer.description = offerDto.Offer.description;
    offer.requirements = offerDto.Offer.instructions;
    offer.thumbnail = offerDto.Offer.icon;
    offer.isDesktop = offerDto.OS.web ? 1 : 0;
    offer.offerUrlTemplate = offerDto.Offer.tracking_url;
    offer.isIos = offerDto.OS.ios ? 1 : 0;
    offer.isAndroid = offerDto.OS.android ? 1 : 0;
    return offer;
  }

  getOfferArray(payload): Offer2DTO[] {
    return Object.keys(payload.data).map((key) => payload.data[key]);
  }
}

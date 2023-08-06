import { UsePipes, ValidationPipe } from '@nestjs/common';
import { Offer1DTO } from '../dto';
import { Offer } from '../entity';
import { Device, Platform } from 'src/enums';
import { validateInput } from 'src/decorators/validate.decorator';

export class Offer1Provider {
  @validateInput(Offer1DTO)
  mapDTOToEntity(offerDto: Offer1DTO): Offer {
    const offer = new Offer();
    offer.externalOfferId = offerDto.offer_id;
    offer.name = offerDto.offer_name;
    offer.description = offerDto.offer_desc;
    offer.requirements = offerDto.call_to_action;
    offer.thumbnail = offerDto.image_url;
    offer.isDesktop = offerDto.platform === Platform.Desktop ? 1 : 0;
    offer.offerUrlTemplate = offerDto.offer_url;
    offer.isIos =
      offerDto.platform === Platform.Mobile &&
      offerDto.device == Device.Iphone_Ipad
        ? 1
        : 0;
    offer.isAndroid =
      offerDto.platform === Platform.Mobile && offerDto.device == Device.Android
        ? 1
        : 0;
    return offer;
  }

  getOfferArray(payload): Offer1DTO[] {
    return payload.response.offers;
  }
}

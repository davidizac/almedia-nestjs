import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsObject,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class OfferDTO {
  @IsNumber()
  campaign_id: number;

  @IsNumber()
  @ValidateIf((object, value) => value !== null)
  store_id: number | null;

  @IsString()
  tracking_type: string;

  @IsString()
  campaign_vertical: string;

  @IsString()
  currency_name_singular: string;

  @IsString()
  currency_name_plural: string;

  @IsString()
  network_epc: string;

  @IsString()
  icon: string;

  @IsString()
  name: string;

  @IsString()
  tracking_url: string;

  @IsString()
  instructions: string;

  @IsString()
  @ValidateIf((object, value) => value !== null)
  disclaimer: string | null;

  @IsString()
  description: string;

  @IsString()
  short_description: string;

  @IsString()
  @ValidateIf((object, value) => value !== null)
  offer_sticker_text_1: string;

  @IsString()
  @ValidateIf((object, value) => value !== null)
  offer_sticker_text_2: string | null;

  @IsString()
  @ValidateIf((object, value) => value !== null)
  offer_sticker_text_3: string | null;

  @IsString()
  @ValidateIf((object, value) => value !== null)
  offer_sticker_color_1: string;

  @IsString()
  @ValidateIf((object, value) => value !== null)
  offer_sticker_color_2: string;

  @IsString()
  @ValidateIf((object, value) => value !== null)
  offer_sticker_color_3: string;

  @IsNumber()
  @ValidateIf((object, value) => value !== null)
  sort_order_setting: number | null;

  @IsString()
  category_1: string;

  @IsString()
  @ValidateIf((object, value) => value !== null)
  category_2: string | null;

  @IsNumber()
  amount: number;

  @IsNumber()
  payout_usd: number;

  @IsDateString()
  start_datetime: string;

  @IsDateString()
  end_datetime: string;

  @IsBoolean()
  is_multi_reward: boolean;
}

class CountryDTO {
  @IsObject()
  include: {
    [countryCode: string]: Country;
  };

  exclude: any[];
}

class Country {
  @IsNumber()
  id: number;

  @IsString()
  code: string;

  @IsString()
  name: string;
}

class StateCityDTO {
  include: any[];
  exclude: any[];
}

class ConnectionTypeDTO {
  @IsBoolean()
  cellular: boolean;

  @IsBoolean()
  wifi: boolean;
}

class DeviceOSDTO {
  @IsBoolean()
  android: boolean;

  @IsBoolean()
  ios: boolean;

  @IsBoolean()
  web: boolean;

  @IsNumber()
  @ValidateIf((object, value) => value !== null)
  min_ios: number | null;

  @IsNumber()
  @ValidateIf((object, value) => value !== null)
  max_ios: number | null;

  @IsNumber()
  @ValidateIf((object, value) => value !== null)
  min_android: number | null;

  @IsNumber()
  @ValidateIf((object, value) => value !== null)
  max_android: number | null;
}

export class Offer2DTO {
  @ValidateNested()
  @Type(() => OfferDTO)
  Offer: OfferDTO;

  @ValidateNested()
  @Type(() => CountryDTO)
  Country: CountryDTO;

  @ValidateNested()
  @Type(() => StateCityDTO)
  State: StateCityDTO;

  @ValidateNested()
  @Type(() => StateCityDTO)
  City: StateCityDTO;

  @ValidateNested()
  @Type(() => ConnectionTypeDTO)
  Connection_Type: ConnectionTypeDTO;

  @ValidateNested()
  @Type(() => StateCityDTO)
  Device: StateCityDTO;

  @ValidateNested()
  @Type(() => DeviceOSDTO)
  OS: DeviceOSDTO;
}

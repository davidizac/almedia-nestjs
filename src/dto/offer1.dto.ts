import {
  IsString,
  IsNumber,
  IsUrl,
  IsArray,
  IsEnum,
  ValidateNested,
  IsObject,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Device, Platform } from 'src/enums';

class Category {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}

class Vertical {
  @IsString()
  vertical_id: string;

  @IsString()
  vertical_name: string;
}

export class Offer1DTO {
  @IsString()
  offer_id: string;

  @IsString()
  offer_name: string;

  @IsString()
  offer_desc: string;

  @IsString()
  call_to_action: string;

  @IsString()
  disclaimer: string;

  @IsUrl()
  offer_url: string;

  @IsUrl()
  offer_url_easy: string;

  @IsNumber()
  payout: number;

  @IsString()
  payout_type: string;

  @IsNumber()
  amount: number;

  @IsUrl()
  image_url: string;

  @IsUrl()
  image_url_220x124: string;

  @IsArray()
  countries: string[];

  @IsEnum(Platform)
  platform: Platform;

  @IsEnum(Device)
  device: Device;

  @IsObject()
  category: {
    [category: string]: Category;
  };

  @IsNumber()
  last_modified: number;

  @IsUrl()
  preview_url: string;

  @IsString()
  package_id: string;

  @ValidateNested({ each: true })
  @Type(() => Vertical)
  verticals: Vertical[];
}

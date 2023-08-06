import { Injectable } from '@nestjs/common';
import { offer1, offer2 } from './payloads';
import { ProviderFactory } from './providers/provider.factory';
import { Offer } from './entity';

@Injectable()
export class AppService {
  providers: any[] = [
    {
      name: 'offer1',
      payload: offer1,
    },
    {
      name: 'offer2',
      payload: offer2,
    },
  ];

  async handleJob() {
    const results: Offer[] = [];
    for (let provider of this.providers) {
      const providerInstance = ProviderFactory.getProvider(provider.name);
      const offers = providerInstance.getOffers(provider.payload);
      for (let offer of offers) {
        const result = await providerInstance.mapDTOToEntity(offer as any);
        if (result) results.push(result);
      }
    }
    return results;
  }
}

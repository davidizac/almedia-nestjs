import { Offer1Provider } from './offer1.provider';
import { Offer2Provider } from './offer2.provider';

export class ProviderFactory {
  public static getProvider(name: string): Offer1Provider | Offer2Provider {
    if (name == 'offer1') return new Offer1Provider();
    else if (name == 'offer2') return new Offer2Provider();
    return null;
  }
}

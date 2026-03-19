import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { LucideAngularModule, Menu, ChevronDown, X, ChevronUp, ArrowLeft, ArrowRight, ShoppingCart, TrendingUp, HeartPulse, Rocket, Settings, Globe, Car } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({ Menu, ChevronDown, X, ChevronUp, ArrowLeft, ArrowRight, ShoppingCart, TrendingUp, HeartPulse, Rocket, Settings, Globe, Car })
    )
  ]
};

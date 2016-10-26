import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { CustomerModuleLibrary } from './CustomerModuleLibrary.js';
const platform = platformBrowserDynamic();
platform.bootstrapModule(CustomerModuleLibrary);

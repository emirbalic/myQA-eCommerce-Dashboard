import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PerformanceComponent } from './_performance/performance.component';
import { OverallComponent } from './_overall/overall.component';
import { HomepageComponent } from './_homepage/homepage.component';
import { SearchComponent } from './_search/search.component';
import { ProductDetailsComponent } from './_product-details/product-details.component';
import { ShoppingCartComponent } from './_shopping-cart/shopping-cart.component';
import { PaymentsComponent } from './_payments/payments.component';
import { PromosComponent } from './_promos/promos.component';
import { PostOrderComponent } from './_post-order/post-order.component';
import { CustomerCareComponent } from './_customer-care/customer-care.component';
import { UserBtbB2cComponent } from './_user-b2b_btc/user-b2b-btc.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'overall',
      component: OverallComponent,
    },
    {
      path: 'performance',
      component: PerformanceComponent,
    },
    {
      path: 'homepage',
      component: HomepageComponent,
    },
    {
      path: 'search',
      component: SearchComponent,
    },
    {
      path: 'product-details',
      component: ProductDetailsComponent,
    },
    {
      path: 'shopping-cart',
      component: ShoppingCartComponent,
    },
    {
      path: 'payments',
      component: PaymentsComponent,
    },
    {
      path: 'promos',
      component: PromosComponent,
    },
    {
      path: 'post-order',
      component: PostOrderComponent,
    },
    {
      path: 'customer-care',
      component: CustomerCareComponent,
    },
    {
      path: 'user-b2b-btc',
      component: UserBtbB2cComponent,
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    // {
    //   path: '/pages/forms/inputs',
    //   component: EWizardComponent,
    // },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

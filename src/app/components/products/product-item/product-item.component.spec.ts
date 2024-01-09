import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';


const mokcData = {

    "_id": "643ffca187aaa3215160d86b",
    "title": "KETCHUP HEINZ CON BBQ 24x397gr",
    "description": null,
    "sku": "HK09",
    "regular_price": 1727.28,
    "id_marketplace_store_category": "61e1cda587aaa31a42699064",
    "images": [
        {
            "_id": {
                "$id": "621ce30a87aaa3656945c4c6"
            },
            "name": "HK09.png",
            "image": "https://d39waow2eyi49x.cloudfront.net/datasheet/1057/1667/product/882198/621ce30a87aaa3656945c4c6_HK09.png",
            "position": 0,
            "mime": "image/png",
            "id_product": 882198,
            "massive": true
        },
        {
            "_id": {
                "$id": "621ce30a87aaa3656945c4c6"
            },
            "name": "HK09.png",
            "image": "https://d39waow2eyi49x.cloudfront.net/datasheet/1057/1667/product/882198/621ce30a87aaa3656945c4c6_HK09.png",
            "position": 0,
            "mime": "image/png",
            "id_product": 882198,
            "massive": true
        }
    ],
    "status": "publish",
    "id_product": 882198,
    "id_depot": 133954,
    "medium": [
        {
            "image": "https://d3labhpzh9nlv5.cloudfront.net/product/cache/882198/medium/621ce30a87aaa3656945c4c6_HK09.png",
            "text": "621ce30a87aaa3656945c4c6_HK09.png"
        },
        {
            "image": "https://d3labhpzh9nlv5.cloudfront.net/product/cache/882198/medium/621ce30a87aaa3656945c4c6_HK09.png",
            "text": "621ce30a87aaa3656945c4c6_HK09.png"
        }
    ],
    "small": [
        {
            "image": "https://d3labhpzh9nlv5.cloudfront.net/product/cache/882198/small/621ce30a87aaa3656945c4c6_HK09.png",
            "text": "621ce30a87aaa3656945c4c6_HK09.png"
        },
        {
            "image": "https://d3labhpzh9nlv5.cloudfront.net/product/cache/882198/small/621ce30a87aaa3656945c4c6_HK09.png",
            "text": "621ce30a87aaa3656945c4c6_HK09.png"
        }
    ],
    "id_marketplace_store_brand": {
        "$id": "61fd6cce87aaa35c0a335c73"
    },
    "amenity_add": false,
    "booking_detail": false,
    "has_booking": false,
    "has_daypass": false,
    "unit": null,
    "order_anonymous": true,
    "featured": false,
    "offer_percent": null,
    "offer_price": null,
    "date_on_sale_from": null,
    "date_on_sale_to": null,
    "stock_quantity": 6.75,
    "factor": "36",
    "regular_usd": 47.98,
    "tax_rate": 0.16,
    "print": false,
    "variations": [],
    "large": [
        {
            "position": 1,
            "image": "https://d1279ybbfotmtl.cloudfront.net/public/img/nofound.png",
            "text": ""
        },
        {
            "position": 1,
            "image": "https://d1279ybbfotmtl.cloudfront.net/public/img/nofound.png",
            "text": ""
        }
    ],
    "image": {
        "_id": {
            "$id": "621ce30a87aaa3656945c4c6"
        },
        "name": "HK09.png",
        "image": "https://d39waow2eyi49x.cloudfront.net/datasheet/1057/1667/product/882198/621ce30a87aaa3656945c4c6_HK09.png",
        "position": 0,
        "mime": "image/png",
        "id_product": 882198,
        "massive": true
    },
    "variation": false,
    "size": false,
    "color1": false,
    "color2": false,
    "model": false,
    "reviews_average": 0,
    "pickup": [],
    "check_pickup": false,
    "has_variation": false,
    "hash": "b5ljnrSjji_Uw_qXbzC0A_H7QeCPwJhhXAEXgOrQI-Oak0D7w90D930Tq-I6jYBR",
    "site_name": "alimentos global",
    "marketplace": "rIH99Wc_HcMlonQTugzKySx5J31O2XgFJsLVJS8m9tF-Zyr01SfiwmvQZFVuqErM8soJeGV-RCgdSMXpT_25wg",
    "store": "alimentos global",
    "ico": "https://d1279ybbfotmtl.cloudfront.net/public/img/deepyshop/logo_mobile.png",
    "flag": "#0078AB",
    "url": "643ffca187aaa3215160d86b_KETCHUP-HEINZ-CON-BBQ-24x397gr",
    "offer_usd": null,
    "offer_min": null,
    "brand": "HEINZ"
}


describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = mokcData;
  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has title contain mock data', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.product-item p')?.textContent).toContain('KETCHUP HEINZ CON BBQ 24x397gr');
  });

});

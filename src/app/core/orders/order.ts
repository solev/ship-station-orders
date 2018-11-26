
export interface Orders {
    orders: Order[];
    total:  number;
    page:   number;
    pages:  number;
  }
  
  export interface Order {
    orderId:                  number;
    orderNumber:              string;
    orderKey:                 string;
    orderDate:                string;
    createDate:               string;
    modifyDate:               string;
    paymentDate:              string;
    shipByDate:               string;
    orderStatus:              string;
    customerId:               number;
    customerUsername:         string;
    customerEmail:            string;
    billTo:                   Address;
    shipTo:                   Address;
    items:                    OrderItem[];
    orderTotal:               number;
    amountPaid:               number;
    taxAmount:                number;
    shippingAmount:           number;
    customerNotes:            string;
    internalNotes:            string;
    gift:                     boolean;
    giftMessage:              null | string;
    paymentMethod:            null | string;
    requestedShippingService: string;
    carrierCode:              string;
    serviceCode:              string;
    packageCode:              string;
    confirmation:             string;
    shipDate:                 string;
    holdUntilDate:            null;
    weight:                   Weight;
    dimensions:               Dimensions;
    insuranceOptions:         InsuranceOptions;
    internationalOptions:     InternationalOptions;
    advancedOptions:          AdvancedOptions;
    tagIds:                   null;
    userId:                   null;
    externallyFulfilled:      boolean;
    externallyFulfilledBy:    null;
  }
  
  export interface AdvancedOptions {
    warehouseId:       number;
    nonMachinable:     boolean;
    saturdayDelivery:  boolean;
    containsAlcohol:   boolean;
    mergedOrSplit:     boolean;
    mergedIds:         any[];
    parentId:          null;
    storeId:           number;
    customField1:      string;
    customField2:      string;
    customField3:      null | string;
    source:            null | string;
    billToParty:       null;
    billToAccount:     null;
    billToPostalCode:  null;
    billToCountryCode: null;
  }
  
  export interface Address {
    name:            string;
    company:         null | string;
    street1:         null | string;
    street2:         null | string;
    street3:         null;
    city:            null | string;
    state:           null | string;
    postalCode:      null | string;
    country:         null | string;
    phone:           null | string;
    residential:     boolean | null;
    addressVerified: null | string;
  }
  
  export interface Dimensions {
    units:  string;
    length: number;
    width:  number;
    height: number;
  }
  
  export interface InsuranceOptions {
    provider:       null | string;
    insureShipment: boolean;
    insuredValue:   number;
  }
  
  export interface InternationalOptions {
    contents:     null | string;
    customsItems: CustomsItem[] | null;
    nonDelivery:  null | string;
  }
  
  export interface CustomsItem {
    customsItemId:        number;
    description:          string;
    quantity:             number;
    value:                number;
    harmonizedTariffCode: null;
    countryOfOrigin:      string;
  }
  
  export interface OrderItem {
    orderItemId:       number;
    lineItemKey:       null | string;
    sku:               string;
    name:              string;
    imageUrl:          null;
    weight:            Weight;
    quantity:          number;
    unitPrice:         number;
    taxAmount:         null;
    shippingAmount:    null;
    warehouseLocation: null | string;
    options:           Option[];
    productId:         number | null;
    fulfillmentSku:    null | string;
    adjustment:        boolean;
    upc:               null;
    createDate:        string;
    modifyDate:        string;
  }
  
  export interface Option {
    name:  string;
    value: string;
  }
  
  export interface Weight {
    value: number;
    units: string;
  }
  
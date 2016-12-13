import DRFSerializer from './drf';

export default DRFSerializer.extend({
  attrs: {
    printName: 'print_name',
    numCode: 'num_code',
    isoCode: 'iso3',
    currencyName: 'currency_name',
    currencyCode: 'currency_code'
  }
});

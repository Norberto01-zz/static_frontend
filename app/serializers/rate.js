import DRFSerializer from './drf';

export default DRFSerializer.extend({
  attrs: {
    ccIso: 'cc_iso3',
    countryName: 'country_name'
  }
});

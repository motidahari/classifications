import axios from 'axios';

export class CorporateService {
  async getCompanyNameByTaxId(taxId: string) {
    try {
      const response = await axios.get(`https://data.gov.il/api/3/action/datastore_search`, {
        params: {
          resource_id: 'f004176c-b85f-4542-8901-7b3176f9a054',
          q: taxId
        }
      });

      if (response.data && response.data.result && response.data.result.records && response.data.result.records.length > 0) {
        const company = response.data.result.records[0];
        return company['שם חברה'] || null;
      }

      return null;
    } catch (error) {
      console.error('Error fetching company data:', error);
      return null;
    }
  }
}
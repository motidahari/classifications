import { AppContainer } from './config/container';
import { appConfig } from './config/config';
import { ServiceHandler } from './core/service.handler';

const appContainer = new AppContainer(appConfig);
const serviceHandler = new ServiceHandler();
serviceHandler.handler();
const apiGatewayHandler = serviceHandler.enableApiGatewayHandler();

apiGatewayHandler.app.get('/', async (req, res) => {
  try {
    console.log('here1');
    
    const data = await appContainer.expensesService.getExpenses();

    res.send(data);
  } catch (error) {
    console.log('error', error);
  }
});

apiGatewayHandler.app.get('/classifications', async (req, res) => {
  try {
    console.log('here');
    const data = await appContainer.classificationService.getClassifications();

    res.send(data);
  } catch (error) {
    console.log('error', error);
  }
});

apiGatewayHandler.app.get('/occupations', async (req, res) => {
  console.log('here2');
  
  try {
    const data = await appContainer.occupationService.getOccupations();

    res.send(data);
  } catch (error) {
    console.log('error', error);
  }
});

apiGatewayHandler.app.get('/prompt', async (req, res) => {
  const taxId: string = req.query.taxId as string;

  if (!taxId) {
    return res.status(400).send('Missing taxId');
  }

  try {
    const corporateName = await appContainer.corporateService.getCompanyNameByTaxId(taxId);

    if (!corporateName) {
      return res.status(404).send('Issuer company not found');
    }

    const businessDetails = {
      businessType: "LICENSED",
      businessName: "כן או לא פתרונות בעמ",
      occupation: "שירותים מקצועיים",
      taxId: "517028357"
    };

    const expenseDetails = {
      amount: 100,
      vat: 17,
      totalAmount: 117,
      documentNumber: 111,
      companyIssuer: corporateName,
      companyIssuerTaxId: taxId,
      date: "2024-09-25",
      documentType: "Tax Invoice/Receipt"
    };

    const data = await appContainer.promptService.classifyExpense(businessDetails, expenseDetails);

    res.status(200).send(data);
  } catch (error) {
    console.log('error', error);
  }
});

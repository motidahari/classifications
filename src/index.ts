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
  try {
    const businessDetails = {
      businessType: "LICENSED",
      businessName: "כן או לא פתרונות בעמ",
      occupation: "שירותים מקצועיים",
      taxId: "517028367"
    };

    const expenseDetails = {
      amount: 100,
      vat: 17,
      totalAmount: 117,
      documentNumber: 111,
      companyIssuer: "בזק החברה הישראלית לתקשורת בע\"מ",
      companyIssuerTaxId: "520031931",
      date: "2024-09-25",
      documentType: "Tax Invoice/Receipt"
    };

    const data = await appContainer.promptService.classifyExpense(businessDetails, expenseDetails);

    res.send(data);
  } catch (error) {
    console.log('error', error);
  }
});

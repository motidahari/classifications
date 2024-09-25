import dotenv from 'dotenv';
import { AppContainer } from './config/container';
import { appConfig } from './config/config';
import { ServiceHandler } from './core/service.handler';

dotenv.config();

const appContainer = new AppContainer(appConfig);
const serviceHandler = new ServiceHandler();
serviceHandler.handler();
const apiGatewayHandler = serviceHandler.enableApiGatewayHandler();

apiGatewayHandler.app.get('/', async (req, res) => {
  try {
    const data = await appContainer.expensesService.getExpenses();

    res.send(data);
  } catch (error) {
    console.log('error', error);
  }
});

apiGatewayHandler.app.get('/classifications', async (req, res) => {
  try {
    const data = await appContainer.classificationService.getClassifications();

    res.send(data);
  } catch (error) {
    console.log('error', error);
  }
});

apiGatewayHandler.app.get('/occupations', async (req, res) => {
  try {
    const data = await appContainer.occupationService.getOccupations();

    res.send(data);
  } catch (error) {
    console.log('error', error);
  }
});

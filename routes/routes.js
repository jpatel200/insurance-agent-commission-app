/** 
 * @module
 * Routes for the service endpoints
 * 
*/
const routes = require('express').Router();
const CommissionService = require('../service/CommissionService');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.post('/policy', (req, res) => {
  
    let commissionService = new CommissionService(req.body);
    let agentCommissionSummary = commissionService.computeAgentCommission();
    res.status(200).json(agentCommissionSummary);
  });



module.exports = routes;






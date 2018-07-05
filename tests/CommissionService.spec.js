const expect = require('chai').expect;
const CommissionService = require('../service/CommissionService');
const AgentHierarchy = require('../models/AgentHierarchy');
const Policy = require('../models/Policy');
const CommissionPlanFactory = require('../factories/CommissionPlanFactory');


describe('CommissionService', () => {
    describe('exmple of pending test', () => {
        xit('fake test will not run', () => {
            expect(true).to.equal(false);
        });


    })

    describe('constructor', () => {

        it('should have all expected methods and fields', () => {
            let commissionRequest = {
                "policy" : {
                "commissionPlan" : "A",
                 "policyAmount": 100000
                
                },
                
                 "agentHierarchy" :{
                    "sellingAgent" : {"agentName" : "Selling Agent", "commission" : 0.02},
                 
                    "superAgents":[
                               { "agentName": "SuperAgent_1", "commission" : 0.0250},
                               { "agentName": "SuperAgent_2", "commission" : 0.0325},
                               { "agentName": "SuperAgent_3", "commission" : 0.0225}
                
                            ]
                        
                    
                        }
                    
                }
            const commissionService = new CommissionService(commissionRequest);

            expect(commissionService.hasOwnProperty('policy')).to.equal(true);
            expect(commissionService.hasOwnProperty('agentHierarchy')).to.equal(true);
            expect(typeof commissionService.policy).to.equal('object');
            expect(typeof commissionService.agentHierarchy).to.equal('object');
            expect(typeof commissionService.computeAgentCommission).to.equal('function');


        }); //end of it('should have all expected methods and fields')



    }); //end describe('constructor')


    describe('methods', () => {



        describe('computeAgentCommission', () => {
            it('should correctly calculate agent commissions for Commission plan=B', () => {

                let commissionRequest = {
                    "policy" : {
                    "commissionPlan" : "B",
                     "policyAmount": 100000
                    
                    },
                    
                     "agentHierarchy" :{
                        "sellingAgent" : {"agentName" : "Selling Agent", "commission" : 0.02},
                     
                        "superAgents":[
                                   { "agentName": "SuperAgent_A", "commission" : 0.0250},
                                   { "agentName": "SuperAgent_B", "commission" : 0.0325},
                                   { "agentName": "SuperAgent_C", "commission" : 0.0225}
                    
                                ]
                            
                        
                            }
                        
                    }


                let commissionService = new CommissionService(commissionRequest);

                let commissionSummary = commissionService.computeAgentCommission();

                expect(commissionSummary.commissions.sellingAgent).to.equal(1400);
                expect(commissionSummary.commissions.SuperAgent_A).to.equal(200);
                expect(commissionSummary.commissions.SuperAgent_B).to.equal(130);
                expect(commissionSummary.commissions.SuperAgent_C).to.equal(0);


            }); //it computes agent commissions for commission plan=B

            it('should correctly calculate agent commissions for Commission plan=A', () => {

                let commissionRequest = {
                    "policy" : {
                    "commissionPlan" : "A",
                     "policyAmount": 100000
                    
                    },
                    
                     "agentHierarchy" :{
                        "sellingAgent" : {"agentName" : "Selling Agent", "commission" : 0.02},
                     
                        "superAgents":[
                                   { "agentName": "SuperAgent_1", "commission" : 0.0250},
                                   { "agentName": "SuperAgent_2", "commission" : 0.0325},
                                   { "agentName": "SuperAgent_3", "commission" : 0.0225}
                    
                                ]
                            
                        
                            }
                        
                    }




                let commissionService = new CommissionService(commissionRequest);

                let commissionSummary = commissionService.computeAgentCommission();


                expect(commissionSummary.commissions.sellingAgent).to.equal(1000);
                expect(commissionSummary.commissions.SuperAgent_1).to.equal(125);
                expect(commissionSummary.commissions.SuperAgent_2).to.equal(0);
                expect(commissionSummary.commissions.SuperAgent_3).to.equal(0);


            }); //it computes agent commissions for commission plan=A

        }) //end describe computeCommission




    }); //end describe('methods')*/





}); //end describe('CommissionCalculator')
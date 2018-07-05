const expect = require('chai').expect;
const CommissionPlanFactory = require('../factories/CommissionPlanFactory');
const CommissionPlan = require('../factories/CommissionPlanFactory/CommissionPlan');

describe('CommissionPlanFactory', () => {
    describe('exmple of pending test', () => {
        xit('fake test will not run', () => {
            expect(true).to.equal(false);


        });


    })

    describe('constructor', () => {

        it('should have all expected methods and fields', () => {

            let commissionPlanFactory = new CommissionPlanFactory();
            
            expect(typeof commissionPlanFactory.createCommissionPlan).to.equal('function');
      

        }); //end of it('should have all expected methods and fields')

       


    }); //end describe('constructor')


    describe('methods', () => {



        describe('createCommissionPlan', () => {
            it('should correctly create commission plan', () => {


                let commissionPlan = new CommissionPlanFactory().createCommissionPlan('A');
               
                //give commission plan in JSON file
                /*{"plan": "A", "sellingAgentCommission" : 0.5, "superAgentCommissions" : [0.05,0.0,0] },
                {"plan": "B", "sellingAgentCommission" : 0.7, "superAgentCommissions" : [0.08,0.04,0] }*/

                expect(commissionPlan.plan).to.equal('A');
                expect(commissionPlan.sellingAgentCommission).to.equal(0.5);
                expect(commissionPlan.superAgentCommissions[0]).to.equal(0.05);
                expect(commissionPlan.superAgentCommissions[1]).to.equal(0.0);
                expect(commissionPlan.superAgentCommissions[2]).to.equal(0);
                

            });
           
               
               

            }) //end describe createCommissionPlan

           
        }); //end describe('methods')





    }); //end describe('CommissionCalculator')
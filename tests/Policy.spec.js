const expect = require('chai').expect;

const Policy = require('../models/Policy');
const BasePolicy = require('../models/Policy/BasePolicy');
const BaseCommissionPlan = require('../factories/CommissionPlanFactory/BaseCommissionPlan');
const CommissionPlanFactory = require('../factories/CommissionPlanFactory');


describe('Policy', () => {
    describe('exmple of pending test', () => {
        xit('fake test will not run', () => {
            expect(true).to.equal(false);
        });


    })

    describe('constructor', () => {

        it('should have all expected methods and fields', () => {

                      
            const policy = new Policy();

            expect(policy.hasOwnProperty('commissionPlan')).to.equal(true);
            expect(policy.hasOwnProperty('policyAmount')).to.equal(true);
           


        }); //end of it('should have all expected methods and fields')

        it('should take an initial value set to an internal "value field', () => {


            //create commissionPlan 
            let commissionPlan = new CommissionPlanFactory().createCommissionPlan('B');

            //create new policy with commission plan and policy amount
            let policy = new Policy(commissionPlan, 100000);

           
           
            expect(policy.commissionPlan).to.equal(commissionPlan);
            expect(policy.commissionPlan instanceof BaseCommissionPlan).to.equal(true);
            expect(policy.policyAmount).to.equal(100000);
            expect(typeof policy.policyAmount).to.equal('number');

        });



    }); //end describe('constructor')


   





}); //end describe('CommissionCalculator')
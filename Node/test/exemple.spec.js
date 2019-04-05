const assert = require ('assert');
const should = require ('chai').should();
const expect = require('chai').expect;


describe('exemple de test: ', () => {

    let data = [];
    let obj = {};

    beforeEach(()=> {
        data = [1, 2, 0, 4, 5];
        obj = { name: 'John', lastname: 'Doe', email: 'jd@gmail.com'};
    });

    // tester qu'il y a 5 valeurs dans le tableau

    it ('Array should have 5 value', ()=>{
        assert.equal(data.length, 5);
    })


    it('pending test'); // test en attente (recoonu par la machine qui indique que le test est en attente)

    it('2*3 should be equal to 6', ()=>{
       assert.equal(2*3, 6);
    })

    it('4 should be below than 5', ()=>{
        (4).should.be.below(5)
    });

    it('5 should be below or equal to 5', ()=>{
        (4).should.be.most(5);
    });

    // ici test ecrit avec expect
    it('foo === foo', ()=> {
        expect('foo').to.equal('foo');
    });

    it('data is an Array', ()=>{
        expect(data).to.be.an.instanceOf(Array);
    });

    it('Data 5 equals to 5', ()=> {
        expect(data.length).to.equal(5);
    });

    it('0 should be in data', ()=>{
        expect(data).to.contains(0)
    });

    it('3 should not be in data', ()=>{
expect(data).to.not.contains(3)
    });

    it('0 should be in data', ()=>{
        expect(data.includes(0)).to.be.true;
    });


    it('data ne contient pas 3 et contient 0', () => {
        expect(data).to.contains(0) && expect(data).to.not.contains(3)
    });

    it('obj is an object', () => {
        expect(obj).to.be.an.instanceOf(Object)
    });

    it('obj.name === "John"', () => {
        expect(obj).have.property('name', 'John');
    });
    it('obje have key "name", "lastname", and "email"', ()=> {
        expect(obj).have.all.keys('name', 'lastname', 'email');
    });

    // Creation d'une calculatrice et test des opérations

    it()

});
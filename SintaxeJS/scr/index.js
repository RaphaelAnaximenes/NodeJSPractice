//const EntityBase = require("./entityBase");
//
//console.log(new EntityBase({
//    name : 'Raphael Anaximenes',
//    gender: 'male',
//}).name)
//
//console.log(new EntityBase({
//    name : 'Xuxa da Silva',
//    gender: 'female',
//}).name)

const assert = require('assert')
const Employee = require('./employee')
const Util = require('./util')

const GENDER = {
    male: 'male',
    female:'female'
}

{
    const employee = new Employee({
        name: 'XuxadaSilva',
        gender: GENDER.female
    })
    assert.throws(() => employee.birthYear, {message: 'Você precisa definir a idade primeiro!!'})
}

//mock
const CURRENT_YEAR = 2021
Date.prototype.getFullYear = () => CURRENT_YEAR


{
    const employee = new Employee({
        name: 'Joãozinho Xtreme',
        age: 20,
        gender: GENDER.male
    })


        //testes
    assert.deepStrictEqual(employee.name, "Mr. Joãozinho Xtreme")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5040.40))
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4032.32))

    const expectedBirthYear = 2001
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)
}
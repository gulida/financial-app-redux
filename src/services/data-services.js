import FinancialData from "./financial-data";
import TermData from "./term-data";

export default class DataService {

    fData = FinancialData
    tData = TermData

    getTerm() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.tData.map(value => value.title))
            }, 700)
        })
    }

    getIncomeCategory() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.75) {
                    reject(new Error("Something bad happened"));
                } else {
                    resolve(this.fData[0].income.map(value => {
                        const category = value.category;
                        const amount = category.map(value1 => (value1.amount))
                            .reduce((acc, price) => acc + price)

                        return {id: (value.id), amount, value: value.name,}
                    }))
                }

            }, 700)
        })
    }
/*        const incomeCategory = FinancialData[0].income.map(value => {
            const category = value.category;
            const amount = category.map(value1 => (value1.amount))
                    .reduce((acc, price) => acc + price)

            return { id: (value.id), amount, value: value.name, }
        })
        return incomeCategory
    }*/

    getSpendingCategory() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.fData[1].spending.map(value => {
                    const category = value.category;
                    const amount = category.map(value1 => value1.amount)
                        .reduce((acc, price) => acc + price)
                    return { id: (value.id), amount, value: value.name}
                }))
            }, 700)
        })
    }

    getIncomeTotalAmount() {
        const incomeCategory = this.fData[0].income.map(value => {
            const category = value.category;
            const amount = category.map(value1 => (value1.amount))
                .reduce((acc, price) => acc + price)
            return amount
        })
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(incomeCategory.reduce((acc, price) => acc + price, 0))
            }, 700)
        })
       /* const incomeCategory = FinancialData[0].income.map(value => {
            const category = value.category;
            const amount = category.map(value1 => (value1.amount))
                .reduce((acc, price) => acc + price)
            return amount
        })

        const totalAmount = incomeCategory.reduce((acc, price) => acc + price, 0)
        return totalAmount*/
    }

    getSpendingTotalAmount() {
        const spendingCategory = this.fData[1].spending.map(value => {
            const category = value.category;
            const amount = category.map(value1 => (value1.amount))
                .reduce((acc, price) => acc + price)
            return amount
        })
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(spendingCategory.reduce((acc, price) => acc + price, 0))
            }, 700)
        })
    }



/*
    getSpendingTotalAmount() {
        const spendingCategory = FinancialData[1].spending.map(value => {
            const category = value.category;
            const amount = category.map(value1 => value1.amount)
                .reduce((acc, price) => acc + price)
            return amount
        })

        const totalAmount = spendingCategory.reduce((acc, price) => acc + price, 0)
        return totalAmount
    }
*/



    getIncomeCategoryId(id) {
        const income = FinancialData[0].income
        const category = income[id].category
        return {
            name: income[id].name,
            category: category
        }
    }

    getSpendingCategoryId(id) {
        const spending = FinancialData[1].spending
        const category = spending[id].category
        return {
            name: spending[id].name,
            category: category
        }
    }

    getIncomeCategoryIdAmount(id) {
        const income = FinancialData[0].income
        const category = income[id].category
        const total = category.map(value => (value.amount))
                                .reduce( (acc, price ) => acc + price, 0)
        return total
    }

    getSpendingCategoryIdAmount(id) {
        const spending = FinancialData[1].spending
        const category = spending[id].category
        const total = category.map(value => value.amount)
                                .reduce((acc, price) => acc + price, 0)
        return total
    }

}
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'customer';
    leastFavoriteCustomer = 'Assignment to constant variable';
    return leastFavoriteCustomer;
}
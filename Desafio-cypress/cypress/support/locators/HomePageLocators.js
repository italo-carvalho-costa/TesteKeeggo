class HomePageLocators {
    get urlProcuraProduto(){
        return 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search'
    }

    get autoCompleteInput() {
        return '#autoComplete';
    }

    get searchButton() {
        return '.autoCompleteCover > div > img';
    }

    get categoryImage() {
        return ':nth-child(4) > .img';
    }
}

export default new HomePageLocators();

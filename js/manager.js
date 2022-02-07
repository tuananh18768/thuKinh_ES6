class Manager {
    constructor() {
        this.DSKinh = [];
    }
    addKinh(kinh) {
        this.DSKinh.push(kinh);
    }
    showKinh() {
        let content = ''
        content = this.DSKinh.reduce((element, item) => {
            element += `<div class="col-4" >
                <img class="img-fluid" data-id="${item.id}" onclick="clickShow(event)" src= "${item.src}">
            </div>`
            return element
        }, '')
        return content;
    }
}
export default Manager;
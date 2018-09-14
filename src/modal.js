var tingle = require('tingle.js');

const modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function () {
        console.log('modal open');
    },
    onClose: function () {
        console.log('modal closed');
    },
    beforeClose: function () {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

export class SnakeModal {

    static open(content) {
        modal.setContent(content);

        modal.addFooterBtn('Сбросить', 'tingle-btn', function () {
            window.location.reload();
        });
        modal.open();
    }
    static close() {
        modal.close();
    }
}
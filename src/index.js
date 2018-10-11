ZOHODESK.extension.onload().then((App) => {
  App.instance.modal({
    url : '/app/modal.html',
    title : "Modal box"
  }).then((modalInfo) => {
    var modalInstance = App.instance.getWidgetInstance(modalInfo.widgetID);
    modalInstance.on('modal.opened', () => {
      console.log('modal loaded successfully');
    });
  }).catch((err) => {
      console.log('modal opening error : ', err);
  });
});

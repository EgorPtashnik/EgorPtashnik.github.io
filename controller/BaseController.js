sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/ui/core/routing/History',
  'sap/ui/core/UIComponent',
  'sap/base/Log',
  'sap/m/MessageBox',
  'sap/m/MessageToast',
  'client/constant/Routes',
  'client/model/actions'
], function(Controller, History, UIComponent) {
  "use strict";

  return Controller.extend("client.controller.BaseController", {
    getModel(sName) {
      return this.getView().getModel(sName);
    },
    setModel(oModel, sName) {
      return this.getView().setModel(oModel, sName);
    },
    getResourceBundle() {
      return this.getOwnerComponent().getModel("i18n").getResourceBundle();
    },
    navTo(psTarget, pmParameters, pbReplace) {
      this.getRouter().navTo(psTarget, pmParameters, pbReplace);
    },
    getRouter() {
      return UIComponent.getRouterFor(this);
    },
    onNavBack() {
      const sPreviousHash = History.getInstance().getPreviousHash();
      if (sPreviousHash !== undefined) window.history.back();
      else this.getRouter().navTo('home', {}, true );
    }
  });

});

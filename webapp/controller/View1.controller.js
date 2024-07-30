sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project2.controller.View1", {
        onInit: function () {


            //Consusme oData from sap s/4 hana

            var oModel = this.getOwnerComponent().getModel();
            var that=this;
            console.log(oModel)
            oModel.read("/MATERIALSSet",
            {
               success:function(data)
               {
                    var xModel = new JSONModel(data);
                    that.getView().setModel(xModel,"odataModel")
                    console.log(xModel)
               },
               error:function(oError)
               {
                    console.log(oError)
                    

               }
            })
        },
        Fetch: function () {
            //Get material data from sap s/4 hana

            var oModel = this.getOwnerComponent().getModel();
            var that=this;
            console.log(oModel)
            oModel.read("/MATERIALSSet",
            {
               success:function(data)
               {
                    var xModel = new JSONModel(data);
                    that.getView().setModel(xModel,"odataModel")
                    console.log(xModel)
               },
               error:function(oError)
               {
                    console.log(oError)
                    

               }
            })
        },
        onPress: function () {

            // Function to get selected rows data
    var getSelectedRowsData = function() {
        var selectedData = [];
        var table = sap.ui.getCore().byId("tab"); 
        if (!table) {
            console.log("Table not found.");
            return selectedData;
        }
        var selectedIndices = table.getSelectedIndices();

        selectedIndices.forEach(function(index) {
            var context = table.getContextByIndex(index);
            var rowData = context.getObject();
            selectedData.push(rowData);
        });

        return selectedData;
    };
            //Send data to database
            var data = JSON.stringify(
                
{
    "CONTAINER": "string",
    "BEGIN": "1",
    "EDI_DC40": "string",
    "SEGMENT_1": "1",
    "TABNAM": "EDI_DC40",
    "DOCREL": "754",
    "STATUS": "30",
    "MESTYP": "MATMAS",
    "OUTMOD": "2",
    "DIRECT": "1",
    "IDOCTYP": "MATMAS05",
    "SNDPOR": "SAPAQE",
    "SNDPRT": "LS",
    "SNDPRN": "LS CPI",
    "RCVPOR": "CPI",
    "RCVPRT": "LS",
    "RCVPRN": "AQECLNT400",
    "E1MARAM": "string",
    "SEGMENT_2": "1",
    "MANDT": "400",
    "MATNR": "teste",
    "ERSDA": "20230612",
    "AENAM": "AJAMMELI",
    "LAEDA": "20230612",
    "PSTAT": "K",
    "BLANZ": "000",
    "BRGEW": "0.000",
    "NTGEW": "0.000",
    "VOLUM": "0.000",
    "WESCH": "0.000",
    "LAENG": "0.000",
    "BREIT": "0.000",
    "HOEHE": "0.000",
    "ERGEW": "0.000",
    "ERVOL": "0.000",
    "GEWTO": "0.0",
    "VOLTO": "0.0",
    "FUELG": "0",
    "STFAK": "0",
    "VPSTA": "K",
    "EXTWG": "DMM165-001",
    "COMPL": "00",
    "MTPOS_MARA": "NORM",
    "ANP": "000000000",
    "MATNR_LONG": "000000000000001132",
    "MTART": "FERT",
    "MBRSH": "M",
    "ERNAM": "AJAMMELI",
    "MEINS": "KGM",
    "E1MAKTM": "string",
    "SEGMENT_3": "1",
    "MSGFN": "005",
    "MAKTX": "IDOC test",
    "SPRAS_ISO": "EN"
  }

)
                
              $.ajax({
                type: 'POST',
                 url: "https://68ae915dtrial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com:443/68ae915dtrial/externalCloud",
                 data : data,
                  contentType : 'application/json',
                  Authorization : `Basic sb-b06e3d72-07bc-40f2-917d-a7f65f0c169b!b313316|it-rt-68ae915dtrial!b55215:c2ad396c-7255-47d2-97df-17a44c94d3fb$o9AOnzUkRtKiEAnpFMn_jKEoyxAol1DQ7pqluY5Rjbs=`,
                  success: function(data){
                     console.log(data);
                 },
                 error: function(oError){
                console.log(oError);
                 }
        
                })
           // })
            
        },
        Get: function () {
            //Get materials from database
            
            var oModel = new JSONModel();
            var that = this;

        $.ajax({
            type: 'GET',
            url: "https://68ae915dtrial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com:443/68ae915dtrial/openconnector",
            contentType : 'application/json',
            Authorization : `Basic sb-b06e3d72-07bc-40f2-917d-a7f65f0c169b!b313316|it-rt-68ae915dtrial!b55215:c2ad396c-7255-47d2-97df-17a44c94d3fb$o9AOnzUkRtKiEAnpFMn_jKEoyxAol1DQ7pqluY5Rjbs=`,
            success: function(data){
                console.log(data);
                 // Set the retrieved data to the JSONModel
                 oModel.setData({ items: data });

                 // Bind the model to the table
                 that.getView().setModel(oModel, "dataModel");
            },
            error: function(oError){
            console.log(oError);
            }

            })
            
        },
        Send: function (){

            //Send material data to sap s/4 hana

            var data = JSON.stringify({
                "CONTAINER": "string",
                "BEGIN": "1",
                "EDI_DC40": "string",
                "SEGMENT_1": "1",
                "TABNAM": "EDI_DC40",
                "DOCREL": "754",
                "STATUS": "30",
                "MESTYP": "MATMAS",
                "OUTMOD": "2",
                "DIRECT": "1",
                "IDOCTYP": "MATMAS05",
                "SNDPOR": "SAPAQE",
                "SNDPRT": "LS",
                "SNDPRN": "LS CPI",
                "RCVPOR": "CPI",
                "RCVPRT": "LS",
                "RCVPRN": "AQECLNT400",
                "E1MARAM": "string",
                "SEGMENT_2": "1",
                "MANDT": "400",
                "MATNR": "SARRAXXTT",
                "ERSDA": "20230612",
                "AENAM": "AJAMMELI",
                "LAEDA": "20230612",
                "PSTAT": "K",
                "BLANZ": "000",
                "BRGEW": "0.000",
                "NTGEW": "0.000",
                "VOLUM": "0.000",
                "WESCH": "0.000",
                "LAENG": "0.000",
                "BREIT": "0.000",
                "HOEHE": "0.000",
                "ERGEW": "0.000",
                "ERVOL": "0.000",
                "GEWTO": "0.0",
                "VOLTO": "0.0",
                "FUELG": "0",
                "STFAK": "0",
                "VPSTA": "K",
                "EXTWG": "DMM165-001",
                "COMPL": "00",
                "MTPOS_MARA": "NORM",
                "ANP": "000000000",
                "MATNR_LONG": "000000000000001132",
                "MTART": "FERT",
                "MBRSH": "M",
                "ERNAM": "AJAMMELI",
                "MEINS": "KGM",
                "E1MAKTM": "string",
                "SEGMENT_3": "1",
                "MSGFN": "005",
                "MAKTX": "IDOC test",
                "SPRAS_ISO": "EN"
              })  
            $.ajax({
                type: 'POST',
                 url: "https://68ae915dtrial.it-cpitrial06-rt.cfapps.us10-001.hana.ondemand.com/http/s4h",
                 data : data,
                  contentType : 'application/json',
                   Authorization : `Basic sb-b06e3d72-07bc-40f2-917d-a7f65f0c169b!b313316|it-rt-68ae915dtrial!b55215:c2ad396c-7255-47d2-97df-17a44c94d3fb$o9AOnzUkRtKiEAnpFMn_jKEoyxAol1DQ7pqluY5Rjbs=`,
                success: function(data){
                     console.log(data);
                 },
                 error: function(oError){
                console.log(oError);
                 }
        
                })

        },
        Retrieve: function (){

            //retrieve material data from databse

            
        },
        Replicate: function (){

        //Send data from database to aqe and replicate



        }
                
    });
});

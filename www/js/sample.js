
$(document).ready(function () {


    //map
    //initialize();
    //company
    JsonpTest();
    ////update

    //var crudServiceBaseUrl = "http://localhost/WCF_REST/RESTFullService.svc",
    //                  dataSource = new kendo.data.DataSource({
    //                      transport: {
    //                          update: {
    //                              url: crudServiceBaseUrl + "/equipments/update",
    //                              dataType: "json"
    //                          },
    //                          parameterMap: function (options, operation) {
    //                              if (operation !== "read" && options.models) {
    //                                  return { models: kendo.stringify(options.models) };
    //                              }
    //                          }
    //                      },
    //                      batch: true,
    //                      pageSize: 20,
    //                      schema: {
    //                          model: {
    //                              id: "EquipmentID",
    //                              fields: {
    //                                  EquipmentID: { editable: false, nullable: true },
    //                                  EquipmentSerialNumber: { type: "string" },
    //                                  Description: { type: "text" },
    //                                  Description2: { type: "string" }
    //                              }
    //                          }
    //                      }
    //                  });


    ////equipment
    debugger;
    $("#equipments").kendoGrid({
        dataSource: {
            type: "GET",
            transport: {
                read: "http://localhost/WCF_REST/RESTFullService.svc/equipments/106",
                update: {

                    url: "http://localhost/WCF_REST/RESTFullService.svc/equipments/update/174188/bhoom407/testing/restservice",
                    dataType: "json"
                    
                },
                parameterMap: function (options, operation) {
                    if (operation !== "read" && options.models) {
                        return { models: kendo.stringify(options.models) };
                    }
                }

            },
            batch: true,
            pageSize: 10,
            schema: {
                model: {
                    id: "EquipmentID",
                    fields: {
                        EquipmentID: { editable: false, nullable: true },
                        EquipmentSerialNumber: { type: "string" },
                        Description: { type: "string" },
                        Description2: { type: "string" }
                    }
                }
            }
        },
        groupable: true,
        sortable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        toolbar: ["save", "cancel"],
        columns: [{ template: '<img src="bhumesh.jpg" width="42px" height="42px" />',title:"Image",width:50 }, {
            field: "ESN",
            title: "ESN",
            width: 50
        }, {
            field: "EquipmentID",
            title: "Equipment#",
            width: 50
        }, {
            field: "Description",
            title: "Description",
            width: 50
        }, {
            field: "Description2",
            title: "Description2",
            width: 50
        }],
        editable: true
    });
});

function JsonpTest() {
    var url = "http://localhost/WCF_REST/RESTFullService.svc";
    var data = {};
    //binding companies
    $.ajax({
        type: 'GET',
        url: url + "/companynames",
        data: data,
        dataType: "json",
        success: bindCompany

    });

    function bindCompany(result) {

        $("#companies-list").kendoMobileListView({
            dataSource: result,
            template: "${ename}"
        });
    }

    //bindingequipments

    $.ajax({
        type: 'GET',
        url: url + "/equipments/106",
        data: data,
        dataType: "json",
        success: bindEquipments

    });

    function bindEquipments(result) {
        $("#equip-list").kendoMobileListView({
            dataSource: result,
            template: "${ESN}"
        });

        //$("#EqId").kendoMobileListView({
        //    dataSource: result,
        //    template: "${Description}"
        //});
    }
}


var map;
var Icon;
var marker;
var IsinfoClose;
var co_ords;
var polygon;
function initialize() {
    try {
        debugger;
        var mapOptions = {
            center: new google.maps.LatLng(17.4683158, 78.5733597),
            zoom: 10,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            position: google.maps.ControlPosition.LEFT_BOTTOM
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

        // DrawPolygon();
    }
    catch (error) {
        alert(error);
    }
}
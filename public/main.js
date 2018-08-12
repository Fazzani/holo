/// <reference path="../node_modules/@types/jquery/index.d.ts" />
//import * as $ from "jquery";
// import io from "socket.io";
// import * as bootstrap from "bootstrap";

$(() => {
  //TODO : Afficher la liste des streams
  //TODO: Stop streams dans la mm liste affichée
  var example_select$ = $("#examples_select");
  var test_video_form$ = $("#sendCommandStreamForm");
  var $messages = $("#messages").first();

  example_select$.on("change", function (e) {
    if ($(this).val() != "-1") {
      var url_input$ = test_video_form$.find("#url");
      url_input$.val($(this).val());
    }
  });

  $.ajax({
    type: "GET",
    url: "/api/v1/examples/list",
    success: (data) => {
      //example_select$.empty();
      data.forEach((element) => {
        example_select$.append(`<option value="${element.link}">${element.title}</option>`);
      });
    }
  });

  $.ajax({
    type: "GET",
    url: "/api/v1/nms/streams",
    success: (data) => {
      if (data && data.live) {
        $messages.append(`<li> ${data.live}</li>`);
      }
    }
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('[data-toggle="popover"]').popover();

  /**
   * Stream info
   */
  $("#info-stream-btn").click(function (e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this).closest("form");
    $messages.empty();

    $.ajax({
      type: "POST",
      url: "/api/v1/ffmpeg/info",
      data: form.serialize(), // serializes the form's elements.
      success: (data) => {
        $messages.append("<li>" + data.command + "</li>");
      }
    });
  });

  /**
   * live stream
   */
  test_video_form$.submit(function (e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr("action");
    $messages.empty();

    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(), // serializes the form's elements.
      success: (data) => {
        $("#sURL")
          .val(data.streamUrlFlv)
          .trigger("change", data.streamUrlFlv);
        $messages.append(`<li><a href="${data.streamUrl}">Watch</a></li>`);
        $messages.append("<li>" + data.commandline + "</li>");
      }
    });
  });

  /**
   * Shell execute
   */
  $("#sendCommandShellForm").submit(function (e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    console.log("Form sendCommandShellForm was submitted");

    var form = $(this);
    var url = form.attr("action");
    $messages.empty();

    $.ajax({
      type: "POST",
      url: url,
      dataType: "json",
      data: form.serialize(), // serializes the form's elements.
      success: (data) => {
        $messages.append("<li>" + data + "</li>");
      }
    });
  });

  /**
   * Sockets
   */
  var socket = io();
  socket.on('NMS_EVENT', (data) => {
    console.log(`NMS_EVENT => ${data}`);
  });

  socket.on("shellResultEvent", (data) => {
    $messages.append("<li>" + data + "</li>");
    $messages.scrollTop($messages[0].scrollHeight);
  });

  /** 
   * Main active menu
  */
 $('#mainMenu').filter(function( index ) {
  return $(this).attr("href") === "";
}).addClass()
});
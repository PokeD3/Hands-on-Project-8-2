/*
    JavaScript 6th Edition
    Chapter 8
    Hands-on Project 8-2

    Author: Douglas Faulkner
    Date:   March 5, 2023

    Filename: script.js
*/
"use strict";
//Step4
//var newAccountArray = [];
var newAccountSubmission = {}
var newAccountSubmission;
function createID() {
    var fname = document.getElementById("fnameinput"); 
    var lname = document.getElementById("lnameinput");
    var zip = document.getElementById("zipinput");
    var account = document.getElementById("accountidbox");
    var fields = document.getElementsByTagName("input");
    var acctid;
    var firstInit;
    var lastInit;
    if (fname != "" && lname != "" && zip != "") {
        firstInit = fname.value.charAt(0).toUpperCase();
        lastInit = lname.value.charAt(0).toUpperCase();
        acctid = firstInit + lastInit + zip.value;
        account.value = acctid;
        //Step5
        //newAccountArray = [];
        newAccountObject = {};
        for (var i = 0; i < fields.length - 1; i++) {
            //Step6
            //newAccountArray.push(fields[i].value);
            newAccountObject[fields[i].name] = fields[i].value;
        }
    }
}
//Step7
function createString() {
    newAccountSubmission = JSON.stringify(newAccountObject);
}
function createEventListeners() {
    var fname = document.getElementById("fnameinput");
    var lname = document.getElementById("lnameinput");
    var zip = document.getElementById("zipinput");
	if(fname.addEventListener) {
        fname.addEventListener("change", createID, false);
        lname.addEventListener("change", createID, false);
        zip.addEventListener("change", createID, false);
    } else if (fname.attachEvent) {
        fname.attachEvent("onchange", createID);
        lname.attachEvent("onchange", createID);
        zip.attachEvent("onchange", createID);
    }
    //Step8
    var button = document.getElementById("submitBtn");
    if (button.addEventListener) {
        button.addEventListener("click", createString, false);
    } else if (button.attachEvent) {
        button.attachEvent("onclick", createString);
    }
}
if (window.addEventListener) {
    window.addEventListener ("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}

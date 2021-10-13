(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{464:function(e,t,i){"use strict";i.r(t);var s=i(28),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"fixing-imei-ssdt-imei"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fixing-imei-ssdt-imei"}},[e._v("#")]),e._v(" Fixing IMEI (SSDT-IMEI)")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#fixing-imei-ssdt-imei"}},[e._v("Fixing IMEI (SSDT-IMEI)")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#what-this-ssdt-does"}},[e._v("What this SSDT does")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#methods-to-make-this-ssdt"}},[e._v("Methods to make this SSDT")])])])])]),e._v(" "),i("h2",{attrs:{id:"what-this-ssdt-does"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-this-ssdt-does"}},[e._v("#")]),e._v(" What this SSDT does")]),e._v(" "),i("p",[e._v("The purpose of SSDT-IMEI is:")]),e._v(" "),i("ul",[i("li",[e._v("When mixing Ivy Bridge CPUs with 6 series motherboard, we get an issue where the IMEI device becomes incompatible with macOS. Specifically the device-id won't be recognized and this is a very important issue as macOS relies on the IMEI device for iGPU drivers.\n"),i("ul",[i("li",[e._v("The same applies when mixing Sandy Bridge motherboards with 7 series motherboards")])])]),e._v(" "),i("li",[e._v("An extra issue that may pop up is that the IMEI won't appear in ACPI, which can lead to more issues as macOS expects there to be an ACPI device to apply device-id's. So to resolve, we'll want to verify if we have an IMEI device, and if not create a new device.")])]),e._v(" "),i("h2",{attrs:{id:"methods-to-make-this-ssdt"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#methods-to-make-this-ssdt"}},[e._v("#")]),e._v(" Methods to make this SSDT")]),e._v(" "),i("p",[e._v("For the IMEI fix, there are 2 methods you can choose from:")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/Universal/imei-methods/prebuilt.html"}},[e._v("Prebuilt")]),e._v(" "),i("ul",[i("li",[e._v("The prebuilt are a bit bloated. It's recommended to use the method below.")])])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/Universal/imei-methods/manual.html"}},[e._v("Manual")])],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);
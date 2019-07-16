(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["partner-ticket-offer"],{"05a4":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section"},[t._m(0),s("section",{staticClass:"container section-spacing content"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-7"},[s("p",{staticClass:"is-size-4"},[t._v("\n          Congratulations\n          "),s("span",{staticClass:"has-text-primary"},[t._v(t._s(t.personName))])]),s("p",[t._v("\n          You have recieved a partner invite for the TEDxAuckland event on May\n          the 1st at Whoa! Studios for\n          "),t.freeTicket?[s("strong",{staticClass:"has-text-primary"},[t._v(" free")]),t._v(".\n          ")]:[s("strong",{staticClass:"has-text-primary"},[t._v(t._s(t.formattedTicketPrice))]),t._v(".\n          ")]],2),t._m(1),s("p",[t._v("\n          This event is limited to 160 attendees and there is high demand.\n          please accept\n          "),t.freeTicket?t._e():[t._v("\n            and purchase\n          ")],t._v("\n          the ticket or let the person who invited you know if you can't make\n          it.\n        ")],2),s("p",[t._v("\n          We look forward to seeing you there and hope you enjoy the show.\n        ")]),t._m(2)])])]),s("section",{staticClass:"container"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-6"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.acceptTicket(e)}}},[s("h2",{staticClass:"title is-3"},[t._v("Your Contact Info")]),s("PersonInfo",{staticClass:"section-spacing",attrs:{person:t.person,$v:t.$v}}),s("h2",{staticClass:"title is-3"},[t._v("General Questions")]),s("ApplicationQuestions",{staticClass:"section-spacing",attrs:{details:t.applicationQuestions,$v:t.$v}}),s("h2",{staticClass:"title is-3"},[t._v("Questions for Ticket")]),s("TicketQuestions",{staticClass:"section-spacing",attrs:{questions:t.ticketQuestions,$v:t.$v}}),s("div",{staticClass:"buttons has-addons is-right"},[s("button",{staticClass:"button is-warning is-medium",on:{click:function(e){e.preventDefault(),t.isRejectModalActive=!0}}},[t._v("\n              Give Up Ticket\n            ")]),s("b-modal",{attrs:{active:t.isRejectModalActive},on:{"update:active":function(e){t.isRejectModalActive=e}}},[s("div",{staticClass:"modal-card center-modal"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Give Up Ticket Offer")]),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){e.preventDefault(),t.isRejectModalActive=!1}}})]),s("section",{staticClass:"modal-card-body"},[s("p",[t._v("Are you sure you want to give up your ticket offer?")]),s("p",[t._v("\n                    By clicking the button below you are giving up your\n                    opportunity to buy a ticket and releasing it to another\n                    applicant.\n                  ")])]),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-warning",on:{click:function(e){e.preventDefault(),t.rejectTicket(),t.isRejectModalActive=!1}}},[t._v("\n                    Give up Ticket\n                  ")]),s("button",{staticClass:"button",on:{click:function(e){e.preventDefault(),t.isRejectModalActive=!1}}},[t._v("\n                    Cancel\n                  ")])])])]),s("input",{staticClass:"button is-primary is-medium",attrs:{type:"submit"},domProps:{value:t.purchaseButtonText}})],1)],1)])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container section-spacing"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-8"},[s("h1",{staticClass:"title is-1"},[t._v("May 2019 Partner Ticket Offer")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n          During the first part of the evening you will be inspired and\n          entertained by some of Aucklands top thought leaders. Following this\n          will be social time with the speakers and a five course meal\n          lovingly crafted with West Auckland produce by acclaimed and\n          multi-award winning Kiwi chef,\n          "),s("strong",{staticClass:"has-text-primary"},[t._v("Ben Bayly")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",{staticClass:"has-text-primary"},[t._v("\n            TEDxAuckland\n          ")])])}],a=s("cebc"),o=s("0527"),r=s("2964"),c=s("5732"),u=s("3c34"),l=s("323e"),d=s.n(l),p=s("75cd"),v=s("16c3"),f={name:"TicketOfferForPartner",components:{PersonInfo:o["a"],ApplicationQuestions:r["a"],TicketQuestions:c["a"]},props:{personInit:{type:Object,required:!0},ticketOffer:{type:Object,required:!0},event:{type:Object,required:!0}},data:function(){return{isRejectModalActive:!1}},mixins:[v["c"],v["a"],v["g"],p["a"]],computed:{formattedTicketPrice:function(){return"$".concat(this.ticketOffer.costAfterDiscountCents/100)},freeTicket:function(){return 100===this.ticketOffer.discount},purchaseButtonText:function(){return this.freeTicket?"Accept Free Ticket":"Purchase Ticket"}},validations:{person:v["d"],applicationQuestions:v["b"],ticketQuestions:v["h"]},methods:{acceptTicket:function(){this.$v.$touch(),this.$v.$invalid||(d.a.start(),u["a"].acceptTicket({id:this.ticketOffer.id,contactQuestions:this.person,ticketQuestions:Object(a["a"])({},this.applicationQuestions,this.ticketQuestions)}).then(function(t){d.a.done(),window.location.assign(t.data.purchase_url)}).catch(function(t){d.a.done(),console.log("ERROR",t)}))},rejectTicket:function(){var t=this;d.a.start(),u["a"].rejectTicket({id:this.ticketOffer.id}).then(function(){d.a.done(),t.$router.push({name:"ticket-offer-surrendered",params:{id:t.ticketOffer.id}})}).catch(function(t){d.a.done(),console.log("ERROR",t)})}}},h=f,m=s("2877"),b=Object(m["a"])(h,n,i,!1,null,null,null);e["default"]=b.exports},5732:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fieldset",[s("b-field",{attrs:{label:"Suburb / Town",type:{"is-danger":t.$v.ticketQuestions.suburb.$error}}},[s("b-input",{attrs:{type:"text",placeholder:"E.g. Mt Eden or Katikati"},on:{blur:function(e){return t.$v.ticketQuestions.suburb.$touch()}},model:{value:t.questions.suburb,callback:function(e){t.$set(t.questions,"suburb",t._n(e))},expression:"questions.suburb"}})],1),s("b-field",{attrs:{label:"Region",type:{"is-danger":t.$v.ticketQuestions.area.$error}}},[s("b-input",{attrs:{type:"text",placeholder:"E.g. Auckland or Bay of Plenty"},on:{blur:function(e){return t.$v.ticketQuestions.area.$touch()}},model:{value:t.questions.area,callback:function(e){t.$set(t.questions,"area",t._n(e))},expression:"questions.area"}})],1),s("b-field",{attrs:{label:"Have you been involved in the starting of a new venture?",type:{"is-danger":t.$v.ticketQuestions.founded.$error}}},[s("b-input",{attrs:{type:"text",placeholder:"E.g. Non-Profit, Company or Org"},on:{blur:function(e){return t.$v.ticketQuestions.founded.$touch()}},model:{value:t.questions.founded,callback:function(e){t.$set(t.questions,"founded",t._n(e))},expression:"questions.founded"}})],1),s("fieldset",[s("legend",{staticClass:"label"},[t._v("Do you have any Dietary Requirements?")]),s("div",{staticClass:"checkbox-row"},t._l(t.dietaryRequirements,function(e){return s("b-checkbox",{key:e,staticClass:"checkbox-column",attrs:{"native-value":e},model:{value:t.questions.dietaryRequirements,callback:function(e){t.$set(t.questions,"dietaryRequirements",e)},expression:"questions.dietaryRequirements"}},[t._v("\n        "+t._s(e)+"\n      ")])}),1)]),s("fieldset",[s("legend",{staticClass:"label"},[t._v("Conversation Starters: Talk to me about...")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-11 is-offset-1"},[s("b-field",{attrs:{type:{"is-danger":t.$v.ticketQuestions.conversationStarters.one.$error}}},[s("b-input",{attrs:{type:"text",maxlength:"40"},on:{blur:function(e){return t.$v.ticketQuestions.conversationStarters.one.$touch()}},model:{value:t.questions.conversationStarters.one,callback:function(e){t.$set(t.questions.conversationStarters,"one",e)},expression:"questions.conversationStarters.one"}})],1),s("b-field",{attrs:{type:{"is-danger":t.$v.ticketQuestions.conversationStarters.two.$error}}},[s("b-input",{attrs:{type:"text",maxlength:"40"},on:{blur:function(e){return t.$v.ticketQuestions.conversationStarters.two.$touch()}},model:{value:t.questions.conversationStarters.two,callback:function(e){t.$set(t.questions.conversationStarters,"two",e)},expression:"questions.conversationStarters.two"}})],1)],1)])])],1)},i=[],a={name:"TicketQuestions",props:{questions:{type:Object,required:!0},$v:{type:Object,required:!0}},computed:{dietaryRequirements:function(){return this.$store.state.dietaryRequirements}}},o=a,r=s("2877"),c=Object(r["a"])(o,n,i,!1,null,null,null);e["a"]=c.exports},"75cd":function(t,e,s){"use strict";s.d(e,"a",function(){return n});var n={computed:{personName:function(){return this.person.lastName?"".concat(this.person.firstName," ").concat(this.person.lastName):this.person.firstName}}}}}]);
//# sourceMappingURL=partner-ticket-offer.125b14ea.js.map
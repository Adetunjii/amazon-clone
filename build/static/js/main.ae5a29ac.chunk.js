(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(3),n=c.n(s),i=c(34),r=c.n(i),o=(c(44),c(10)),l=(c(45),c(46),c(35)),j=c.n(l),d=c(36),u=c.n(d),h=c(18),m=Object(s.createContext)(),b=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(a.jsx)(m.Provider,{value:Object(s.useReducer)(t,c),children:n})},O=function(){return Object(s.useContext)(m)},g=c(31),_=(g.a.initializeApp({apiKey:"AIzaSyCeU587J0_0ZgmWBQlvTiDQxRR4EyTwQ8I",authDomain:"clone-bdf68.firebaseapp.com",databaseURL:"https://clone-bdf68.firebaseio.com",projectId:"clone-bdf68",storageBucket:"clone-bdf68.appspot.com",messagingSenderId:"483991118230",appId:"1:483991118230:web:26286fd004b8e1ad687db7",measurementId:"G-K27MHCNLXY"}).firestore(),g.a.auth());var p=function(){var e=O(),t=Object(o.a)(e,2),c=t[0],s=c.basket,n=c.user;return t[1],Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(h.b,{to:"/",children:Object(a.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(a.jsxs)("div",{className:"header__search",children:[Object(a.jsx)("input",{className:"header__searchInput",type:"text"}),Object(a.jsx)(j.a,{className:"header__searchIcon"})]}),Object(a.jsxs)("div",{className:"header__nav",children:[Object(a.jsx)(h.b,{to:!n&&"/login",children:Object(a.jsxs)("div",{onClick:function(){n&&_.signOut()},className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLine1",children:" Hello Guest"}),Object(a.jsx)("span",{className:"header__optionLine2",children:n?"Sign Out":"Sign in"})]})}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLine1",children:"Returns"}),Object(a.jsx)("span",{className:"header__optionLine2",children:"& Orders"})]}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLine1",children:"Your"}),Object(a.jsx)("span",{className:"header__optionLine2",children:"Prime"})]}),Object(a.jsx)(h.b,{to:"/checkout",children:Object(a.jsxs)("div",{className:"header__optionBasket",children:[Object(a.jsx)(u.a,{}),Object(a.jsx)("span",{className:"header__optionLine2 header__basketCount",children:s.length})]})})]})]})},x=(c(59),c(60),c(26)),v=c.n(x);var f=function(e){var t=e.title,c=e.image,s=e.price,n=e.rating,i=O(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product__info",children:[Object(a.jsx)("p",{className:"",children:t}),Object(a.jsxs)("p",{className:"product__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e,t){return Object(a.jsx)(v.a,{className:"ratingIcon"})}))})]}),Object(a.jsx)("img",{src:c,alt:""}),Object(a.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{title:t,image:c,price:s,rating:n}})},children:"Add to Basket"})]})};var N=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"home__container",children:Object(a.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""})}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(f,{title:"The lean startup: How Constant Innovation Creates Radically Succssful Businesses PaperBack",price:11.99,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5}),Object(a.jsx)(f,{title:"Kenwod kMix stand mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl",price:239,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",rating:4})]}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(f,{title:"Samsung LC49rG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(a.jsx)(f,{title:"Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(a.jsx)(f,{title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(a.jsx)("div",{className:"home__row",children:Object(a.jsx)(f,{title:"Samsung LC49rG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})},k=(c(61),c(8));var S=function(){var e=Object(k.f)(),t=Object(s.useState)(""),c=Object(o.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(""),l=Object(o.a)(r,2),j=l[0],d=l[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(h.b,{to:"/",children:Object(a.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h1",{children:"Sign In"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"Email"}),Object(a.jsx)("input",{type:"email",value:n,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(a.jsx)("button",{type:"submit",className:"login__signInButton",onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(n,j).then((function(t){return e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(a.jsx)("p",{children:"By signing-in you agree to AMAZON CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based ads notice."}),Object(a.jsx)("button",{className:"login__registerButton",onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(n,j).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create your Amazon account"})]})]})},C=(c(62),c(63),c(37)),A=c.n(C);var E=function(){var e=O(),t=Object(o.a)(e,2),c=t[0].basket,s=(t[1],function(){var e=0;return null===c||void 0===c||c.forEach((function(t){e+=t.price})),e});return Object(a.jsxs)("div",{className:"subtotal",children:[Object(a.jsx)(A.a,{renderText:function(e){return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsxs)("p",{children:["Subtotal (",c.length," items):",Object(a.jsxs)("strong",{children:[" $",s()]})]}),Object(a.jsxs)("small",{className:"subtotal__gift",children:[Object(a.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:s(),displayType:"text",thousandSeperator:!0,prefix:"$"}),Object(a.jsx)("button",{children:"Proceed to checkout"})]})};c(65);var y=function(e){var t=e.image,c=e.title,s=e.price,n=e.rating,i=O(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(a.jsxs)("div",{className:"checkoutProduct",children:[Object(a.jsx)("img",{src:t,className:"checkoutProduct__image",alt:""}),Object(a.jsxs)("div",{classname:"checkoutProduct__info",children:[Object(a.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(a.jsxs)("p",{className:"checkoutProduct__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"checkoutProduct__rating",children:Array(n).fill().map((function(e,t){return Object(a.jsx)(v.a,{className:"product__rating"})}))}),Object(a.jsx)("button",{className:"removeButton",onClick:function(){l({type:"REMOVE_FROM_BASKET",title:c})},children:"Remove from basket"})]})]})};var B=function(){var e=O(),t=Object(o.a)(e,2),c=t[0],s=c.basket,n=c.user;return t[1],Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsxs)("div",{className:"checkout__left",children:[Object(a.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Hello, ",null===n||void 0===n?void 0:n.email]}),Object(a.jsx)("h2",{className:"checkout__title",children:"Your shopping basket"}),s.map((function(e){return Object(a.jsx)(y,{title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(a.jsx)("div",{className:"checkout__right",children:Object(a.jsx)(E,{})})]})})};var I=function(){var e=O(),t=Object(o.a)(e,2),c=(t[0].user,t[1]);return Object(s.useEffect)((function(){_.onAuthStateChanged((function(e){console.log("USER IS >>>>>",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(a.jsx)(h.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(k.c,{children:[Object(a.jsx)(k.a,{path:"/login",children:Object(a.jsx)(S,{})}),Object(a.jsxs)(k.a,{path:"/checkout",children:[Object(a.jsx)(p,{}),Object(a.jsx)(B,{})]}),Object(a.jsxs)(k.a,{path:"/",children:[Object(a.jsx)(p,{}),Object(a.jsx)(N,{})]})]})})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))},P=c(32),w=c(20),z=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(w.a)(Object(w.a)({},e),{},{basket:[].concat(Object(P.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.title===t.title})),a=Object(P.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Can't remove product (id: ".concat(t.id,") as it's not in the basket!")),Object(w.a)(Object(w.a)({},e),{},{basket:a});case"SET_USER":return Object(w.a)(Object(w.a)({},e),{},{user:t.user});default:return e}};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(b,{initialState:{basket:[],user:null},reducer:z,children:Object(a.jsx)(I,{})})}),document.getElementById("root")),L()}},[[67,1,2]]]);
//# sourceMappingURL=main.ae5a29ac.chunk.js.map
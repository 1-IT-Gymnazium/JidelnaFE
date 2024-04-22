import { c as create_ssr_component, a as subscribe, e as escape, o as onDestroy, v as validate_component } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
/* empty css                     */
const countRest = writable(0);
const countOut = writable(0);
const css$4 = {
  code: ".flex-container.svelte-18a8swc.svelte-18a8swc{display:flex;height:100%;width:100%;align-items:center}.flex-container.svelte-18a8swc .item.svelte-18a8swc{width:50%}.flex-container.svelte-18a8swc .main-content.svelte-18a8swc{font-size:5vh;font-weight:600}.flex-container.svelte-18a8swc .static.svelte-18a8swc{color:#535361;font-weight:500;font-size:2vh}.flex-container.svelte-18a8swc p.svelte-18a8swc{margin:0;text-align:center}",
  map: null
};
const Count = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let countLunchesRest;
  let countLunchesOut;
  let $countOut, $$unsubscribe_countOut;
  let $countRest, $$unsubscribe_countRest;
  $$unsubscribe_countOut = subscribe(countOut, (value) => $countOut = value);
  $$unsubscribe_countRest = subscribe(countRest, (value) => $countRest = value);
  $$result.css.add(css$4);
  countLunchesRest = $countRest;
  countLunchesOut = $countOut;
  $$unsubscribe_countOut();
  $$unsubscribe_countRest();
  return `<div class="flex-container svelte-18a8swc"><div class="item svelte-18a8swc"><p class="main-content svelte-18a8swc">${escape(countLunchesOut)}</p> <p class="static svelte-18a8swc" data-svelte-h="svelte-o635o0">Vydaných <br> obědů</p></div> <div class="item svelte-18a8swc"><p class="main-content svelte-18a8swc">${escape(countLunchesRest)}</p> <p class="static svelte-18a8swc" data-svelte-h="svelte-1yglfq2">Zbývajících <br> obědů</p></div> </div>`;
});
const css$3 = {
  code: ".static.svelte-1luwmoo.svelte-1luwmoo{height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.static.svelte-1luwmoo .fi.svelte-1luwmoo{margin-bottom:1vh;font-size:3vh;color:#01b1ef}",
  map: null
};
const TableStatic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="static svelte-1luwmoo" data-svelte-h="svelte-4aafpf"><i class="fi fi-br-list svelte-1luwmoo"></i> <p>Seznam je prázdný</p> </div>`;
});
const css$2 = {
  code: ".svelte-1nfjehs.svelte-1nfjehs{margin:0;padding:0}.grid-container.svelte-1nfjehs.svelte-1nfjehs{height:100%;border-radius:1vh;margin-right:3vh;margin-left:3vh;display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:repeat(3, 1fr)}.grid-container.svelte-1nfjehs .item.svelte-1nfjehs{background-color:white;border-radius:1vh}.grid-container.svelte-1nfjehs .item-1.svelte-1nfjehs{grid-column:span 2;grid-row:span 3;margin:0 1.5vh 0 0}.grid-container.svelte-1nfjehs .item-2.svelte-1nfjehs{grid-column:3;grid-row:span 2;margin:0 0 1.5vh 1.5vh}.grid-container.svelte-1nfjehs .item-3.svelte-1nfjehs{grid-column:3;grid-row:3;margin:1.5vh 0 0 1.5vh}.grid-container.svelte-1nfjehs .grid-container-info.svelte-1nfjehs{display:grid}.grid-container.svelte-1nfjehs .grid-container-info .item-info-1 .item-lunchout.svelte-1nfjehs{margin-bottom:2vh}.grid-container.svelte-1nfjehs .grid-container-info .item-info-1 .item-lunchout-1.svelte-1nfjehs{font-weight:500;color:#fa2c55}.grid-container.svelte-1nfjehs .grid-container-info .item-info-1 .item-lunch.svelte-1nfjehs{font-weight:700;font-size:10vh}.grid-container.svelte-1nfjehs .grid-container-info .item-info-1 .item-name.svelte-1nfjehs{font-size:6vh;font-weight:600;color:#535361}.grid-container.svelte-1nfjehs .grid-container-info .item-info-1 p.selected.svelte-1nfjehs{color:#fa2c55}.grid-container.svelte-1nfjehs .grid-container-info .item-info-2.svelte-1nfjehs{font-weight:600;font-size:2vh}.grid-container.svelte-1nfjehs .grid-container-info .item-info-2 .fi.svelte-1nfjehs,.grid-container.svelte-1nfjehs .grid-container-info .item-info-2 .fi.svelte-1nfjehs::before{margin-bottom:1vh;font-size:4vh}.grid-container.svelte-1nfjehs .grid-container-info .item-info-3.svelte-1nfjehs{font-size:5vh;font-weight:500}.grid-container.svelte-1nfjehs .grid-container-info .item-info.svelte-1nfjehs{justify-self:center;align-self:center;text-align:center}.grid-container.svelte-1nfjehs .grid-container-table.svelte-1nfjehs{display:grid;grid-template-rows:6vh auto}.grid-container.svelte-1nfjehs .grid-container-table .item-table-1.svelte-1nfjehs{margin:0 2vh 0 2vh;border-bottom:1px solid #58595a;padding:2vh 0 2vh 0}.grid-container.svelte-1nfjehs .grid-container-table .item-table-2.svelte-1nfjehs{max-height:100%;overflow-y:auto}",
  map: null
};
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  onDestroy(() => {
    return;
  });
  $$result.css.add(css$2);
  return `${$$result.head += `<!-- HEAD_svelte-nsgab_START --><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap" class="svelte-1nfjehs"><!-- HEAD_svelte-nsgab_END -->`, ""}  <div class="grid-container svelte-1nfjehs"><div class="item-1 item grid-container-info svelte-1nfjehs">${`${`<div class="item-info-2 item-info svelte-1nfjehs" data-svelte-h="svelte-1yf1b2c"><i class="fi fi-br-credit-card svelte-1nfjehs"></i> <p class="svelte-1nfjehs">Čeká se na přiložení ISIC karty.</p></div>`}`}</div> <div class="item-2 item grid-container-table svelte-1nfjehs"><div class="item-table-1 svelte-1nfjehs" data-svelte-h="svelte-1xhe6s"><p class="svelte-1nfjehs">Již vydané obědy</p></div> <div class="item-table-2 svelte-1nfjehs">${`${validate_component(TableStatic, "TableStatic").$$render($$result, {}, {}, {})}`}</div></div> <div class="item-3 item svelte-1nfjehs">${validate_component(Count, "Count").$$render($$result, {}, {}, {})}</div> </div>`;
});
const css$1 = {
  code: ".svelte-hl43s8.svelte-hl43s8{margin:0}.flex-container.svelte-hl43s8.svelte-hl43s8{height:6vh;background-color:white;color:#212129;font-weight:400;border-radius:5px;margin:3vh;display:flex;align-items:center}.flex-container.svelte-hl43s8 .item-1.svelte-hl43s8{margin-left:2vh;padding-right:2vh;font-weight:600;border-right:1px solid #e3e3e3}.flex-container.svelte-hl43s8 .item-1 p.svelte-hl43s8{width:100%}.flex-container.svelte-hl43s8 .item-2.svelte-hl43s8{display:flex;align-items:center}.flex-container.svelte-hl43s8 .item-2 .fi.svelte-hl43s8,.flex-container.svelte-hl43s8 .item-2 .fi.svelte-hl43s8::before{font-size:3vh;margin:0 1.2vh 0 1vh}.flex-container.svelte-hl43s8 .item-3.svelte-hl43s8{margin-left:auto;margin-right:2vh;display:flex}.flex-container.svelte-hl43s8 .item-3 img.svelte-hl43s8{height:3vh}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentDate = /* @__PURE__ */ new Date();
  let [month, day, year] = currentDate.toLocaleDateString().split("/");
  currentDate = `${day}/${month}/${year}`;
  $$result.css.add(css$1);
  return `<div class="flex-container svelte-hl43s8"><div class="item-1 svelte-hl43s8" data-svelte-h="svelte-16u4u4b"><p class="svelte-hl43s8">Výdejový systém bědů</p></div> <div class="item-2 svelte-hl43s8"><i class="fi fi-br-clock svelte-hl43s8"></i> <p class="svelte-hl43s8">${escape(currentDate)}</p></div> <div class="item-3 svelte-hl43s8" data-svelte-h="svelte-ot9a23"><img src="/1itglogo.png" alt="ITlogo" class="svelte-hl43s8"></div> </div>`;
});
const css = {
  code: ".flex-container.svelte-9heui7{display:flex;flex-flow:column;row-gap:20px;height:100%}.item-2.svelte-9heui7{flex-grow:1;position:absolute;margin-bottom:3vh;top:100px;bottom:0;width:100%}",
  map: null
};
const Lunch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body><div class="flex-container svelte-9heui7"><div class="item-1">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</div> <div class="item-2 svelte-9heui7">${validate_component(Info, "Info").$$render($$result, {}, {}, {})}</div></div> </body>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Lunch, "Lunch").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

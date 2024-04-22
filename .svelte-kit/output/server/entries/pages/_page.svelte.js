import { c as create_ssr_component } from "../../chunks/ssr.js";
/* empty css                  */
const css = {
  code: '.bg-image.svelte-1x6p99z.svelte-1x6p99z{background-position:center;background-repeat:no-repeat;background-size:cover;position:absolute;height:100%;width:100%;background-image:url("../../static/1itBudova.jpeg");filter:blur(15px);z-index:-1}.flex-container.svelte-1x6p99z.svelte-1x6p99z{display:flex;justify-content:center;align-items:center;height:100vh}.flex-container.svelte-1x6p99z .header.svelte-1x6p99z{display:grid}.flex-container.svelte-1x6p99z .grid-container.svelte-1x6p99z{font-weight:600;display:grid;grid-template-rows:repeat(3, 1fr);width:55vh;height:40vh;border-radius:5px;background-color:white}.flex-container.svelte-1x6p99z .grid-container .grid-container-2.svelte-1x6p99z{grid-row:2 span;display:grid;justify-content:center;align-items:center;grid-template-columns:repeat(2, 1fr)}.flex-container.svelte-1x6p99z .grid-container .grid-container-2 .item.svelte-1x6p99z{height:80%;margin:0 2vh 0 2vh;border-radius:5px;display:flex;flex-direction:column;justify-content:center;align-items:center;border:2px solid #1eb6f1;text-align:center}.flex-container.svelte-1x6p99z .grid-container .grid-container-2 .item i.svelte-1x6p99z{margin-bottom:1vh}.flex-container.svelte-1x6p99z .grid-container .grid-container-2 .item a.svelte-1x6p99z:hover{background-color:#efefef}.flex-container.svelte-1x6p99z .grid-container .grid-container-2 .item a.svelte-1x6p99z{text-decoration:none;color:#1eb6f1;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.flex-container.svelte-1x6p99z .grid-container .header img.svelte-1x6p99z{border-radius:3px;height:4vh;margin-top:4vh;width:auto;justify-self:center;align-self:start}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="bg-image svelte-1x6p99z"></div> <div class="flex-container svelte-1x6p99z" data-svelte-h="svelte-sqpdz1"><div class="grid-container svelte-1x6p99z"><div class="header svelte-1x6p99z"><img class="item-1 svelte-1x6p99z" src="/1itglogo.png" alt="ITlogo"></div> <div class="grid-container-2 svelte-1x6p99z"><div class="item-1 item svelte-1x6p99z"><a href="/lunches" class="svelte-1x6p99z"><i class="fi fi-br-grid svelte-1x6p99z"></i>
					VÝDEJOVÝ PANEL</a></div> <div class="item-2 item svelte-1x6p99z"><a href="/admin" class="svelte-1x6p99z"><i class="fi fi-br-pencil svelte-1x6p99z"></i>
					ADMINISTRÁTORKÁ<br>
					SEKCE</a></div></div></div> </div>`;
});
export {
  Page as default
};

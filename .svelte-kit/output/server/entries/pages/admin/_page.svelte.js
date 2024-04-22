import { c as create_ssr_component, e as escape, a as subscribe, b as add_attribute, d as each, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                     */
import { w as writable } from "../../../chunks/index.js";
import * as XLSX from "xlsx";
const user = writable(null);
const page = writable("Žáci");
const css$c = {
  code: ".flex-container.svelte-1vti5xb.svelte-1vti5xb{animation:0.3s ease-in-out 0s 1 svelte-1vti5xb-slideFromLeft;background-color:#202d33;display:flex;flex-direction:column;justify-content:start;align-items:center;height:100%;width:100%}.flex-container.svelte-1vti5xb .grid-container-1.svelte-1vti5xb{height:20vh;display:grid;align-items:center;justify-content:center;margin-bottom:3vh}.flex-container.svelte-1vti5xb .grid-container-1 .item-1-1.svelte-1vti5xb{margin-top:3vh;justify-self:center}.flex-container.svelte-1vti5xb .grid-container-1 .item-1-1 img.svelte-1vti5xb{height:3.5vh;width:auto;object-fit:fill}.flex-container.svelte-1vti5xb .grid-container-1 .item-1-2 p.svelte-1vti5xb{color:white;text-align:center;font-weight:500;font-size:2vh}.flex-container.svelte-1vti5xb .grid-container-2.svelte-1vti5xb{height:60vh;display:flex;flex-direction:column;width:80%;border-top:1px solid #353d45;border-bottom:1px solid #353d45}.flex-container.svelte-1vti5xb .grid-container-2 .item-2.svelte-1vti5xb{height:5vh}.flex-container.svelte-1vti5xb .grid-container-2 .item-2-1.svelte-1vti5xb{margin-top:5vh}.flex-container.svelte-1vti5xb .grid-container-2 .item-2-2.svelte-1vti5xb{margin-top:3vh}.flex-container.svelte-1vti5xb .grid-container-2 button.svelte-1vti5xb{width:100%;height:100%;color:white;background-color:#202d33;border:1px solid #949798;border-radius:5px}.flex-container.svelte-1vti5xb .grid-container-2 button.svelte-1vti5xb:hover{background-color:#2b3841}.flex-container.svelte-1vti5xb .grid-container-3.svelte-1vti5xb{height:20vh;display:flex;width:100%;justify-content:center;align-content:center}.flex-container.svelte-1vti5xb .grid-container-3 .item-3-1.svelte-1vti5xb{width:80%;margin-top:6vh}.flex-container.svelte-1vti5xb .grid-container-3 .item-3-1 button.svelte-1vti5xb{height:4vh;width:100%;background-color:#fa3054;border-style:none;border-radius:20px;display:flex;align-items:center;color:white}.flex-container.svelte-1vti5xb .grid-container-3 .item-3-1 button .fi.svelte-1vti5xb{width:7vh;color:white}.flex-container.svelte-1vti5xb .grid-container-3 .item-3-1 button.svelte-1vti5xb:hover{background-color:rgba(250, 48, 84, 0.74)}@keyframes svelte-1vti5xb-slideFromLeft{0%{transform:translateX(-1rem);opacity:0}100%{transform:translateX(0);opacity:100%}}",
  map: null
};
const SideBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$c);
  return `<div class="flex-container svelte-1vti5xb"><div class="grid-container-1 svelte-1vti5xb" data-svelte-h="svelte-2elm37"><div class="item-1-1 svelte-1vti5xb"><img src="/1itglogo.png" alt="ITlogo" class="svelte-1vti5xb"></div> <div class="item-1-2"><p class="svelte-1vti5xb">Administrátorská <br> sekce</p></div></div> <div class="grid-container-2 svelte-1vti5xb"><div class="item-2-1 item-2 svelte-1vti5xb"><button class="svelte-1vti5xb" data-svelte-h="svelte-1gjjaqo">Žáci</button></div> <div class="item-2-2 item-2 svelte-1vti5xb"><button class="svelte-1vti5xb" data-svelte-h="svelte-qcvs9x">Třídy</button></div></div> <div class="grid-container-3 svelte-1vti5xb"><div class="item-3-1 svelte-1vti5xb"><button value="Logout" class="svelte-1vti5xb" data-svelte-h="svelte-13h89e3"><i class="fi fi-br-sign-out-alt svelte-1vti5xb"></i>
				ODHLÁSIT SE</button></div></div> </div>`;
});
const uploadUser = async (id, name, grade) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/users`, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, name, grade, lunches: [] })
    });
    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
const getUsersCount = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/users/total`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
const css$b = {
  code: ".flex-container.svelte-oa1xsc.svelte-oa1xsc{display:flex;align-content:center;border:1px solid #c5c5c5;border-radius:10px;height:8vh}.flex-container.svelte-oa1xsc .item.svelte-oa1xsc{align-self:center;align-content:center;margin:1vh 0 1vh 0}.flex-container.svelte-oa1xsc .item p.svelte-oa1xsc{margin:0;align-self:center}.flex-container.svelte-oa1xsc .item-1.svelte-oa1xsc{margin:0 2vh 0 2vh}.flex-container.svelte-oa1xsc .item-1 p.svelte-oa1xsc{font-weight:600;font-size:2vh}.flex-container.svelte-oa1xsc .item-2.svelte-oa1xsc{margin-right:2vh}.flex-container.svelte-oa1xsc .item-2 p.svelte-oa1xsc{margin:0;color:#c5c5c5;font-size:2vh}.flex-container.svelte-oa1xsc .item-3.svelte-oa1xsc{margin-right:2vh}.flex-container.svelte-oa1xsc .item-4.svelte-oa1xsc{margin-left:auto}.flex-container.svelte-oa1xsc .flex-container-2.svelte-oa1xsc{display:flex;border-style:none;width:20vh;align-items:center;justify-content:end;margin-right:2vh}.flex-container.svelte-oa1xsc .flex-container-2 .fi.svelte-oa1xsc{font-size:3vh;width:5vh}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 0;
  let currentDate = /* @__PURE__ */ new Date();
  let [month, day, year] = currentDate.toLocaleDateString().split("/");
  currentDate = `${day}/${month}/${year}`;
  const loadCount = async () => {
    count = await getUsersCount();
    console.log(count);
  };
  $$result.css.add(css$b);
  {
    {
      loadCount();
    }
  }
  return `<div class="flex-container svelte-oa1xsc"><div class="item-1 item svelte-oa1xsc" data-svelte-h="svelte-1p0sr25"><p class="svelte-oa1xsc">Žáci v systému</p></div> <div class="item-2 item svelte-oa1xsc" data-svelte-h="svelte-1n1hseo"><p class="svelte-oa1xsc">•</p></div> <div class="item-3 item svelte-oa1xsc"><p class="svelte-oa1xsc">${escape(count)}</p></div> <div class="item-4 item svelte-oa1xsc"><div class="flex-container-2 svelte-oa1xsc"><i class="fi fi-br-clock svelte-oa1xsc"></i> <p class="svelte-oa1xsc">${escape(currentDate)}</p></div></div> </div>`;
});
const css$a = {
  code: ".notification.svelte-18a9che{position:fixed;bottom:20px;right:20px;padding:10px;border-radius:4px;color:#fff;z-index:1000}.success.svelte-18a9che{background-color:#46bf7f}.wrong.svelte-18a9che{background-color:#fb2d55}",
  map: null
};
const Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  let { type } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$a);
  return `${`<div class="${"notification " + escape(type, true) + " svelte-18a9che"}">${escape(message)}</div>`}`;
});
const css$9 = {
  code: ".grid-container.svelte-g8ul6e.svelte-g8ul6e{display:grid;align-items:center;grid-template-rows:repeat(2, 1fr);grid-template-columns:repeat(8, 1fr)}.grid-container.svelte-g8ul6e .item.svelte-g8ul6e{width:90%;justify-self:start}.grid-container.svelte-g8ul6e .item input.svelte-g8ul6e{width:100%;border-radius:20px;height:4vh;border:1px solid #c5c5c5;background-color:#e1e9ec;padding-left:3vh}.grid-container.svelte-g8ul6e .item input.svelte-g8ul6e:hover{background-color:rgba(225, 233, 236, 0.59)}.grid-container.svelte-g8ul6e .item-1.svelte-g8ul6e{margin-left:3vh;grid-column:span 2;grid-row:1}.grid-container.svelte-g8ul6e .item-1 p.svelte-g8ul6e{font-weight:500}.grid-container.svelte-g8ul6e .item-2.svelte-g8ul6e{grid-row:2;grid-column:span 2;margin-left:3vh}.grid-container.svelte-g8ul6e .item-3.svelte-g8ul6e{grid-column:span 2;grid-row:2;margin-left:6vh}.grid-container.svelte-g8ul6e .item-4.svelte-g8ul6e{grid-column:span 2;grid-row:2;margin-left:9vh}.grid-container.svelte-g8ul6e .item-5.svelte-g8ul6e{grid-column:7;grid-row:2;margin-left:12vh}.grid-container.svelte-g8ul6e .item-5 button.svelte-g8ul6e{border-style:none;background-color:#46bf7f;border-radius:20px;height:4vh;color:white;width:100%;display:flex;align-items:center;justify-content:center;gap:1vh}.grid-container.svelte-g8ul6e .item-5 button .fi.svelte-g8ul6e{width:3vh;color:white}.grid-container.svelte-g8ul6e .item-5 button.svelte-g8ul6e:hover{background-color:rgba(70, 191, 127, 0.66)}",
  map: null
};
const AddUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $notifications, $$unsubscribe_notifications;
  let id = "";
  let name = "";
  let grade = "";
  const notifications = writable([]);
  $$unsubscribe_notifications = subscribe(notifications, (value) => $notifications = value);
  $$result.css.add(css$9);
  $$unsubscribe_notifications();
  return `<div class="grid-container svelte-g8ul6e"><div class="item-1 item svelte-g8ul6e" data-svelte-h="svelte-vs2kfx"><p class="svelte-g8ul6e">Přidat uživatele</p></div> <div class="item-2 item svelte-g8ul6e"><input placeholder="Jméno" class="svelte-g8ul6e"${add_attribute("value", name, 0)}></div> <div class="item-3 item svelte-g8ul6e"><input placeholder="Isic" class="svelte-g8ul6e"${add_attribute("value", id, 0)}></div> <div class="item-4 item svelte-g8ul6e"><input placeholder="Třída" class="svelte-g8ul6e"${add_attribute("value", grade, 0)}></div> <div class="item-5 item svelte-g8ul6e"><button class="svelte-g8ul6e" data-svelte-h="svelte-1dmc1ti"><i class="fi fi-br-add svelte-g8ul6e"></i>
			Přídat</button></div></div> ${each($notifications, (notification, index) => {
    return `${validate_component(Notification, "Notification").$$render(
      $$result,
      {
        key: index,
        message: notification.message,
        type: notification.type
      },
      {},
      {}
    )}`;
  })}`;
});
const css$8 = {
  code: "dialog.svelte-1yfhiw3.svelte-1yfhiw3{max-width:32em;border-radius:1vh;border:none;padding:0}dialog.svelte-1yfhiw3.svelte-1yfhiw3::backdrop{background:rgba(0, 0, 0, 0.3)}.grid-container.svelte-1yfhiw3.svelte-1yfhiw3{margin:2vh;width:30vh;height:20vh;display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(2, 1fr)}.grid-container.svelte-1yfhiw3 .item.svelte-1yfhiw3{align-self:center;justify-self:center}.grid-container.svelte-1yfhiw3 button.svelte-1yfhiw3{width:12vh;height:4vh;display:flex;align-items:center;justify-content:center;border-radius:20vh;border:none}.grid-container.svelte-1yfhiw3 .item-1.svelte-1yfhiw3{margin-top:3vh;grid-row:1;grid-column:span 2}.grid-container.svelte-1yfhiw3 .item-2.svelte-1yfhiw3{margin-top:3vh;grid-row:2;grid-column:1}.grid-container.svelte-1yfhiw3 .item-2 button.svelte-1yfhiw3{background-color:#e1e9ec;color:#525254}.grid-container.svelte-1yfhiw3 .item-2 button.svelte-1yfhiw3:hover{background-color:rgba(225, 233, 236, 0.51)}.grid-container.svelte-1yfhiw3 .item-3.svelte-1yfhiw3{margin-top:3vh;grid-row:2;grid-column:2}.grid-container.svelte-1yfhiw3 .item-3 button.svelte-1yfhiw3{background-color:#fa3054;color:white}.grid-container.svelte-1yfhiw3 .item-3 button .fi.svelte-1yfhiw3{margin-right:1vh;color:white}.grid-container.svelte-1yfhiw3 .item-3 button.svelte-1yfhiw3:hover{background-color:rgba(250, 48, 84, 0.78)}dialog[open].svelte-1yfhiw3.svelte-1yfhiw3{animation:svelte-1yfhiw3-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-1yfhiw3-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-1yfhiw3.svelte-1yfhiw3::backdrop{animation:svelte-1yfhiw3-fade 0.2s ease-out}@keyframes svelte-1yfhiw3-fade{from{opacity:0}to{opacity:1}}button.svelte-1yfhiw3.svelte-1yfhiw3{display:block}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let whatPage;
  let $page, $$unsubscribe_page;
  let $notifications, $$unsubscribe_notifications;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { showModal } = $$props;
  let { data } = $$props;
  const notifications = writable([]);
  $$unsubscribe_notifications = subscribe(notifications, (value) => $notifications = value);
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$8);
  whatPage = $page;
  $$unsubscribe_page();
  $$unsubscribe_notifications();
  return ` <dialog class="svelte-1yfhiw3"${add_attribute("this", dialog, 0)}> <div class="grid-container svelte-1yfhiw3"><div class="item-1 item svelte-1yfhiw3">${slots.default ? slots.default({}) : ``}</div> <div class="item-2 item svelte-1yfhiw3"><button class="svelte-1yfhiw3" data-svelte-h="svelte-ljpjug">Zrušit</button></div> <div class="item-3 item svelte-1yfhiw3">${whatPage === "Žáci" ? `<button class="svelte-1yfhiw3" data-svelte-h="svelte-zvao5j"><i class="fi fi-br-delete svelte-1yfhiw3"></i>
					Odebrat</button>` : `<button class="svelte-1yfhiw3" data-svelte-h="svelte-9sgbnv"><i class="fi fi-br-delete svelte-1yfhiw3"></i>
					Odebrat</button>`}</div></div></dialog> ${each($notifications, (notification, index) => {
    return `${validate_component(Notification, "Notification").$$render(
      $$result,
      {
        key: index,
        message: notification.message,
        type: notification.type
      },
      {},
      {}
    )}`;
  })}`;
});
const css$7 = {
  code: ".grid-container.svelte-tztabu.svelte-tztabu{display:grid;align-items:center;grid-template-rows:repeat(2, 1fr);grid-template-columns:repeat(8, 1fr)}.grid-container.svelte-tztabu .item.svelte-tztabu{width:90%;justify-self:start}.grid-container.svelte-tztabu .item input.svelte-tztabu{width:100%;border-radius:20px;height:4vh;border:1px solid #c5c5c5;background-color:#e1e9ec;padding-left:3vh}.grid-container.svelte-tztabu .item input.svelte-tztabu:hover{background-color:rgba(225, 233, 236, 0.59)}.grid-container.svelte-tztabu .item-1.svelte-tztabu{margin-left:3vh;grid-column:span 2;grid-row:1}.grid-container.svelte-tztabu .item-1 p.svelte-tztabu{font-weight:500}.grid-container.svelte-tztabu .item-2.svelte-tztabu{grid-row:2;grid-column:span 2;margin-left:3vh}.grid-container.svelte-tztabu .item-5.svelte-tztabu{grid-column:7;grid-row:2;margin-left:12vh}.grid-container.svelte-tztabu .item-5 button.svelte-tztabu{border-style:none;background-color:#fa3054;border-radius:20px;height:4vh;color:white;width:100%;display:flex;align-items:center;justify-content:center;gap:1vh}.grid-container.svelte-tztabu .item-5 button .fi.svelte-tztabu{color:white}.grid-container.svelte-tztabu .item-5 button.svelte-tztabu:hover{background-color:rgba(250, 48, 84, 0.76)}",
  map: null
};
const RemoveStudent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showModal = false;
  let id = "";
  let userName = "";
  $$result.css.add(css$7);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="grid-container svelte-tztabu"><div class="item-1 item svelte-tztabu" data-svelte-h="svelte-1sbip5f"><p class="svelte-tztabu">Odebrat uživatele</p></div> <div class="item-2 item svelte-tztabu"><input placeholder="Isic" class="svelte-tztabu"${add_attribute("value", id, 0)}></div> <div class="item-5 item svelte-tztabu"><button class="svelte-tztabu" data-svelte-h="svelte-18xunz4"><i class="fi fi-br-delete svelte-tztabu"></i>
			Odebrat</button></div></div> ${validate_component(Modal, "Modal").$$render(
      $$result,
      { data: id, name: userName, showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<p>Odstranit: ${escape(userName)}</p>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css$6 = {
  code: ".container.svelte-rtfdkd{margin:4vh}.item-2.svelte-rtfdkd{margin-top:4vh;border-left:2px solid #46bf7f}.item-3.svelte-rtfdkd{border-left:2px solid #fa3054}hr.svelte-rtfdkd{margin:3vh;border:1px solid #c5c5c5}",
  map: null
};
const Student = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="container svelte-rtfdkd"><div class="item-1">${validate_component(Header, "Header").$$render($$result, { state: "Student" }, {}, {})}</div> <div class="item-2 svelte-rtfdkd">${validate_component(AddUser, "AddUser").$$render($$result, {}, {}, {})}</div> <hr class="svelte-rtfdkd"> <div class="item-3 svelte-rtfdkd">${validate_component(RemoveStudent, "RemoveStudent").$$render($$result, {}, {}, {})}</div> </div>`;
});
const css$5 = {
  code: ".grid-container.svelte-tztabu.svelte-tztabu{display:grid;align-items:center;grid-template-rows:repeat(2, 1fr);grid-template-columns:repeat(8, 1fr)}.grid-container.svelte-tztabu .item.svelte-tztabu{width:90%;justify-self:start}.grid-container.svelte-tztabu .item input.svelte-tztabu{width:100%;border-radius:20px;height:4vh;border:1px solid #c5c5c5;background-color:#e1e9ec;padding-left:3vh}.grid-container.svelte-tztabu .item input.svelte-tztabu:hover{background-color:rgba(225, 233, 236, 0.59)}.grid-container.svelte-tztabu .item-1.svelte-tztabu{margin-left:3vh;grid-column:span 2;grid-row:1}.grid-container.svelte-tztabu .item-1 p.svelte-tztabu{font-weight:500}.grid-container.svelte-tztabu .item-2.svelte-tztabu{grid-row:2;grid-column:span 2;margin-left:3vh}.grid-container.svelte-tztabu .item-5.svelte-tztabu{grid-column:7;grid-row:2;margin-left:12vh}.grid-container.svelte-tztabu .item-5 button.svelte-tztabu{border-style:none;background-color:#fa3054;border-radius:20px;height:4vh;color:white;width:100%;display:flex;align-items:center;justify-content:center;gap:1vh}.grid-container.svelte-tztabu .item-5 button .fi.svelte-tztabu{color:white}.grid-container.svelte-tztabu .item-5 button.svelte-tztabu:hover{background-color:rgba(250, 48, 84, 0.76)}",
  map: null
};
const RemoveGrade = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showModal = false;
  let grade = "";
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="grid-container svelte-tztabu"><div class="item-1 item svelte-tztabu" data-svelte-h="svelte-1t8e5nt"><p class="svelte-tztabu">Odebrat třídu</p></div> <div class="item-2 item svelte-tztabu"><input placeholder="Třída" class="svelte-tztabu"${add_attribute("value", grade, 0)}></div> <div class="item-5 item svelte-tztabu"><button class="svelte-tztabu" data-svelte-h="svelte-8u30fd"><i class="fi fi-br-delete svelte-tztabu"></i>
			Odebrat</button></div></div> ${validate_component(Modal, "Modal").$$render(
      $$result,
      { data: grade, showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<p>Odstranit třídu: ${escape(grade)}</p>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css$4 = {
  code: "div.svelte-ajgjcf{cursor:pointer}[disabled].svelte-ajgjcf{cursor:default}input.svelte-ajgjcf{display:none}",
  map: null
};
const FileDrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handleFiles = () => {
  } } = $$props;
  let { acceptedMimes = null } = $$props;
  let { max = 0 } = $$props;
  let { disabled = false } = $$props;
  let { name = void 0 } = $$props;
  let { tabindex = 0 } = $$props;
  let droppable = false;
  if ($$props.handleFiles === void 0 && $$bindings.handleFiles && handleFiles !== void 0)
    $$bindings.handleFiles(handleFiles);
  if ($$props.acceptedMimes === void 0 && $$bindings.acceptedMimes && acceptedMimes !== void 0)
    $$bindings.acceptedMimes(acceptedMimes);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  $$result.css.add(css$4);
  {
    if (disabled)
      droppable = false;
  }
  return `<div${add_attribute("tabindex", tabindex, 0)} role="button" aria-label="File Upload" class="svelte-ajgjcf">${slots.default ? slots.default({ droppable }) : `Upload`}</div> <input type="file"${add_attribute("accept", acceptedMimes === null ? null : acceptedMimes.join(","), 0)} ${max !== 1 ? "multiple" : ""} ${disabled ? "disabled" : ""}${add_attribute("name", name, 0)} class="svelte-ajgjcf">`;
});
const css$3 = {
  code: ".zone.svelte-1r7eik3.svelte-1r7eik3{background-color:#e1e9ec;padding:1vh;border:2px dotted #9f9f9f;border-radius:0.5rem;margin:3vh}.zone.svelte-1r7eik3 .flex-container.svelte-1r7eik3{display:flex;border-style:none;align-items:center;flex-direction:column;justify-content:end}.zone.svelte-1r7eik3 .flex-container p.svelte-1r7eik3{font-weight:400;font-size:1.5vh;color:#535361}.zone.svelte-1r7eik3 .flex-container .header.svelte-1r7eik3{color:#27262c;font-weight:500;font-size:2vh}.zone.svelte-1r7eik3 .flex-container .fi.svelte-1r7eik3{color:#27262c;font-size:2.5vh}.zone.svelte-1r7eik3.svelte-1r7eik3:hover{background-color:rgba(238, 238, 238, 0.69)}.droppable.svelte-1r7eik3.svelte-1r7eik3{border:1px dotted red}",
  map: null
};
const AddFile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $notifications, $$unsubscribe_notifications;
  const notifications = writable([]);
  $$unsubscribe_notifications = subscribe(notifications, (value) => $notifications = value);
  let grade = 0;
  let response = "";
  function addNotification(message, type) {
    notifications.update((arr) => [...arr, { message, type }]);
  }
  function handleFiles(files) {
    const reader = new FileReader();
    reader.onload = async function(e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      let jsonData = XLSX.utils.sheet_to_json(sheet);
      for (let entry of jsonData) {
        entry.id = String(entry.id);
        grade = entry.grade;
        try {
          response = await uploadUser(entry.id, entry.name, entry.grade);
          console.log(response);
        } catch (error) {
          console.error("Upload failed for:", entry.id, error);
        }
      }
      if (response) {
        addNotification(`Ročník ${grade} úspěšně přidána.`, "success");
      } else {
        addNotification(`Ročník ${grade} se nepodařilo přidat.`, "wrong");
      }
    };
    reader.readAsArrayBuffer(files[0]);
  }
  $$result.css.add(css$3);
  $$unsubscribe_notifications();
  return `${validate_component(FileDrop, "FileDrop").$$render($$result, { handleFiles, class: "container" }, {}, {
    default: ({ droppable }) => {
      return `<div class="${["zone svelte-1r7eik3", droppable ? "droppable" : ""].join(" ").trim()}" data-svelte-h="svelte-5i54of"><div class="flex-container svelte-1r7eik3"><i class="fi fi-br-upload svelte-1r7eik3"></i> <p class="header svelte-1r7eik3">Zde nahrajte tabulku žáků</p> <p class="svelte-1r7eik3">(přetáhněte soubor, nebo klikněte pro výběr - *xlxs)</p></div></div>`;
    }
  })} ${each($notifications, (notification, index) => {
    return `${validate_component(Notification, "Notification").$$render(
      $$result,
      {
        key: index,
        message: notification.message,
        type: notification.type
      },
      {},
      {}
    )}`;
  })}`;
});
const css$2 = {
  code: ".container.svelte-jfq8pt{margin:4vh}.item-2.svelte-jfq8pt{margin-top:4vh;border-left:2px solid #46bf7f}.item-3.svelte-jfq8pt{border-left:2px solid #fa3054}hr.svelte-jfq8pt{margin:3vh;border:1px solid #c5c5c5}",
  map: null
};
const Grade = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="container svelte-jfq8pt"><div class="item-1">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</div> <div class="item-2 svelte-jfq8pt">${validate_component(AddFile, "FileDrop").$$render($$result, {}, {}, {})}</div> <hr class="svelte-jfq8pt"> <div class="item-3 svelte-jfq8pt">${validate_component(RemoveGrade, "RemoveGrade").$$render($$result, {}, {}, {})}</div> </div>`;
});
const css$1 = {
  code: ".grid-container.svelte-1ckmn6m{display:flex;height:100vh}.item-1.svelte-1ckmn6m{width:35vh}.item-2.svelte-1ckmn6m{animation:0.3s ease-in-out 0s 1 svelte-1ckmn6m-slideInBottomPartially;width:100%;background-color:white}@keyframes svelte-1ckmn6m-slideInBottomPartially{0%{transform:translateY(0.5rem);opacity:0}100%{transform:translateY(0);opacity:100%}}",
  map: null
};
const Admin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let whatPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  whatPage = $page;
  $$unsubscribe_page();
  return `<div class="grid-container svelte-1ckmn6m"><div class="item-1 svelte-1ckmn6m">${validate_component(SideBar, "SideBar").$$render($$result, {}, {}, {})}</div> ${whatPage === "Žáci" ? `<div class="item-2 svelte-1ckmn6m">${validate_component(Student, "Student").$$render($$result, {}, {}, {})}</div>` : `<div class="item-2 svelte-1ckmn6m">${validate_component(Grade, "Grades").$$render($$result, {}, {}, {})}</div>`} </div>`;
});
const css = {
  code: '.bg-image.svelte-11gw8tc.svelte-11gw8tc{background-position:center;background-repeat:no-repeat;background-size:cover;position:absolute;height:100%;width:100%;background-image:url("/1itBudova.jpeg");filter:blur(15px);z-index:-1}.flex-container.svelte-11gw8tc.svelte-11gw8tc{display:flex;justify-content:center;align-items:center;height:100vh}.flex-container.svelte-11gw8tc .flex-container-2.svelte-11gw8tc{width:45vh;height:50vh;background:white;border-radius:5px}.flex-container.svelte-11gw8tc .flex-container-2 .header.svelte-11gw8tc{display:grid;grid-template-rows:repeat(1, 2fr);align-items:center;justify-content:center;margin-top:3vh;margin-bottom:4vh}.flex-container.svelte-11gw8tc .flex-container-2 .header .item-1.svelte-11gw8tc{border-radius:3px;height:3vh;width:auto;justify-self:center;margin:2vh 0 2vh 0}.flex-container.svelte-11gw8tc .flex-container-2 .header .item-2.svelte-11gw8tc{text-align:center;font-weight:600}.flex-container.svelte-11gw8tc .flex-container-2 .content.svelte-11gw8tc{display:grid;justify-content:center;grid-template-rows:2, 1fr;height:100%}.flex-container.svelte-11gw8tc .flex-container-2 .content .username.svelte-11gw8tc{margin-bottom:2vh}.flex-container.svelte-11gw8tc .flex-container-2 .content input.svelte-11gw8tc::placeholder{color:#27292e}.flex-container.svelte-11gw8tc .flex-container-2 .content input.svelte-11gw8tc:hover{background-color:rgba(224, 232, 236, 0.61)}.flex-container.svelte-11gw8tc .flex-container-2 .content input.svelte-11gw8tc{background-color:#e0e8ec;border:1px solid #cdcfd0;border-radius:20px;height:4vh;width:35vh;padding-left:2vh}.flex-container.svelte-11gw8tc .flex-container-2 .submit.svelte-11gw8tc{display:grid;margin-top:8vh;justify-content:center}.flex-container.svelte-11gw8tc .flex-container-2 .submit button.svelte-11gw8tc{border:none;height:4vh;width:37vh;border-radius:20px;background-color:#00afef;color:white}.flex-container.svelte-11gw8tc .flex-container-2 .submit button.svelte-11gw8tc:hover{background-color:rgba(0, 175, 239, 0.8)}',
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let password = "";
  $$result.css.add(css);
  return `<div class="bg-image svelte-11gw8tc"></div> <div class="flex-container svelte-11gw8tc"><div class="flex-container-2 svelte-11gw8tc"><div class="header svelte-11gw8tc" data-svelte-h="svelte-1q928sm"><img class="item-1 svelte-11gw8tc" src="/1itglogo.png" alt="ITlogo"> <p class="item-2 svelte-11gw8tc">Přihlášení do <br> administrátorské sekce</p></div> <form><div class="content svelte-11gw8tc"><div class="username svelte-11gw8tc"><input type="text" id="name" placeholder="Uživatelské jméno" class="svelte-11gw8tc"${add_attribute("value", name, 0)}></div> <div class="password"><input type="password" id="password" placeholder="Heslo" class="svelte-11gw8tc"${add_attribute("value", password, 0)}></div></div> <div class="submit svelte-11gw8tc" data-svelte-h="svelte-1cs2qrx"><button type="submit" class="svelte-11gw8tc">Přihlásit se</button></div></form></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLoggedIn;
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  isLoggedIn = $user === null ? false : true;
  $$unsubscribe_user();
  return `${isLoggedIn ? `${validate_component(Admin, "Admin").$$render($$result, {}, {}, {})}` : `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};

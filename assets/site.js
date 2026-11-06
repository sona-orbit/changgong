const THEMES = [
  { id: 'daily', title: '每天整理', hint: '早上三分鐘清完', subs: [
    { id: 'cards', label: '早報：一張卡一件事', headline: '一張卡一件事，\n滑完就清空。', body: '誰在等你回、哪個群組定了什麼、今天要交什麼。回覆他先擬好，你看一眼按下去就送；還沒想好就延後到晚報。' },
    { id: 'done', label: '清完的那一刻', headline: '清完了，\n你也知道清了什麼。', body: '最後一張處理完，他告訴你這次花了幾分鐘、回了誰、延後了什麼。昨晚他替你回了幾則，也一起交代。' } ] },
  { id: 'insight', title: '看懂你的 LINE', hint: '訊息量、誰在找你', subs: [
    { id: 'weekly', label: '一週總覽', headline: '這一週，\n你的 LINE 長這樣。', body: '收到多少、你送出多少、平均多久回，每一項都跟上週比。數字不是要你焦慮，是讓你知道時間花到哪裡去了。' },
    { id: 'heatmap', label: '什麼時候最忙', headline: '原來週四晚上，\n最多人找你。', body: '一週七天、一天二十四小時，哪一格最滿一眼就看得到。最常找你的人也排出來，下次排行程、留空檔，心裡有個底。' },
    { id: 'helped', label: '長工替你做了多少', headline: '這一週，\n他替你省下兩個多小時。', body: '代回幾則、擬了幾則草稿、你在線上時他讓開幾次、替你記下幾個待辦，全部攤開給你看。省下的時間怎麼算，也寫得清清楚楚。' },
    { id: 'relations', label: '有點冷掉的關係', headline: '好久沒聊的人，\n他會記得提醒你。', body: '以前常聊、最近安靜了的人，還有傳了訊息在等你回的人，他都幫你列出來。點一下打開對話，或請他先擬一句問候，你看過再送。' } ] },
  { id: 'perchat', title: '每個對話自己的規矩', hint: '媽媽和客戶不一樣', subs: [
    { id: 'mode', label: '誰自動回、誰先給你看', headline: '媽媽可以直接回，\n客戶先給你看。', body: '每個人、每個群組都能單獨決定：自動回、先擬草稿給你、被標註才回，或乾脆不管。再替每個人寫一段工作筆記，他回話會照著做。' },
    { id: 'takeover', label: '你開口後，他讓開多久', headline: '你一開口，\n他就退到旁邊。', body: '你在線上，他不搶話。讓開多久每個對話可以不一樣：家人十分鐘、工作群一小時。你走開了，他才接手。' },
    { id: 'signature', label: '要不要讓對方知道是長工', headline: '每一句代回，\n要不要署名你決定。', body: '朋友那邊標「長工代回」，客戶那邊寫「助理代覆」，家人那邊不加。每個對話用自己的說法。' } ] },
  { id: 'auto', title: '自動化', hint: '定時、群發、規則', subs: [
    { id: 'parse', label: '一句話交代', headline: '像跟人講話一樣\n交代事情。', body: '說一句「客戶提到報價就提醒我」，他整理成一條規則給你看，你點頭才生效。定時訊息、群發也都能這樣交代。' },
    { id: 'schedule', label: '定時訊息', headline: '該說的話，\n時間到就幫你說。', body: '每個平日提醒同事交週報、每週日跟媽媽說早安、每月提醒房東已轉帳。設好就不用再記。' },
    { id: 'broadcast', label: '群發給一份名單', headline: '一次發給一群人，\n但一則一則慢慢送。', body: '節日問候、活動通知，挑一份名單就好。他會慢慢送，不會一口氣洗出去。' } ] },
  { id: 'manner', title: '看場合說話', hint: '正事回、閒聊偶爾', subs: [
    { id: 'manner', label: '正事、閒聊、敏感話題', headline: '正事才出聲，\n閒聊偶爾接一句。', body: '有人問你、要你決定，他會回。大家在哈拉，他看氣氛接一句。錢、人事、別人的八卦，他一個字都不碰。' },
    { id: 'unsure', label: '不知道的事不亂答應', headline: '不知道的事，\n他只說「我確認一下」。', body: '有人問你時程、要你報價，對話裡又沒有答案，他不會替你答應，只會先客氣地接住，然後記一個待辦給你。' } ] },
  { id: 'memory', title: '不會忘', hint: '答應的事、群組決議', subs: [
    { id: 'promise', label: '你答應別人的事', headline: '你說「明天給你」，\n他就記著明天。', body: '你在對話裡答應的事，他會記成待辦、推算到期時間。時間到輕輕提醒你，你把東西傳過去了，他也會自己勾掉。' },
    { id: 'decision', label: '群組裡交給你的事', headline: '群組吵了兩百則，\n他告訴你結論。', body: '他替你聽群組，整理出討論了什麼、定了什麼，交給你的那一件會變成待辦。' } ] },
  { id: 'trust', title: '讓你安心', hint: '一鍵停、看得到原因', subs: [
    { id: 'stop', label: '一鍵叫他停下來', headline: '覺得不對，\n一鍵全部停住。', body: '自動回覆、定時訊息、群發，一個開關全部停下。再打開才恢復。' },
    { id: 'why', label: '他為什麼沒回', headline: '他沒回的時候，\n也告訴你為什麼。', body: '每個對話上方都寫著他最近一次的判斷。想知道他怎麼想的，點進去就是完整的五個步驟。' } ] },
];
const SCREEN = {
  cards: { time: '08:01', tab: 0, caption: '總覽・早報卡片' },
  done: { time: '08:04', tab: 0, caption: '總覽・清完的收尾頁' },
  weekly: { time: '21:30', tab: 0, caption: '總覽・一週總覽' },
  heatmap: { time: '21:31', tab: 0, caption: '總覽・什麼時候最忙' },
  helped: { time: '21:33', tab: 0, caption: '總覽・長工替你做了多少' },
  relations: { time: '21:35', tab: 0, caption: '總覽・有點冷掉的關係' },
  mode: { time: '10:12', tab: 1, caption: '對話・對象設定' },
  takeover: { time: '14:06', tab: 1, caption: '對話・你開口後他讓開' },
  signature: { time: '19:33', tab: 1, caption: '對話・代回標記' },
  parse: { time: '09:41', tab: 3, caption: '自動化・一句話交代' },
  schedule: { time: '09:41', tab: 3, caption: '自動化・定時送出' },
  broadcast: { time: '14:18', tab: 3, caption: '自動化・群發進度' },
  manner: { time: '21:12', tab: 1, caption: '對話・群組裡接一句' },
  unsure: { time: '20:44', tab: 1, caption: '對話・不替你答應，記成待辦' },
  promise: { time: '09:05', tab: 2, caption: '收件匣・你答應的事' },
  decision: { time: '15:02', tab: 1, caption: '對話・群組重點摘要' },
  stop: { time: '22:15', tab: 3, caption: '自動化・緊急停止' },
  why: { time: '21:42', tab: 1, caption: '對話・長工怎麼判斷要不要回' },
};

function initMain() {
  const themeTabs = document.getElementById('theme-tabs');
  const subTabs = document.getElementById('sub-tabs');
  const subList = document.getElementById('sub-tablist');
  let themeId = 'daily', subId = 'cards';
  const make = (tag, style, html) => { const el = document.createElement(tag); el.style.cssText = style; el.innerHTML = html; return el; };
  function render() {
    const theme = THEMES.find(t => t.id === themeId);
    const sub = theme.subs.find(s => s.id === subId);
    const screen = SCREEN[subId];
    themeTabs.replaceChildren(...THEMES.map((t, i) => {
      const on = t.id === themeId;
      const b = make('button', `text-align:left;border:1.5px solid ${on?'#1D2420':'#E3DDD0'};background:${on?'#1D2420':'#FFFFFF'};color:${on?'#F5F1E8':'#1D2420'};border-radius:20px;padding:16px 18px;font-family:inherit;cursor:pointer;display:flex;flex-direction:column;gap:6px`, `<span style="font-size:12px;opacity:.75">${String(i+1).padStart(2,'0')}</span><strong style="font-family:'Noto Serif TC',serif;font-size:18px">${t.title}</strong><span style="font-size:13px;opacity:.85;line-height:1.5">${t.hint}</span>`);
      b.type = 'button'; b.setAttribute('role','tab'); b.setAttribute('aria-selected', String(on));
      b.addEventListener('click', () => { themeId=t.id; subId=t.subs[0].id; render(); }); return b;
    }));
    subList.setAttribute('aria-label',theme.title);
    subTabs.replaceChildren(...theme.subs.map(s => {
      const on = s.id === subId;
      const b = make('button', `display:flex;align-items:center;gap:12px;text-align:left;border:0;background:${on?'#DCEFE4':'#F5F1E8'};color:#1D2420;border-radius:14px;padding:14px 16px;font-family:inherit;font-size:15px;cursor:pointer`, `<span style="width:8px;height:8px;border-radius:50%;background:${on?'#17603F':'#C9C3B6'};flex:none"></span><span style="flex:1">${s.label}</span>`);
      b.type='button'; b.setAttribute('role','tab'); b.setAttribute('aria-selected',String(on));
      b.addEventListener('click', () => { subId=s.id; render(); }); return b;
    }));
    document.getElementById('theme-title').textContent=theme.title;
    document.getElementById('sub-headline').textContent=sub.headline;
    document.getElementById('sub-body').textContent=sub.body;
    document.getElementById('screen-time').textContent=screen.time;
    document.getElementById('screen-caption').textContent=screen.caption+'（名字與數字皆為示意）';
    document.querySelectorAll('[data-panel]').forEach(p => { p.hidden = p.dataset.panel !== subId; });
    document.querySelectorAll('[data-bottom-tab]').forEach((t,i) => {
      const on=i===screen.tab; t.style.background=on?'#DCEFE4':'transparent'; t.style.color=on?'#17603F':'#3C3C43'; t.style.fontWeight=on?'700':'400';
    });
  }
  render();
  const stage=document.getElementById('phone-stage'), frame=stage.querySelector('.phone-frame');
  function fitPhone(){ const width=stage.clientWidth, scale=Math.min(1,width/364); stage.style.height=(714*scale)+'px'; frame.style.left=((width-364*scale)/2)+'px'; frame.style.transformOrigin='top left'; frame.style.transform=`scale(${scale})`; }
  new ResizeObserver(fitPhone).observe(stage); fitPhone();
}
function initPricing() {
  let os='mac';
  const mail=(plan,price) => {
    const name=os==='win'?'Windows':'Mac';
    const subject=plan?`長工安裝：${plan}（${name}）`:'想先聊聊長工';
    const body=['您好，我想了解長工的安裝。','',plan?`方案：${plan}（NT$ ${price}）`:'方案：還沒決定',`電腦：${name}，型號／年份：`,'每天大概收到多少 LINE 訊息：','最想讓長工先幫忙的事：','方便聯絡的時間與方式：','','謝謝！'].join('\n');
    return 'mailto:sona.orbit.hi@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  };
  function render(){
    const win=os==='win', prices=[4999,9999,59999].map(n=>(n+(win?3000:0)).toLocaleString('en-US'));
    document.querySelectorAll('[data-os]').forEach(b=>{const on=b.dataset.os===os;b.style.background=on?'#1D2420':'transparent';b.style.color=on?'#F5F1E8':'#1D2420';b.setAttribute('aria-pressed',String(on));});
    document.getElementById('os-note').textContent=win?'Windows 每一種都多 NT$3,000。':'最適合一台一直開著的 Mac mini。';
    document.querySelectorAll('[data-price]').forEach((p,i)=>p.textContent=prices[i]);
    ['自己來','一起裝','裝到好'].forEach((name,i)=>document.querySelector(`[data-mail="${i+1}"]`).href=mail(name,prices[i]));
    document.querySelector('[data-mail="ask"]').href=mail('','');
  }
  document.querySelectorAll('[data-os]').forEach(b=>b.addEventListener('click',()=>{os=b.dataset.os;render();})); render();
}
if(document.getElementById('theme-tabs')) initMain();
if(document.querySelector('[data-os]')) initPricing();

import { PRODUCTS } from './product-data.js';
import { escapeHTML as e, consultationURL } from './product-markup.js';
export { PRODUCTS } from './product-data.js';
export function initProducts() {
 const filterBar=document.querySelector('.filter-bar');
 filterBar?.querySelectorAll('[data-filter]').forEach(chip=>chip.addEventListener('click',()=>{
  filterBar.querySelectorAll('[data-filter]').forEach(c=>{c.classList.toggle('is-active',c===chip);c.setAttribute('aria-pressed',String(c===chip));});
  document.querySelectorAll('.product-card').forEach(card=>{const hide=chip.dataset.filter!=='all'&&card.dataset.category!==chip.dataset.filter;card.classList.toggle('is-hidden',hide);card.hidden=hide;});
  const count=document.querySelector('.products-count');if(count)count.textContent=`${document.querySelectorAll('.product-card:not(.is-hidden)').length} sản phẩm`;
 }));
 const modal=document.querySelector('#product-modal');if(!modal)return;
 modal.setAttribute('aria-modal','true');
 let returnFocus=null;let background=[];
 const close=()=>{
  if(!modal.classList.contains('is-open'))return;
  modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');
  background.forEach(([el,wasInert])=>el.inert=wasInert);background=[];
  document.body.classList.remove('menu-open');returnFocus?.focus();
 };
 const open=(product,trigger)=>{
  const base=modal.dataset.basePath||'';
  const img=modal.querySelector('.product-modal__image img');img.src=base+product.image;img.alt=product.name;img.width=1200;img.height=900;
  modal.querySelector('.product-modal__tag').textContent=product.tag;
  modal.querySelector('.product-modal__title').textContent=product.name;
  modal.querySelector('.product-modal__desc').textContent=product.desc;
  const fields=[['Đặc điểm',product.features],['Hương vị & kết cấu',product.flavor],['Gợi ý món ăn',product.usage],['Gợi ý kết hợp',product.pairing],['Quy cách dự kiến',product.packaging+' Khối lượng và bao bì được xác nhận khi tư vấn.'],['Bảo quản chung',product.storage]];
  modal.querySelector('.product-modal__details').innerHTML=fields.map(([title,value])=>`<div class="product-modal__detail"><strong>${title}</strong><span>${e(value)}</span></div>`).join('')+`<a class="btn btn--primary product-modal__consult" href="${consultationURL(product,base)}">Đăng ký nhận tư vấn</a>`;
  returnFocus=trigger;background=[...document.body.children].filter(el=>el!==modal&&!['SCRIPT','STYLE'].includes(el.tagName)).map(el=>[el,el.inert]);background.forEach(([el])=>el.inert=true);
  modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('menu-open');modal.querySelector('.modal__content').scrollTop=0;modal.querySelector('.modal__close').focus({preventScroll:true});
 };
 document.addEventListener('click',event=>{const trigger=event.target.closest('[data-product-id]');if(!trigger)return;const product=PRODUCTS.find(p=>String(p.id)===trigger.dataset.productId);if(product){event.preventDefault();open(product,trigger);}});
 modal.querySelector('.modal__close').addEventListener('click',close);modal.querySelector('.modal__overlay').addEventListener('click',close);
 document.addEventListener('keydown',event=>{
  if(!modal.classList.contains('is-open'))return;
  if(event.key==='Escape'){event.preventDefault();close();}
  if(event.key==='Tab'){
   const nodes=[...modal.querySelectorAll('button:not([disabled]),a[href],[tabindex="0"]')].filter(el=>el.getClientRects().length);
   const first=nodes[0],last=nodes.at(-1);
   if(event.shiftKey&&(document.activeElement===first||!modal.contains(document.activeElement))){event.preventDefault();last.focus();}
   else if(!event.shiftKey&&(document.activeElement===last||!modal.contains(document.activeElement))){event.preventDefault();first.focus();}
  }
 });
}

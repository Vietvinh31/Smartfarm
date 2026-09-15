export const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function consultationURL(product, base = '') { return `${base}pages/contact.html?product=${product.id}#contact-form`; }
export function productCard(p, base = '') {
 const e=escapeHTML;
 return `<article class="product-card" data-category="${e(p.category)}"><div class="product-card__image"><img src="${base}${e(p.image)}" alt="${e(p.name)}" width="1200" height="900" loading="lazy"><span class="product-card__tag">${e(p.tag)}</span></div><div class="product-card__body"><h3 class="product-card__title">${e(p.name)}</h3><p class="product-card__desc">${e(p.desc)}</p><p class="product-card__flavor"><strong>Hương vị & kết cấu:</strong> ${e(p.flavor)}</p><div class="product-card__actions"><button class="btn btn--secondary" data-product-id="${p.id}" aria-haspopup="dialog" aria-controls="product-modal" aria-label="Xem chi tiết ${e(p.name)}">Xem chi tiết</button><a class="btn btn--primary" href="${consultationURL(p,base)}" aria-label="Đăng ký nhận tư vấn về ${e(p.name)}">Đăng ký nhận tư vấn</a></div></div></article>`;
}

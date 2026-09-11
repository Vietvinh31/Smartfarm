/**
 * Ươm Xanh – Nông nghiệp thông minh - Products Module
 */

const PRODUCTS = [
  {
    id: 1,
    name: 'Microgreens hỗn hợp',
    category: 'microgreens',
    tag: 'Microgreens',
    desc: 'Nhiều sắc lá nhỏ trong cùng một phần rau, vị tươi và kết cấu nhẹ. Phù hợp khi bạn muốn khám phá hương vị đa dạng của microgreens.',
    image: 'assets/images/microgreens.webp',
    features: 'Hỗn hợp các loại microgreens',
    flavor: 'Tươi mát, hơi cay nhẹ, giòn',
    usage: 'Rau trộn, bánh mì, trang trí món ăn',
    pairing: 'Món có nhiều kết cấu, phần rau ăn kèm'
  },
  {
    id: 2,
    name: 'Microgreens cải củ đỏ',
    category: 'microgreens',
    tag: 'Microgreens',
    desc: 'Thân tím đỏ, lá xanh nhỏ và vị cay nhẹ tạo điểm nhấn dễ nhận ra. Một lựa chọn dành cho người thích món ăn có thêm cá tính.',
    image: 'assets/images/radish.webp',
    features: 'Thân tím đỏ, lá xanh nhỏ',
    flavor: 'Cay nhẹ, giòn, tươi',
    usage: 'Trang trí món ăn, rau trộn, sinh tố',
    pairing: 'Nguyên liệu vị thanh để làm nổi bật vị cay của rau'
  },
  {
    id: 3,
    name: 'Microgreens bông cải',
    category: 'microgreens',
    tag: 'Microgreens',
    desc: 'Thân mảnh, lá xanh nhỏ, hương vị dịu và hơi đắng nhẹ. Dễ kết hợp cùng những nguyên liệu có vị thanh để giữ nét riêng của rau.',
    image: 'assets/images/broccoli.webp',
    features: 'Thân mảnh, lá nhỏ xanh tươi',
    flavor: 'Nhẹ, hơi đắng, tươi',
    usage: 'Rau trộn, nước ép, ăn kèm',
    pairing: 'Món có nước xốt nhẹ, tránh lấn át hương rau'
  },
  {
    id: 4,
    name: 'Cải xoăn xanh',
    category: 'leafy',
    tag: 'Rau ăn lá',
    desc: 'Lá xanh có viền xoăn và kết cấu rõ, mang vị rau đậm. Thích hợp để cắt nhỏ, kết hợp trong món xào hoặc các món rau theo khẩu vị.',
    image: 'assets/images/kale.webp',
    features: 'Lá xanh, viền xoăn, kết cấu rõ',
    flavor: 'Đậm vị rau, hơi ngọt',
    usage: 'Rau trộn, sinh tố, xào nhanh',
    pairing: 'Món xào cùng nấm hoặc các loại rau theo mùa'
  },
  {
    id: 5,
    name: 'Xà lách búp bơ',
    category: 'leafy',
    tag: 'Rau ăn lá',
    desc: 'Các lớp lá mềm ôm thành búp, vị thanh và giòn mát. Dáng lá thuận tiện cho món cuốn, bánh mì và đĩa rau ăn kèm.',
    image: 'assets/images/lettuce-product.webp',
    features: 'Lá mềm, giòn, màu xanh tươi',
    flavor: 'Ngọt nhẹ, mát',
    usage: 'Rau trộn, món cuốn, bánh mì',
    pairing: 'Món cuốn, bánh mì với phần nhân bạn yêu thích'
  },
  {
    id: 6,
    name: 'Rau gia vị hỗn hợp',
    category: 'herbs',
    tag: 'Rau gia vị',
    desc: 'Húng quế, mùi tây và rau mùi mang những lớp hương riêng. Thêm từng ít một để tạo điểm nhấn mà vẫn giữ sự cân bằng cho món ăn.',
    image: 'assets/images/herbs.webp',
    features: 'Húng quế, mùi tây và rau mùi',
    flavor: 'Thơm mạnh, tươi sáng',
    usage: 'Nấu ăn, trang trí, đồ uống',
    pairing: 'Thêm từng loại theo mùi hương chủ đạo của món'
  }
];

export function initProducts() {
  const grid = document.querySelector('.products-grid');
  const filterBar = document.querySelector('.filter-bar');
  const modal = document.querySelector('#product-modal');

  if (grid && grid.dataset.render === 'true') {
    renderProducts(grid, PRODUCTS);
  }

  if (filterBar) {
    initFilter(filterBar);
  }

  if (modal) {
    initProductModal(modal, PRODUCTS);
  }
}

function renderProducts(grid, products) {
  const basePath = grid.dataset.basePath || '';
  grid.innerHTML = products.map(p => `
    <article class="product-card reveal" data-category="${p.category}">
      <div class="product-card__image">
        <img src="${basePath}${p.image}" alt="${p.name} - Ươm Xanh – Nông nghiệp thông minh" loading="lazy">
        <span class="product-card__tag">${p.tag}</span>
      </div>
      <div class="product-card__body">
        <h3 class="product-card__title">${p.name}</h3>
        <p class="product-card__desc">${p.desc}</p>
        <button class="btn btn--secondary product-card__btn" data-product-id="${p.id}">Xem chi tiết</button>
      </div>
    </article>
  `).join('');

  // Re-trigger reveal for dynamically added cards
  grid.querySelectorAll('.reveal').forEach(el => {
    requestAnimationFrame(() => el.classList.add('is-visible'));
  });
}

function initFilter(filterBar) {
  const chips = filterBar.querySelectorAll('.filter-chip');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => { c.classList.remove('is-active'); c.setAttribute('aria-pressed', 'false'); });
      chip.classList.add('is-active');
      chip.setAttribute('aria-pressed', 'true');
      const filter = chip.dataset.filter;

      document.querySelectorAll('.product-card').forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !show);
      });
      const count = document.querySelector('.products-count');
      if (count) count.textContent = `${document.querySelectorAll('.product-card:not(.is-hidden)').length} sản phẩm`;
    });
  });
}

function initProductModal(modal, products) {
  modal.querySelector('.modal__overlay')?.addEventListener('click', () => closeProductModal(modal));
  modal.querySelector('.modal__close')?.addEventListener('click', () => closeProductModal(modal));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeProductModal(modal);
    }
  });

  // Event delegation — works for static & dynamically rendered cards
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-product-id]');
    if (!btn) return;
    e.preventDefault();
    const id = parseInt(btn.dataset.productId, 10);
    const product = products.find(p => p.id === id);
    if (product) openProductModal(modal, product);
  });
}

function openProductModal(modal, product) {
  const basePath = modal.dataset.basePath || '';
  modal.querySelector('.product-modal__image img').src = `${basePath}${product.image}`;
  modal.querySelector('.product-modal__image img').alt = product.name;
  modal.querySelector('.product-modal__tag').textContent = product.tag;
  modal.querySelector('.product-modal__title').textContent = product.name;
  modal.querySelector('.product-modal__desc').textContent = product.desc;

  const details = modal.querySelector('.product-modal__details');
  details.innerHTML = `
    <div class="product-modal__detail"><strong>Đặc điểm</strong><span>${product.features}</span></div>
    <div class="product-modal__detail"><strong>Hương vị</strong><span>${product.flavor}</span></div>
    <div class="product-modal__detail"><strong>Ứng dụng</strong><span>${product.usage}</span></div>
    <div class="product-modal__detail"><strong>Gợi ý kết hợp</strong><span>${product.pairing}</span></div>
  `;

  modal._returnFocus = document.activeElement;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('menu-open');
  modal.querySelector('.modal__close')?.focus();
}

function closeProductModal(modal) {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  modal._returnFocus?.focus();
  document.body.classList.remove('menu-open');
}

export { PRODUCTS };

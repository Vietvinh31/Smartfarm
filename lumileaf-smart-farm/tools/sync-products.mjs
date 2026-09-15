import fs from 'node:fs';
import { PRODUCTS } from '../js/product-data.js';
import { productCard } from '../js/product-markup.js';
for (const [file,items,base] of [['pages/products.html',PRODUCTS,'../'],['index.html',PRODUCTS.filter(p=>[1,2,5].includes(p.id)),'']]) {
 let s=fs.readFileSync(file,'utf8');
 s=s.replace(/<!-- products:start -->[\s\S]*?<!-- products:end -->/,`<!-- products:start -->\n<!-- Generated from js/product-data.js; do not edit these cards by hand. -->\n<div class="products-grid" data-base-path="${base}">\n${items.map(p=>productCard(p,base)).join('\n')}\n</div>\n<!-- products:end -->`);
 s=s.replace(/(<p class="products-count"[^>]*>).*?(<\/p>)/,`$1${PRODUCTS.length} sản phẩm$2`);fs.writeFileSync(file,s);
}

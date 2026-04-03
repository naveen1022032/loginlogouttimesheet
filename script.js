const categories = [
  { icon: '📱', name: 'Mobiles' },
  { icon: '💻', name: 'Laptops' },
  { icon: '🎧', name: 'Audio' },
  { icon: '⌚', name: 'Wearables' },
  { icon: '📺', name: 'TVs' },
  { icon: '🏠', name: 'Home' },
];

const products = [
  { name: 'iPhone 15 (128GB)', price: '₹59,999', old: '₹69,900', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80' },
  { name: 'Gaming Laptop RTX 4060', price: '₹89,990', old: '₹1,12,490', img: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80' },
  { name: 'Wireless Earbuds Pro', price: '₹2,999', old: '₹7,999', img: 'https://images.unsplash.com/photo-1606741965509-57c2d1e6d3d5?auto=format&fit=crop&w=900&q=80' },
  { name: 'Smartwatch AMOLED', price: '₹1,499', old: '₹4,999', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80' },
  { name: '4K Smart TV 55-inch', price: '₹34,999', old: '₹59,999', img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80' },
  { name: 'Bluetooth Soundbar', price: '₹3,499', old: '₹8,999', img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80' },
];

document.getElementById('categories').innerHTML = categories
  .map((c) => `<article class="cat"><div class="icon">${c.icon}</div><p>${c.name}</p></article>`)
  .join('');

document.getElementById('products').innerHTML = products
  .map(
    (p) => `<article class="card"><img src="${p.img}" alt="${p.name}" /><div class="meta"><p class="name">${p.name}</p><p class="price">${p.price}<span class="old">${p.old}</span></p></div></article>`,
  )
  .join('');

const end = Date.now() + 1000 * 60 * 60 * 10;
const countdown = document.getElementById('countdown');

setInterval(() => {
  const diff = Math.max(0, end - Date.now());
  const h = String(Math.floor(diff / 36e5)).padStart(2, '0');
  const m = String(Math.floor((diff % 36e5) / 6e4)).padStart(2, '0');
  const s = String(Math.floor((diff % 6e4) / 1e3)).padStart(2, '0');
  countdown.textContent = `Sale Ends In ${h}:${m}:${s}`;
}, 1000);

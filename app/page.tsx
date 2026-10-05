import Image from "next/image";

const products = [
  { name: "Lục trà sữa trân châu trắng", note: "Tươi · thanh · giòn dịu", desc: "Lục trà sữa thanh nhẹ kết hợp trân châu trắng trong veo, giòn dai và ngọt dịu.", image: "/images/Lục trà sữa.jpg", tone: "#dbe6bd" },
  { name: "Ô long sữa trân châu đen", note: "Thơm · sâu · dẻo mềm", desc: "Ô long rang thơm quyện sữa mềm mượt, dùng cùng trân châu đen dẻo dai, tròn vị.", image: "/images/Ô long sữa.jpg", tone: "#ead5af" },
  { name: "Trà đen sữa thạch đen", note: "Đậm · mát · cân bằng", desc: "Cốt trà đen đậm hương, vị sữa vừa phải và thạch đen mát mềm trong từng ngụm.", image: "/images/Trà đen sữa.png", tone: "#d9bc8c" },
];

const ingredients = [
  { name: "Lá trà tươi", text: "Tuyển chọn kỹ để giữ trọn hương trà tự nhiên.", image: "/images/Lá Trà Tươi.png" },
  { name: "Sữa tươi", text: "Mềm mượt, vừa đủ béo cho một tổng thể cân bằng.", image: "/images/Sữa tươi.png" },
  { name: "Mật ong", text: "Vị ngọt dịu, đưa trải nghiệm trở nên nhẹ nhàng hơn.", image: "/images/Mật ong.png" },
];

const audienceInsights = [
  {
    number: "01",
    title: "Một ngày rất thật",
    text: "Bạn trẻ 20–25 tuổi tại TP.HCM, đang học tập hoặc mới đi làm, yêu trà sữa nhưng vẫn quan tâm đến sức khỏe và vóc dáng.",
  },
  {
    number: "02",
    title: "Chọn bằng trải nghiệm",
    text: "Thường khám phá thương hiệu qua TikTok, Instagram, Facebook; xem review từ KOL/KOC, quan tâm hình ảnh đẹp, giá hợp lý và cách mua thuận tiện.",
  },
  {
    number: "03",
    title: "Muốn ngon mà vẫn nhẹ",
    text: "Tìm một ly trà sữa ngon, rõ nguồn gốc nguyên liệu, ít ngọt và ít béo hơn — không phải phân vân giữa sở thích và sức khỏe.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Điều hướng chính">
          <a className="brand" href="#home" aria-label="HaoHaoCha - Trang chủ"><Image src="/images/logo-transparent.png" width={425} height={148} alt="HaoHaoCha — Healthy, Balance, Light" priority /></a>
          <div className="links">
            <a href="#story">Câu chuyện</a><a href="#menu">Sản phẩm</a><a href="#ingredients">Nguyên liệu</a><a href="#contact">Liên hệ</a>
          </div>
          <a className="nav-cta" href="#menu">Khám phá vị trà</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <Image className="hero-image" src="/images/Key visual.png" fill priority sizes="100vw" alt="HaoHaoCha giữa đồi trà xanh" />
        <div className="hero-shade" />
        <div className="hero-copy container">
          <span className="eyebrow light">Hương trà lành · Nhịp sống xanh</span>
          <h1>Nhẹ một ngụm trà,<br /><em>dịu cả ngày dài.</em></h1>
          <p>Trà sữa thanh nhẹ cho người trẻ yêu vị ngon, nhưng vẫn muốn lắng nghe cơ thể mình.</p>
          <div className="hero-actions"><a className="button button-light" href="#menu">Xem bộ sưu tập</a><a className="text-link" href="#story">Chuyện của HaoHaoCha <span>↓</span></a></div>
        </div>
        <div className="hero-index">01 <span /> Healthy · Balance · Light</div>
      </section>

      <section id="story" className="story section">
        <div className="container story-grid">
          <div className="story-heading"><span className="eyebrow">Câu chuyện HaoHaoCha</span><h2>Vị ngon không cần<br />đánh đổi <em>sự nhẹ lành.</em></h2></div>
          <div className="story-copy"><p className="lead">HaoHaoCha bắt đầu từ một mong muốn rất thật: để người trẻ được uống món mình thích mà không phải đánh đổi giữa sở thích và sức khỏe.</p><p>Chúng mình hiểu cảm giác muốn thưởng thức một ly trà sữa sau giờ học, giờ làm, nhưng lại ngần ngại vì vị quá ngọt, quá béo hoặc thiếu thông tin rõ ràng. Vì thế, HaoHaoCha chọn lá trà tươi, sữa mềm mượt và mật ong dịu ngọt; cân chỉnh mỗi công thức để vị trà vẫn rõ, hương sữa vừa vặn và cảm giác sau cùng thật nhẹ nhàng.</p></div>
        </div>
      </section>

      <section className="insight-section section" aria-labelledby="insight-title">
        <div className="container">
          <div className="insight-title-row">
            <div><span className="eyebrow">HaoHaoCha dành cho ai?</span><h2 id="insight-title">Từ điều bạn trăn trở,<br /><em>HaoHaoCha tạo nên câu trả lời.</em></h2></div>
            <p>Không chỉ là một thức uống “healthy”, HaoHaoCha muốn trở thành lựa chọn đủ ngon để bạn yêu thích và đủ cân bằng để an tâm đồng hành mỗi ngày.</p>
          </div>
          <div className="insight-grid">
            {audienceInsights.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
          <div className="insight-quote"><span>Điều chúng mình luôn ghi nhớ</span><blockquote>“Tôi muốn uống trà sữa mình thích mà không phải đắn đo giữa sở thích và sức khỏe.”</blockquote></div>
        </div>
      </section>

      <section id="menu" className="products section">
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">Bộ ba sản phẩm HaoHaoCha</span><h2>Mỗi ngày một vị,<br /><em>vẫn trọn chất riêng.</em></h2></div><p>Ba sản phẩm đặc trưng kết hợp nền trà thơm cùng topping riêng: trân châu trắng, trân châu đen và thạch đen.</p></div>
          <div className="product-grid">
            {products.map((product, index) => <article className="product-card" key={product.name} style={{ "--tone": product.tone } as React.CSSProperties}>
              <div className="product-image"><span className="number">0{index + 1}</span><Image src={product.image} fill sizes="(max-width: 768px) 100vw, 33vw" alt={product.name} /></div>
              <div className="product-info"><span>{product.note}</span><h3>{product.name}</h3><p>{product.desc}</p><a href="#contact" aria-label={`Tìm hiểu thêm về ${product.name}`}>Tìm hiểu thêm <b>＋</b></a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="ingredients" className="ingredients section">
        <div className="container ingredient-layout">
          <div className="ingredient-intro"><span className="eyebrow light">Từ những điều nguyên bản</span><h2>Chất lành<br />tạo nên <em>vị thật.</em></h2><p>HaoHaoCha ưu tiên những nguyên liệu gần gũi, được kết hợp vừa vặn để mỗi ly trà giữ được hương vị tự nhiên nhất.</p></div>
          <div className="ingredient-list">{ingredients.map((item, index) => <article key={item.name}><div className="ingredient-thumb"><Image src={item.image} fill sizes="160px" alt={item.name} /></div><span>0{index + 1}</span><div><h3>{item.name}</h3><p>{item.text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="quote section"><div className="container"><span className="leaf">❦</span><blockquote>“Một ly trà mình thích,<br />một lựa chọn <em>nhẹ nhàng hơn.</em>”</blockquote><p>— Tinh thần HaoHaoCha —</p></div></section>

      <section className="feedback-section" aria-labelledby="feedback-title">
        <div className="container feedback-card">
          <div>
            <span className="eyebrow light">Góc lắng nghe</span>
            <h2 id="feedback-title">Bạn thấy HaoHaoCha<br /><em>thế nào?</em></h2>
          </div>
          <div className="feedback-content">
            <p>Mỗi góp ý của bạn đều giúp HaoHaoCha hiểu hơn về trải nghiệm, hương vị yêu thích và những điều cần cải thiện trong hành trình tiếp theo.</p>
            <a className="feedback-button" href="https://forms.gle/bEixHhxA1dfwHgJE8" target="_blank" rel="noopener noreferrer">Gửi đánh giá cho HaoHaoCha <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-top"><div className="footer-brand"><Image src="/images/logo-transparent.png" width={425} height={148} alt="HaoHaoCha — Healthy, Balance, Light" /></div><div><h3>Khám phá</h3><a href="#story">Câu chuyện</a><a href="#menu">Sản phẩm</a><a href="#ingredients">Nguyên liệu</a></div><div><h3>Liên hệ</h3><a href="tel:19000000">1900 0000</a><a href="mailto:hello@haocha.vn">hello@haocha.vn</a><p>TP. Hồ Chí Minh, Việt Nam</p></div><div><h3>Kết nối</h3><a href="https://www.instagram.com/haohao.cha?stkn=aăk2bDIyM2szNTJj" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.facebook.com/share/1EsfSbVFVA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a><a href="https://www.tiktok.com/@haohaocha03?_r=1&_t=ZS-9AIẢIvVsXLC" target="_blank" rel="noopener noreferrer">TikTok</a></div></div>
        <div className="container footer-bottom"><span>© 2026 HaoHaoCha. All rights reserved.</span><span>Uống lành · Sống nhẹ</span></div>
      </footer>
    </main>
  );
}

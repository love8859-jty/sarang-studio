/* 사랑이야기스튜디오 — 공통 동작 (메뉴, 사진 크게 보기, 가격표, 문의 등)
   ※ 이 파일은 고치지 않아도 됩니다. 정보 수정은 config.js 에서 하세요. */
(function () {
  const S = window.STUDIO, CATS = window.CATEGORIES, PRICES = window.PRICES, GALLERY = window.GALLERY;
  const page = document.body.dataset.page || "";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const tel = (n) => "tel:" + n.replace(/[^0-9+]/g, "");
  const catByKey = (k) => CATS.find((c) => c.key === k);

  const ICON = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.8 5.3 4.6 6.7l-1 3.6c-.1.4.3.7.6.5l4.2-2.8c.5.1 1.1.1 1.6.1 5.5 0 10-3.6 10-8S17.5 3 12 3z"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    msg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  };

  /* ---------------- 헤더 ---------------- */
  const header = $("#site-header");
  if (header) {
    const dropLinks = CATS.map((c) => `<a href="${c.page}">${c.name}${c.key === "family" ? "<em>대표</em>" : ""}</a>`).join("");
    const isCat = CATS.some((c) => c.key === page);
    header.outerHTML = `
    <header class="site-header">
      <div class="wrap">
        <a class="logo" href="index.html" aria-label="${S.name} 홈"><b>${S.name}</b><small>${S.nameEn}</small></a>
        <nav class="nav" aria-label="주 메뉴">
          <a href="family.html" class="${page === "family" ? "active" : ""}">가족사진</a>
          <div class="drop">
            <button type="button" class="${isCat && page !== "family" ? "active" : ""}" aria-expanded="false">촬영 분야</button>
            <div class="drop-menu">${dropLinks}</div>
          </div>
          <a href="gallery.html" class="${page === "gallery" ? "active" : ""}">갤러리</a>
          <a href="price.html" class="${page === "price" ? "active" : ""}">상품·가격</a>
          <a href="contact.html#location" class="${page === "contact" ? "active" : ""}">오시는 길</a>
          <a href="contact.html" class="btn btn-primary">예약 문의</a>
        </nav>
        <button class="menu-btn" type="button" aria-label="메뉴 열기" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </header>
    <div class="mobile-menu" id="mobile-menu">
      <div class="mm-label">촬영 분야</div>
      <div class="mm-cats">${CATS.map((c) => `<a href="${c.page}" class="${c.key === "family" ? "star" : ""}">${c.name}</a>`).join("")}</div>
      <div class="mm-label">안내</div>
      <div class="mm-links">
        <a href="index.html">홈</a>
        <a href="gallery.html">갤러리</a>
        <a href="price.html">상품 · 가격</a>
        <a href="contact.html">예약 문의</a>
        <a href="contact.html#location">오시는 길</a>
      </div>
      <div class="btn-row" style="margin-top:24px">
        <a class="btn btn-line" style="flex:1" href="${tel(S.phone)}">${ICON.phone} 전화 상담</a>
        ${S.naverBooking ? `<a class="btn btn-naver" style="flex:1" href="${S.naverBooking}" target="_blank" rel="noopener">N 네이버 예약</a>` : ""}
      </div>
    </div>`;

    const btn = $(".menu-btn"), mm = $("#mobile-menu");
    btn.addEventListener("click", () => {
      const open = mm.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    const drop = $(".drop");
    drop.querySelector("button").addEventListener("click", (e) => {
      const open = drop.classList.toggle("open");
      e.currentTarget.setAttribute("aria-expanded", open);
    });
    document.addEventListener("click", (e) => { if (!drop.contains(e.target)) drop.classList.remove("open"); });
  }

  /* ---------------- 푸터 + 모바일 하단 버튼 ---------------- */
  const footer = $("#site-footer");
  if (footer) {
    const sns = [["네이버 예약", S.naverBooking], ["네이버 톡톡", S.naverTalk], ["인스타그램", S.instagram], ["네이버 카페", S.cafe], ["블로그", S.blog], ["카카오톡", S.kakao]]
      .filter((x) => x[1]).map((x) => `<a href="${x[1]}" target="_blank" rel="noopener">${x[0]}</a>`).join("");
    footer.outerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="cols">
          <div>
            <a class="logo" href="index.html"><b>${S.name}</b><small>${S.nameEn}</small></a>
            <p style="margin-top:16px">${S.slogan}</p>
            <p style="margin-top:14px">${S.address}<br>전화 <a href="${tel(S.phone)}">${S.phone}</a></p>
            ${sns ? `<div class="sns">${sns}</div>` : ""}
          </div>
          <div>
            <h4>촬영 분야</h4>
            <div class="f-links">${CATS.map((c) => `<a href="${c.page}">${c.name}</a>`).join("")}</div>
          </div>
          <div>
            <h4>영업시간</h4>
            <div class="f-links">${S.hours.map((h) => `<span>${h[0]} &nbsp;${h[1]}</span>`).join("")}</div>
            <h4 style="margin-top:24px">바로가기</h4>
            <div class="f-links"><a href="gallery.html">갤러리</a><a href="price.html">상품·가격</a><a href="contact.html">예약 문의 · 오시는 길</a></div>
          </div>
        </div>
        <div class="copy"><span>${S.bizInfo}</span><span>© ${new Date().getFullYear()} ${S.name}</span></div>
      </div>
    </footer>
    <div class="bottom-bar" role="navigation" aria-label="빠른 문의">
      <a href="${tel(S.phone)}">${ICON.phone} 전화</a>
      ${S.naverTalk ? `<a class="talk" href="${S.naverTalk}" target="_blank" rel="noopener">${ICON.chat} 톡톡 문의</a>`
        : S.kakao ? `<a class="kakao" href="${S.kakao}" target="_blank" rel="noopener">${ICON.chat} 카톡</a>`
        : `<a href="contact.html#location">${ICON.cal} 오시는 길</a>`}
      ${S.naverBooking ? `<a class="main" href="${S.naverBooking}" target="_blank" rel="noopener">${ICON.cal} 예약하기</a>`
        : `<a class="main" href="${contactLink(page)}">${ICON.msg} 예약 문의</a>`}
    </div>`;
  }

  /* 문의 수단 버튼 (네이버 톡톡 / 카카오톡) */
  function chatButtons(cls = "") {
    return (S.naverTalk ? `<a class="btn btn-talk ${cls}" href="${S.naverTalk}" target="_blank" rel="noopener">${ICON.chat} 네이버 톡톡 문의</a>` : "")
      + (S.kakao ? `<a class="btn btn-kakao ${cls}" href="${S.kakao}" target="_blank" rel="noopener">${ICON.chat} 카카오톡 상담</a>` : "");
  }

  function contactLink(key) {
    return catByKey(key) ? `contact.html?type=${key}` : "contact.html";
  }

  /* ---------------- 분야 탭 (분야 페이지 상단) ---------------- */
  $$("[data-cat-tabs]").forEach((el) => {
    // 가격 페이지에서는 탭을 누르면 같은 페이지의 해당 가격표로 이동
    el.outerHTML = `<nav class="cat-tabs" aria-label="촬영 분야"><div class="wrap">${CATS.map((c) =>
      `<a href="${page === "price" ? "#price-" + c.key : c.page}" class="${c.key === page ? "active" : ""}">${c.name}</a>`).join("")}</div></nav>`;
  });
  const activeTab = $(".cat-tabs a.active");
  if (activeTab) { const box = activeTab.parentElement; box.scrollLeft = activeTab.offsetLeft - (box.clientWidth - activeTab.clientWidth) / 2; }

  /* ---------------- 첫 화면 분야 카드 ---------------- */
  $$("[data-cat-grid]").forEach((el) => {
    el.innerHTML = CATS.map((c, i) => `
      <a class="cat-card reveal ${i === 0 ? "featured" : ""}" href="${c.page}">
        ${i === 0 ? '<span class="badge">대표 촬영</span>' : ""}
        <div class="thumb"><img src="${c.img}" alt="${c.name} 예시" loading="lazy" data-fallback="${c.name}"></div>
        <div class="body">
          <span class="en">${c.en}</span>
          <h3>${c.name}</h3>
          <p>${c.desc}</p>
          <span class="more">자세히 보기 →</span>
        </div>
      </a>`).join("");
  });

  /* ---------------- 문의 버튼 묶음 ---------------- */
  $$("[data-cta-buttons]").forEach((el) => {
    const key = el.dataset.ctaButtons, light = el.dataset.light !== undefined;
    el.classList.add("btn-row");
    // 네이버 예약이 있으면 '예약하기'가 네이버 예약으로, 없으면 문의 페이지로 연결
    const book = S.naverBooking
      ? `<a class="btn ${light ? "btn-white" : "btn-primary"}" href="${S.naverBooking}" target="_blank" rel="noopener">${ICON.cal} 네이버로 예약하기</a>`
      : `<a class="btn ${light ? "btn-white" : "btn-primary"}" href="${contactLink(key)}">${ICON.cal} 예약 문의하기</a>`;
    el.innerHTML = `${book}
      <a class="btn ${light ? "btn-ghost-white" : "btn-line"}" href="${tel(S.phone)}">${ICON.phone} ${S.phone}</a>
      ${chatButtons()}`;
  });

  /* 개별 '예약하기' 링크: 네이버 예약이 있으면 그쪽으로 */
  $$("[data-booking]").forEach((a) => {
    if (S.naverBooking) { a.href = S.naverBooking; a.target = "_blank"; a.rel = "noopener"; }
    else a.href = contactLink(a.dataset.booking);
  });

  /* ---------------- 가격표 ---------------- */
  function priceCards(key) {
    return `<div class="price-grid">${(PRICES[key] || []).map((p) => `
      <div class="price-card ${p.best ? "best" : ""}">
        <span class="pp">${p.people}</span>
        <h3>${p.name}</h3>
        ${p.was ? `<div class="was">${p.was}</div>` : ""}
        <div class="amount">${p.price}</div>
        <ul>${p.items.map((i) => `<li>${i}</li>`).join("")}</ul>
        <a class="btn ${p.best ? "btn-primary" : "btn-line"}" href="contact.html?type=${key}&item=${encodeURIComponent(p.name)}">이 상품으로 문의</a>
      </div>`).join("")}</div>`;
  }
  $$("[data-prices]").forEach((el) => {
    const key = el.dataset.prices;
    const notice = S.priceNotice ? `<p class="price-notice">${S.priceNotice}</p>` : "";
    if (key === "all") {
      el.innerHTML = notice + CATS.map((c) => `
        <div class="price-block" id="price-${c.key}">
          <h3>${c.name} <a href="${c.page}">사진 보기 →</a></h3>
          ${priceCards(c.key)}
        </div>`).join("");
    } else {
      el.innerHTML = notice + priceCards(key);
    }
  });

  /* ---------------- 갤러리 ---------------- */
  $$("[data-gallery]").forEach((el) => {
    const initial = el.dataset.gallery || "all";
    const limit = +el.dataset.limit || 0;
    const withFilter = el.dataset.filter !== undefined;
    let filterBar = null;
    if (withFilter) {
      filterBar = document.createElement("div");
      filterBar.className = "filters";
      filterBar.innerHTML = [["all", "전체"], ...CATS.map((c) => [c.key, c.name])]
        .map(([k, n]) => `<button type="button" data-k="${k}">${n}</button>`).join("");
      el.before(filterBar);
      filterBar.addEventListener("click", (e) => {
        const b = e.target.closest("button"); if (!b) return;
        render(b.dataset.k);
        history.replaceState(null, "", b.dataset.k === "all" ? "gallery.html" : `gallery.html?cat=${b.dataset.k}`);
      });
    }
    function render(cat) {
      let list = GALLERY.filter((g) => cat === "all" || g.cat === cat);
      if (limit) list = list.slice(0, limit);
      if (filterBar) $$("button", filterBar).forEach((b) => b.classList.toggle("on", b.dataset.k === cat));
      el.innerHTML = list.length
        ? list.map((g) => `<figure data-lb data-src="${g.src}" data-cap="${g.alt}"><img src="${g.src}" alt="${g.alt}" loading="lazy"><figcaption>${catByKey(g.cat)?.name || ""}</figcaption></figure>`).join("")
        : `<p class="gallery-empty">${catByKey(cat)?.name || ""} 샘플 사진을 준비하고 있습니다.<br>상담 시 실제 촬영 사진을 보여드려요.</p>`;
      el.classList.toggle("gallery", list.length > 0);
    }
    const q = new URLSearchParams(location.search).get("cat");
    render(withFilter && q && catByKey(q) ? q : initial);
  });

  /* ---------------- 사진 크게 보기 ---------------- */
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-label", "사진 크게 보기");
  lb.innerHTML = `<button class="lb-btn lb-close" aria-label="닫기">×</button><button class="lb-btn lb-prev" aria-label="이전 사진">‹</button><img alt=""><button class="lb-btn lb-next" aria-label="다음 사진">›</button><div class="lb-cap"></div>`;
  document.body.appendChild(lb);
  let lbList = [], lbIdx = 0;
  function showLb(i) {
    lbIdx = (i + lbList.length) % lbList.length;
    const f = lbList[lbIdx];
    $("img", lb).src = f.dataset.src || $("img", f).src;
    $("img", lb).alt = f.dataset.cap || "";
    $(".lb-cap", lb).textContent = f.dataset.cap || "";
    const multi = lbList.length > 1;
    $(".lb-prev", lb).style.display = $(".lb-next", lb).style.display = multi ? "" : "none";
  }
  document.addEventListener("click", (e) => {
    const f = e.target.closest("[data-lb]");
    if (!f) return;
    const group = f.closest("[data-gallery], .mosaic") || document;
    lbList = $$("[data-lb]", group);
    showLb(lbList.indexOf(f));
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  });
  function closeLb() { lb.classList.remove("open"); document.body.style.overflow = ""; }
  $(".lb-close", lb).onclick = closeLb;
  $(".lb-prev", lb).onclick = () => showLb(lbIdx - 1);
  $(".lb-next", lb).onclick = () => showLb(lbIdx + 1);
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") showLb(lbIdx - 1);
    if (e.key === "ArrowRight") showLb(lbIdx + 1);
  });
  let tx = null;
  lb.addEventListener("touchstart", (e) => (tx = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) showLb(lbIdx + (dx < 0 ? 1 : -1));
    tx = null;
  });

  /* ---------------- 사진이 아직 없으면 '준비 중' 자리 표시 ---------------- */
  function toPlaceholder(img) {
    // images 폴더에 해당 사진 파일이 없을 때, 빈칸 대신 분야 이름이 적힌 디자인 타일을 보여줌
    const label = img.dataset.fallback || "사랑이야기";
    const cat = CATS.find((c) => c.name === label);
    const d = document.createElement("div");
    d.className = "ph tile";
    d.setAttribute("role", "img");
    d.setAttribute("aria-label", label);
    d.innerHTML = `${ICON.camera}<b>${label}</b>${cat ? `<small>${cat.en.toUpperCase()}</small>` : ""}`;
    d.style.cssText = img.style.cssText;
    if (img.closest(".split-media")) d.style.borderRadius = "var(--radius)";
    const fig = img.closest("[data-lb]");
    if (fig) { fig.removeAttribute("data-lb"); fig.style.cursor = "default"; }
    img.replaceWith(d);
  }
  $$("img[data-fallback]").forEach((img) => {
    if (img.complete && img.naturalWidth === 0) toPlaceholder(img);
    else img.addEventListener("error", () => toPlaceholder(img));
  });

  /* ---------------- 기본 정보 채우기 ---------------- */
  $$("[data-studio]").forEach((el) => {
    const k = el.dataset.studio;
    if (k === "phone-link") { el.href = tel(S.phone); el.textContent = S.phone; }
    else if (k === "hours") el.innerHTML = `<div class="hours-table">${S.hours.map((h) => `<div><span>${h[0]}</span><span>${h[1]}</span></div>`).join("")}</div>`;
    else if (S[k] !== undefined) el.textContent = S[k];
  });

  /* ---------------- 네이버 방문자 리뷰 요약 ---------------- */
  $$("[data-reviews]").forEach((el) => {
    const R = S.review;
    if (!R) { el.remove(); return; }
    const max = Math.max(...R.keywords.map((k) => k[1]));
    el.innerHTML = `
      <div class="review-score">
        <div class="score"><b>★ ${R.score}</b><span>네이버 방문자 리뷰 ${R.count}건</span></div>
        <small>${R.asOf}</small>
        ${S.naverPlace ? `<a class="btn btn-line" href="${S.naverPlace}" target="_blank" rel="noopener">리뷰 전체 보기</a>` : ""}
      </div>
      <ul class="review-bars">${R.keywords.map(([t, n]) => `
        <li><span class="t">"${t}"</span><span class="bar"><i style="width:${Math.round((n / max) * 100)}%"></i></span><span class="n">${n}</span></li>`).join("")}
      </ul>`;
  });

  /* ---------------- 지도 ---------------- */
  $$("[data-map]").forEach((el) => {
    const q = encodeURIComponent(S.mapSearch);
    const pin = S.mapLat && S.mapLng ? `${S.mapLat},${S.mapLng}` : q;
    el.innerHTML = `
      <iframe class="map-frame" title="${S.name} 위치 지도" loading="lazy" src="https://maps.google.com/maps?q=${pin}&z=17&output=embed"></iframe>
      <div class="btn-row" style="margin-top:14px">
        <a class="btn btn-naver" style="flex:1" href="${S.naverPlace || `https://map.naver.com/p/search/${q}`}" target="_blank" rel="noopener">네이버 지도로 보기</a>
        <a class="btn btn-kakao" style="flex:1" href="https://map.kakao.com/?q=${q}" target="_blank" rel="noopener">카카오맵으로 보기</a>
      </div>`;
  });

  /* ---------------- 예약 문의 양식 ---------------- */
  const form = $("#inquiry");
  if (form) {
    const chips = $("#type-chips");
    chips.innerHTML = CATS.map((c) => `<label><input type="radio" name="type" value="${c.name}" required><span>${c.name}</span></label>`).join("");
    const params = new URLSearchParams(location.search);
    const pre = catByKey(params.get("type"));
    if (pre) $(`input[value="${pre.name}"]`, chips).checked = true;
    if (params.get("item")) form.memo.value = `[${params.get("item")}] 상품 문의드립니다.\n`;
    const d = new Date(); d.setDate(d.getDate() + 1);
    form.date.min = d.toISOString().slice(0, 10);

    function buildText() {
      const f = new FormData(form);
      return [
        `[${S.name} 예약 문의]`,
        `성함: ${f.get("name") || ""}`,
        `연락처: ${f.get("phone") || ""}`,
        `촬영 종류: ${f.get("type") || ""}`,
        `인원: ${f.get("people") || ""}`,
        `희망 날짜: ${f.get("date") || "미정"} ${f.get("time") || ""}`,
        f.get("memo") ? `요청 사항: ${f.get("memo")}` : "",
      ].filter(Boolean).join("\n");
    }
    function toast(msg) {
      let t = $(".toast");
      if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
      t.textContent = msg; t.classList.add("show");
      clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2600);
    }
    async function copy(text) {
      try { await navigator.clipboard.writeText(text); return true; }
      catch { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); const ok = document.execCommand("copy"); ta.remove(); return ok; }
    }
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // 보낼 수 있는 방법을 설정(config.js)에 따라 자동으로 버튼으로 만듦
    const channels = [];
    if (S.mobile && isMobile) channels.push({ id: "sms", label: "문자로 예약 문의 보내기", cls: "btn-primary" });
    if (S.naverTalk) channels.push({ id: "talk", label: "네이버 톡톡으로 문의 보내기", cls: channels.length ? "btn-talk" : "btn-naver" });
    if (S.kakao) channels.push({ id: "kakao", label: "카카오톡으로 문의 보내기", cls: "btn-kakao" });
    if (!channels.length) channels.push({ id: "copy", label: "문의 내용 복사하기", cls: "btn-primary" });

    const actions = $("#form-actions");
    actions.innerHTML = channels.map((c) => `<button class="btn ${c.cls}" type="submit" data-ch="${c.id}">${c.id === "sms" ? ICON.msg : ICON.chat} ${c.label}</button>`).join("")
      + `<a class="btn btn-line" href="${tel(S.phone)}">${ICON.phone} 전화로 바로 문의 ${S.phone}</a>`;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const ch = e.submitter?.dataset.ch || channels[0].id;
      const text = buildText();
      if (ch === "sms") {
        const sep = /iPhone|iPad|iPod/i.test(navigator.userAgent) ? "&" : "?";
        location.href = `sms:${S.mobile.replace(/[^0-9]/g, "")}${sep}body=${encodeURIComponent(text)}`;
        return;
      }
      await copy(text);
      if (ch === "talk" || ch === "kakao") {
        toast(`문의 내용이 복사되었어요. ${ch === "talk" ? "네이버 톡톡" : "카카오톡"} 대화창에 붙여넣기 해주세요.`);
        const url = ch === "talk" ? S.naverTalk : S.kakao;
        setTimeout(() => window.open(url, "_blank", "noopener"), 900);
      } else {
        toast(`문의 내용이 복사되었어요. ${S.phone} 로 전화 주세요.`);
      }
    });
    const help = $("#form-help");
    if (help) help.textContent = channels[0].id === "sms"
      ? "버튼을 누르면 입력하신 내용이 담긴 문자 창이 열립니다. 전송만 눌러주세요."
      : channels[0].id === "copy"
        ? "문의 내용을 복사한 뒤 전화로 알려주세요."
        : "버튼을 누르면 적으신 내용이 복사되고 대화창이 열려요. 대화창에 붙여넣기(길게 누르기 → 붙여넣기) 후 보내주세요.";
  }

  /* ---------------- 스크롤하면 부드럽게 나타나기 ---------------- */
  const io = "IntersectionObserver" in window ? new IntersectionObserver((ents) => {
    ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 }) : null;
  $$(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
})();

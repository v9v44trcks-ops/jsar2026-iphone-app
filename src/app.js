(function () {
  const { sessions, presentations, glossary, sessionTerms, paperNotes = {} } = window.JSAR_DATA;
  const storageKey = "jsar-2026-iphone-notes-v1";
  const sessionById = new Map(sessions.map((session) => [session.id, session]));
  const glossaryByTerm = new Map(glossary.map((entry) => [entry.term, entry]));
  const noteFields = [
    ["concept", "疾患概念"],
    ["imaging", "画像所見"],
    ["pathology", "病理所見"],
    ["other", "その他"]
  ];

  const state = {
    kind: "all",
    day: "all",
    query: "",
    favoritesOnly: false,
    notes: loadNotes()
  };

  const elements = {
    stats: document.querySelector("#stats"),
    search: document.querySelector("#search-input"),
    kindButtons: Array.from(document.querySelectorAll("[data-kind]")),
    dayButtons: Array.from(document.querySelectorAll("[data-day]")),
    favoritesOnly: document.querySelector("#favorites-only"),
    list: document.querySelector("#presentation-list"),
    template: document.querySelector("#presentation-template"),
    exportMd: document.querySelector("#export-md"),
    exportJson: document.querySelector("#export-json"),
    importJson: document.querySelector("#import-json"),
    copyJson: document.querySelector("#copy-json"),
    importPaste: document.querySelector("#import-paste"),
    importPasteButton: document.querySelector("#import-paste-button"),
    transferStatus: document.querySelector("#transfer-status")
  };

  function loadNotes() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch {
      return {};
    }
  }

  function saveNotes() {
    localStorage.setItem(storageKey, JSON.stringify(state.notes));
    updateStats();
  }

  function noteFor(id) {
    if (!state.notes[id]) {
      state.notes[id] = { favorite: false, concept: "", imaging: "", pathology: "", other: "" };
    }
    const note = state.notes[id];
    note.favorite = Boolean(note.favorite);
    noteFields.forEach(([field]) => {
      if (typeof note[field] !== "string") note[field] = "";
    });
    return note;
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFKC")
      .replace(/\s+/g, "");
  }

  function itemKind(item) {
    return item.id.slice(0, 1);
  }

  function filteredItems() {
    const q = normalize(state.query);
    return presentations.filter((item) => {
      const session = sessionById.get(item.sessionId);
      const note = noteFor(item.id);
      const text = normalize([item.id, item.title, item.speaker, item.time, session?.title, session?.category].join(" "));
      if (state.kind !== "all" && itemKind(item) !== state.kind) return false;
      if (state.day !== "all" && session?.day !== state.day) return false;
      if (state.favoritesOnly && !note.favorite) return false;
      if (q && !text.includes(q)) return false;
      return true;
    });
  }

  function termsFor(item) {
    const session = sessionById.get(item.sessionId);
    const haystack = normalize(`${item.title} ${session?.title} ${session?.category}`);
    const matched = glossary.filter((entry) =>
      entry.aliases.some((alias) => haystack.includes(normalize(alias)))
    );
    const defaults = (sessionTerms[session?.category] || [])
      .map((term) => glossaryByTerm.get(term))
      .filter(Boolean);
    const seen = new Set();
    return [...matched, ...defaults].filter((entry) => {
      if (seen.has(entry.term)) return false;
      seen.add(entry.term);
      return true;
    });
  }

  function render() {
    const items = filteredItems();
    elements.list.innerHTML = "";
    let currentSession = "";

    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "条件に合う演題がありません。";
      elements.list.appendChild(empty);
      updateStats();
      return;
    }

    items.forEach((item) => {
      const session = sessionById.get(item.sessionId);
      if (currentSession !== item.sessionId) {
        currentSession = item.sessionId;
        const divider = document.createElement("div");
        divider.className = "session-divider";
        divider.textContent = `${session.dayLabel} ${session.time} ${session.title}`;
        elements.list.appendChild(divider);
      }
      elements.list.appendChild(renderCard(item, session));
    });
    updateStats();
  }

  function renderCard(item, session) {
    const node = elements.template.content.firstElementChild.cloneNode(true);
    const note = noteFor(item.id);
    node.dataset.itemId = item.id;
    node.querySelector(".code").textContent = item.id;
    node.querySelector(".time").textContent = item.time;
    node.querySelector(".session-name").textContent = session.category;
    node.querySelector(".title").textContent = item.title;
    node.querySelector(".speaker").textContent = `${item.speaker} / p.${item.page}`;

    const favorite = node.querySelector(".favorite input");
    favorite.checked = note.favorite;

    node.querySelectorAll(".note-field").forEach((textarea) => {
      textarea.value = note[textarea.dataset.field] || "";
    });

    renderLiterature(node, item);
    renderGlossary(node, item);
    return node;
  }

  function renderLiterature(node, item) {
    const literature = paperNotes[item.id];
    const panel = node.querySelector(".literature-panel");
    const content = node.querySelector(".literature-content");
    if (!literature) {
      panel.hidden = true;
      return;
    }
    const theme = document.createElement("p");
    theme.className = "literature-theme";
    theme.textContent = literature.theme;
    const summary = document.createElement("p");
    summary.className = "literature-summary";
    summary.textContent = literature.summary;
    const refs = document.createElement("ol");
    refs.className = "literature-refs";
    literature.refs.forEach((ref) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = ref.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = ref.title;
      li.appendChild(link);
      if (ref.note) {
        const small = document.createElement("small");
        small.textContent = ref.note;
        li.appendChild(small);
      }
      refs.appendChild(li);
    });
    content.append(theme, summary, refs);
  }

  function renderGlossary(node, item) {
    const list = node.querySelector(".glossary-list");
    termsFor(item).forEach((entry, index) => {
      const detail = document.createElement("details");
      detail.className = "glossary-item";
      detail.open = index === 0;
      detail.innerHTML = `
        <summary>
          <span>${entry.term}</span>
          <small>${entry.category}</small>
        </summary>
        <dl>
          <dt>概要</dt>
          <dd>${entry.definition}</dd>
          <dt>画像で見る点</dt>
          <dd>${entry.imaging}</dd>
          <dt>聞きどころ</dt>
          <dd>${entry.listenFor}</dd>
        </dl>
      `;
      list.appendChild(detail);
    });
  }

  function updateStats() {
    const visible = filteredItems().length;
    const favorite = presentations.filter((item) => noteFor(item.id).favorite).length;
    const memo = presentations.filter((item) => {
      const note = noteFor(item.id);
      return noteFields.some(([field]) => note[field].trim());
    }).length;
    elements.stats.textContent = `${visible}件 / 気になる${favorite} / メモ${memo}`;
  }

  function exportMarkdown() {
    const lines = ["# JSAR 2026 iPhone演題メモ", ""];
    presentations.forEach((item) => {
      const note = noteFor(item.id);
      if (!note.favorite && !noteFields.some(([field]) => note[field].trim())) return;
      lines.push(`## ${note.favorite ? "★ " : ""}${item.id} ${item.title}`);
      lines.push(`- 演者: ${item.speaker}`);
      lines.push(`- 時間: ${item.time}`);
      noteFields.forEach(([field, label]) => {
        if (note[field]) lines.push(`- ${label}: ${note[field].replace(/\n/g, "\n  ")}`);
      });
      lines.push("");
    });
    downloadText("jsar2026-iphone-memo.md", lines.join("\n"));
  }

  function exportJson() {
    downloadText("jsar2026-iphone-backup.json", JSON.stringify(state.notes, null, 2));
  }

  function setTransferStatus(message) {
    if (elements.transferStatus) elements.transferStatus.textContent = message;
  }

  function restoreNotesFromText(text) {
    try {
      const imported = JSON.parse(text);
      if (!imported || typeof imported !== "object" || Array.isArray(imported)) {
        throw new Error("Invalid backup");
      }
      state.notes = imported;
      saveNotes();
      render();
      setTransferStatus("復元しました。");
      return true;
    } catch {
      setTransferStatus("復元できませんでした。バックアップ内容を確認してください。");
      alert("バックアップJSONを読み込めませんでした。");
      return false;
    }
  }

  async function copyJsonBackup() {
    const text = JSON.stringify(state.notes, null, 2);
    try {
      await navigator.clipboard.writeText(text);
      setTransferStatus("バックアップ内容をコピーしました。");
    } catch {
      if (elements.importPaste) {
        elements.importPaste.value = text;
        elements.importPaste.focus();
        elements.importPaste.select();
      }
      setTransferStatus("下の欄にバックアップ内容を表示しました。長押しでコピーできます。");
    }
  }

  function downloadText(filename, text) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
  });

  elements.kindButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.kind = button.dataset.kind;
      elements.kindButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      render();
    });
  });

  elements.dayButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.day = button.dataset.day;
      elements.dayButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      render();
    });
  });

  elements.favoritesOnly.addEventListener("change", (event) => {
    state.favoritesOnly = event.target.checked;
    render();
  });

  elements.list.addEventListener("change", (event) => {
    const card = event.target.closest("[data-item-id]");
    if (!card) return;
    const note = noteFor(card.dataset.itemId);
    if (event.target.matches(".favorite input")) {
      note.favorite = event.target.checked;
      saveNotes();
      return;
    }
  });

  elements.list.addEventListener("input", (event) => {
    const card = event.target.closest("[data-item-id]");
    if (!card || !event.target.matches("textarea")) return;
    const note = noteFor(card.dataset.itemId);
    note[event.target.dataset.field] = event.target.value;
    saveNotes();
  });

  elements.exportMd.addEventListener("click", exportMarkdown);
  elements.exportJson.addEventListener("click", exportJson);
  elements.copyJson?.addEventListener("click", copyJsonBackup);
  elements.importPasteButton?.addEventListener("click", () => {
    restoreNotesFromText(elements.importPaste?.value || "");
  });
  elements.importJson.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      restoreNotesFromText(await file.text());
    } catch {
      alert("バックアップJSONを読み込めませんでした。");
    } finally {
      event.target.value = "";
    }
  });

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  render();
})();

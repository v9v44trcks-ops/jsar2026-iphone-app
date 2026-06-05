(function () {
  const data = window.JSAR_DATA;
  if (!data || data.presentations.some((item) => item.id === "L-1")) return;

  data.sessions.push(
    { id: "lOpen", day: "2026-06-05", dayLabel: "6/5 金", time: "08:25-08:30", title: "開会の辞", category: "運営・イベント", range: "L-1" },
    { id: "lMS1", day: "2026-06-05", dayLabel: "6/5 金", time: "09:25-10:15", title: "モーニングセミナー1 AIによって広がるCT・MRI腹部画像診断", category: "講演・AI画像再構成", range: "L-2〜L-3" },
    { id: "lGeneral1", day: "2026-06-05", dayLabel: "6/5 金", time: "11:20-11:50", title: "社員総会", category: "運営・イベント", range: "L-4" },
    { id: "lLS1", day: "2026-06-05", dayLabel: "6/5 金", time: "12:00-12:50", title: "ランチョンセミナー1 Deep Learningと共に歩む新しい腹部画像診断の未来", category: "講演・AI画像再構成", range: "L-5〜L-6" },
    { id: "lKeynote", day: "2026-06-05", dayLabel: "6/5 金", time: "13:00-14:00", title: "基調講演", category: "基調講演", range: "L-7〜L-8" },
    { id: "lSAR", day: "2026-06-05", dayLabel: "6/5 金", time: "14:10-14:40", title: "SARジョイントセッション", category: "講演・国際セッション", range: "L-9" },
    { id: "lEntertainment", day: "2026-06-05", dayLabel: "6/5 金", time: "14:40-14:55", title: "エンタメ", category: "運営・イベント", range: "L-10" },
    { id: "lTea1", day: "2026-06-05", dayLabel: "6/5 金", time: "15:05-15:55", title: "ティータイムセミナー1 エキスパートから学ぶ腹部領域の画像診断", category: "講演・腹部画像診断", range: "L-11〜L-12" },
    { id: "lEvening1", day: "2026-06-05", dayLabel: "6/5 金", time: "17:15-18:05", title: "イブニングセミナー1 腹部画像診断の実践知", category: "講演・膵/婦人科", range: "L-13〜L-14" },
    { id: "lMS2", day: "2026-06-06", dayLabel: "6/6 土", time: "08:55-09:45", title: "モーニングセミナー2 Siemens Healthineers MR/CT最前線", category: "講演・AI画像再構成", range: "L-15〜L-16" },
    { id: "lLS2", day: "2026-06-06", dayLabel: "6/6 土", time: "11:55-12:45", title: "ランチョンセミナー2 腹部腫瘍における自然退縮の画像と病理の対比", category: "講演・画像病理対比", range: "L-17" },
    { id: "lTea2", day: "2026-06-06", dayLabel: "6/6 土", time: "13:50-14:40", title: "ティータイムセミナー2 腹部腫瘍早期診断を支える先端画像診断", category: "講演・早期診断", range: "L-18〜L-19" },
    { id: "lUchida", day: "2026-06-06", dayLabel: "6/6 土", time: "14:50-15:20", title: "打田賞受賞講演・表彰・写真撮影", category: "講演・受賞講演", range: "L-20〜L-23" },
    { id: "lACAR", day: "2026-06-06", dayLabel: "6/6 土", time: "15:20-15:25", title: "ACAR2027告知", category: "運営・イベント", range: "L-24" },
    { id: "lQuizAward", day: "2026-06-06", dayLabel: "6/6 土", time: "15:25-15:35", title: "クイズ症例優秀者表彰", category: "運営・イベント", range: "L-25" },
    { id: "lJSAR", day: "2026-06-06", dayLabel: "6/6 土", time: "15:35-15:50", title: "JSAR総会", category: "運営・イベント", range: "L-26" },
    { id: "lEvening2", day: "2026-06-06", dayLabel: "6/6 土", time: "16:00-16:50", title: "イブニングセミナー2 上腹部MRIの最前線2026", category: "講演・MRI高速化", range: "L-27〜L-28" },
    { id: "lClose", day: "2026-06-06", dayLabel: "6/6 土", time: "17:50", title: "閉会の辞", category: "運営・イベント", range: "L-29" },
    { id: "lSocial", day: "2026-06-06", dayLabel: "6/6 土", time: "19:30-21:30", title: "情報交換会", category: "運営・イベント", range: "L-30" }
  );

  data.presentations.push(
    { id: "L-1", sessionId: "lOpen", time: "08:25-08:30", title: "開会の辞", speaker: "大会運営", page: 1 },
    { id: "L-2", sessionId: "lMS1", time: "09:25-10:15", title: "超解像DLRの腹部CT画像診断の現状と今後の展望", speaker: "南口貴世介（奈良県立医科大学 放射線診断・IVR学講座） / 座長: 楫靖 / 共催: キヤノンメディカルシステムズ株式会社", page: 2 },
    { id: "L-3", sessionId: "lMS1", time: "09:25-10:15", title: "DLR-MRIが再定義する上腹部MRI: 画質・効率・診断の新たなバランス", speaker: "田辺昌寛（山口大学大学院 医学系研究科 放射線医学講座） / 座長: 楫靖 / 共催: キヤノンメディカルシステムズ株式会社", page: 2 },
    { id: "L-4", sessionId: "lGeneral1", time: "11:20-11:50", title: "社員総会", speaker: "大会運営", page: 3 },
    { id: "L-5", sessionId: "lLS1", time: "12:00-12:50", title: "最新Deep Learning再構成による腹部CTの進化: Dual Energy画像を学習した新たなDL技術の臨床初期使用経験", speaker: "高橋正明（信州大学 医学部附属病院 放射線科） / 座長: 富山憲幸 / 共催: GEヘルスケア・ジャパン株式会社", page: 3 },
    { id: "L-6", sessionId: "lLS1", time: "12:00-12:50", title: "最先端Deep Learningが変える腹部MR画像: 進化する高画質と高速ワークフロー", speaker: "祖父江慶太郎（神戸大学医学部附属病院 放射線診断・IVR科） / 座長: 富山憲幸 / 共催: GEヘルスケア・ジャパン株式会社", page: 3 },
    { id: "L-7", sessionId: "lKeynote", time: "13:00-14:00", title: "分娩後・流産後異常出血の病態理解と画像診断戦略: PASとRPOCを中心に", speaker: "伊良波裕子（琉球大学大学院医学研究科 放射線診断治療学講座） / 座長: 藤井進也 / 共催: バイエル薬品株式会社", page: 3 },
    { id: "L-8", sessionId: "lKeynote", time: "13:00-14:00", title: "最新の肝胆膵外科治療: 進行・再発癌への挑戦", speaker: "楳田祐三（愛媛大学大学院医学系研究科 肝胆膵・乳腺外科学） / 座長: 藤井進也 / 共催: バイエル薬品株式会社", page: 3 },
    { id: "L-9", sessionId: "lSAR", time: "14:10-14:40", title: "SARジョイントセッション", speaker: "Christine Cooky O. Menias（Abdominal Radiology, Mayo Clinic College of Medicine and Science, USA） / 座長: 藤井進也、木戸晶", page: 3 },
    { id: "L-10", sessionId: "lEntertainment", time: "14:40-14:55", title: "エンタメ", speaker: "大会運営", page: 4 },
    { id: "L-11", sessionId: "lTea1", time: "15:05-15:55", title: "アップグレードのためのTips: 目的に応じた撮影プロトコル選択と被ばく最適化を再考する", speaker: "中村優子（広島大学大学院 医系科学研究科 放射線診断学研究室） / 座長: 赤羽正章 / 共催: ゲルベ・ジャパン株式会社", page: 4 },
    { id: "L-12", sessionId: "lTea1", time: "15:05-15:55", title: "症例から学ぶ腹部画像診断: 臨床医に刺さる読影Tips", speaker: "市川新太郎（山梨大学 放射線診断学講座） / 座長: 赤羽正章 / 共催: ゲルベ・ジャパン株式会社", page: 4 },
    { id: "L-13", sessionId: "lEvening1", time: "17:15-18:05", title: "早期膵がん診断の現状と課題: 押さえておくべきポイント", speaker: "井上大（恵寿総合病院 放射線科） / 座長: 藤永康成 / 共催: 富士製薬工業株式会社", page: 5 },
    { id: "L-14", sessionId: "lEvening1", time: "17:15-18:05", title: "症例から考える産婦人科画像診断の勘どころ", speaker: "木戸晶（富山大学医学部 放射線診断・治療学講座） / 座長: 藤永康成 / 共催: 富士製薬工業株式会社", page: 5 },
    { id: "L-15", sessionId: "lMS2", time: "08:55-09:45", title: "Deep Resolveで加速する膵の高精細MRIシーケンス", speaker: "角谷嘉亮（金沢医科大学 放射線医学教室） / 座長: 村上卓道 / 共催: シーメンスヘルスケア株式会社", page: 7 },
    { id: "L-16", sessionId: "lMS2", time: "08:55-09:45", title: "NAEOTOM Alpha.Primeの初期使用経験: Oncology領域", speaker: "三宅基隆（国立がん研究センター中央病院 放射線診断科） / 座長: 村上卓道 / 共催: シーメンスヘルスケア株式会社", page: 7 },
    { id: "L-17", sessionId: "lLS2", time: "11:55-12:45", title: "腹部腫瘍における自然退縮の画像と病理の対比: この摩訶不思議な現象の謎に迫る", speaker: "小山貴（倉敷中央病院 放射線診断科） / 座長: 坪山尚寛 / 共催: GEヘルスケアファーマ株式会社", page: 9 },
    { id: "L-18", sessionId: "lTea2", time: "13:50-14:40", title: "小径膵癌をどう捉えるか: Dual-energy CTによる画像診断", speaker: "野田佳史（岐阜大学大学院医学系研究科 先端画像開発講座） / 座長: 陣崎雅弘 / 共催: ブラッコ・ジャパン株式会社", page: 10 },
    { id: "L-19", sessionId: "lTea2", time: "13:50-14:40", title: "早期前立腺癌の臨床マネージメントにおけるMRIの活用", speaker: "玉田勉（川崎医科大学 放射線診断学教室） / 座長: 陣崎雅弘 / 共催: ブラッコ・ジャパン株式会社", page: 10 },
    { id: "L-20", sessionId: "lUchida", time: "14:50-15:20", title: "打田賞 口演（消化器系部門）: von Hippel-Lindau病患者に発生し、消化管出血を来した稀な膵腫瘤の一例", speaker: "子安翔（京都大学医学部附属病院 放射線部） / 座長: 陣崎雅弘、藤井進也", page: 10 },
    { id: "L-21", sessionId: "lUchida", time: "14:50-15:20", title: "打田賞 口演（泌尿生殖器系部門）: 子宮体癌の筋層浸潤との鑑別を要した子宮魚鱗癬の一例", speaker: "藤井樹矢（市立青梅総合医療センター 放射線科） / 座長: 陣崎雅弘、藤井進也", page: 10 },
    { id: "L-22", sessionId: "lUchida", time: "14:50-15:20", title: "打田賞 展示（消化器系部門）: 乳癌びまん性肝転移によるMetastatic carcinomatous cirrhosisの1例", speaker: "小森隆弘（金沢大学附属病院 放射線科） / 座長: 陣崎雅弘、藤井進也", page: 10 },
    { id: "L-23", sessionId: "lUchida", time: "14:50-15:20", title: "打田賞 展示（泌尿生殖器系部門）: 分葉状頸管腺過形成の経過観察中にT2WI所見から子宮頸部胃型腺癌疑いを指摘しえた2例", speaker: "新山貴仁（富山大学医学部 放射線診断・治療学講座） / 座長: 陣崎雅弘、藤井進也", page: 10 },
    { id: "L-24", sessionId: "lACAR", time: "15:20-15:25", title: "ACAR2027告知", speaker: "大会運営", page: 10 },
    { id: "L-25", sessionId: "lQuizAward", time: "15:25-15:35", title: "クイズ症例優秀者表彰", speaker: "大会運営", page: 10 },
    { id: "L-26", sessionId: "lJSAR", time: "15:35-15:50", title: "JSAR総会", speaker: "大会運営", page: 10 },
    { id: "L-27", sessionId: "lEvening2", time: "16:00-16:50", title: "SmartSpeed Preciseがもたらす上腹部画像診断の新展開", speaker: "尾崎公美（浜松医科大学 放射線診断学講座） / 座長: 福倉良彦 / 共催: 株式会社フィリップス・ジャパン", page: 11 },
    { id: "L-28", sessionId: "lEvening2", time: "16:00-16:50", title: "肝MRIの進歩2026: サンプリング法の工夫とSmartSpeed Preciseによる3D/DWIへの展開", speaker: "小坂一斗（金沢大学 放射線科） / 座長: 福倉良彦 / 共催: 株式会社フィリップス・ジャパン", page: 11 },
    { id: "L-29", sessionId: "lClose", time: "17:50", title: "閉会の辞", speaker: "大会運営", page: 1 },
    { id: "L-30", sessionId: "lSocial", time: "19:30-21:30", title: "情報交換会", speaker: "大会運営", page: 1 }
  );

  Object.assign(data.sessionTerms, {
    "講演・AI画像再構成": ["DLR", "Dual-energy CT", "MRI高速化", "造影CT", "MRI"],
    "基調講演": ["PAS", "RPOC", "肝胆膵外科治療", "造影CT", "MRI"],
    "講演・国際セッション": ["画像病理対比", "鑑別診断", "造影CT", "MRI"],
    "講演・腹部画像診断": ["被ばく最適化", "撮影プロトコル", "鑑別診断", "造影CT", "MRI"],
    "講演・膵/婦人科": ["早期膵癌", "婦人科画像診断", "DWI", "MRI", "造影CT"],
    "講演・画像病理対比": ["自然退縮", "画像病理対比", "鑑別診断"],
    "講演・早期診断": ["早期膵癌", "Dual-energy CT", "前立腺MRI", "MRI"],
    "講演・受賞講演": ["画像病理対比", "鑑別診断", "VHL", "分葉状頸管腺過形成"],
    "講演・MRI高速化": ["MRI高速化", "DWI", "上腹部MRI", "肝MRI"],
    "運営・イベント": ["学会メモ"]
  });

  const extraGlossary = [
    { term: "DLR", aliases: ["DLR", "Deep Learning", "Deep Learning Reconstruction", "Deep Resolve", "SmartSpeed", "AI"], category: "画像再構成", definition: "深層学習を用いた画像再構成・ノイズ低減・高解像化の総称。CT/MRIで画質、撮像時間、線量、診断能のバランスを変えうる。", imaging: "低コントラスト分解能、空間分解能、微小病変の見え方、従来再構成との違いを確認する。", listenFor: "画質改善が診断能、撮像時間短縮、被ばく低減のどれに効いたか。" },
    { term: "Dual-energy CT", aliases: ["Dual Energy", "Dual-energy", "DECT", "二重エネルギー", "スペクトラルCT"], category: "CT", definition: "異なるX線エネルギー情報から物質分離や仮想単色X線画像、ヨード密度画像などを得るCT技術。", imaging: "ヨードマップ、仮想単色X線画像、仮想非造影、低keV画像で病変コントラストが改善するかを見る。", listenFor: "通常CTで見えにくい小病変をどう補ったか。" },
    { term: "PAS", aliases: ["PAS", "癒着胎盤", "placenta accreta", "胎盤癒着"], category: "産科画像", definition: "Placenta accreta spectrumの略。胎盤が子宮筋層へ異常付着・浸潤する病態群で、分娩時大量出血の重要な原因。", imaging: "胎盤内lacunae、子宮筋層菲薄化、子宮漿膜膀胱境界の不整、異常血管を確認する。", listenFor: "出血リスク評価に画像がどう寄与するか。" },
    { term: "RPOC", aliases: ["RPOC", "retained products", "遺残胎盤", "胎盤遺残", "妊娠産物遺残"], category: "産婦人科", definition: "分娩後・流産後に子宮内へ妊娠産物が残存し、出血や感染の原因となる状態。", imaging: "子宮内腫瘤、血流豊富な内膜病変、筋層との境界、AVM様血流との鑑別を評価する。", listenFor: "PASや動静脈奇形との鑑別点。" },
    { term: "早期膵癌", aliases: ["早期膵癌", "小径膵癌", "膵癌早期診断", "膵の高精細MRI"], category: "膵", definition: "小径で直接描出が難しい膵癌を、主膵管狭窄・尾側膵管拡張・限局性膵萎縮などの間接所見から拾う考え方が重要。", imaging: "膵管変化、限局性萎縮、DWI、造影早期相、EUS適応につながる微細な異常を確認する。", listenFor: "直接所見と間接所見のどちらが診断契機になったか。" },
    { term: "学会メモ", aliases: ["総会", "表彰", "開会", "閉会", "情報交換会", "ACAR"], category: "運営", definition: "学会中に確認したい予定、連絡事項、あとで対応することを残すためのメモ枠。", imaging: "画像所見ではなく、時間、場所、連絡事項、後で確認するPDFページを記録する。", listenFor: "予定変更、重要告知、後で調べたい演題番号。" }
  ];
  extraGlossary.forEach((entry) => {
    if (!data.glossary.some((existing) => existing.term === entry.term)) data.glossary.push(entry);
  });

  const dayRank = (day) => ({ "2026-06-05": 1, "2026-06-06": 2, both: 3 }[day] || 9);
  const timeRank = (time) => {
    const match = String(time || "").match(/^(\d{1,2}):(\d{2})/);
    if (!match) return 9999;
    return Number(match[1]) * 60 + Number(match[2]);
  };
  const idRank = (id) => {
    const match = String(id || "").match(/^([A-Z])-?(\d+)/);
    const kindOrder = { L: 1, O: 2, P: 3, Q: 4 };
    if (!match) return 999999;
    return (kindOrder[match[1]] || 9) * 1000 + Number(match[2]);
  };
  data.sessions.sort((a, b) =>
    dayRank(a.day) - dayRank(b.day) ||
    timeRank(a.time) - timeRank(b.time) ||
    String(a.title).localeCompare(String(b.title), "ja")
  );
  const sessionOrder = new Map(data.sessions.map((session, index) => [session.id, index]));
  data.presentations.sort((a, b) =>
    (sessionOrder.get(a.sessionId) ?? 9999) - (sessionOrder.get(b.sessionId) ?? 9999) ||
    timeRank(a.time) - timeRank(b.time) ||
    idRank(a.id) - idRank(b.id)
  );
})();

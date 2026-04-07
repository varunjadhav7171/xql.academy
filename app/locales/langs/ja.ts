const dict = {
  nav: { appName: "XQLアカデミー", tagline: "学ぶ · 継続 · 勝つ", login: "ログイン", signup: "登録" },
  hero: { title1: "何でも学ぼう", title2: "毎日レベルアップ。", selectLanguage: "学びたい言語..." },
  kids: { tag: "子供向け", badge: "遊びながら進歩", title: "インタラクティブなトピック", desc: "子供たちが探求するのが好きなものすべて...", artTitle: "物語、音声、報酬、そして小さな勝利。", artDesc: "安全でカラフルな専用の子供向けビュー。", stat1Title: "5分", stat1Desc: "短時間のプレイ", stat2Title: "毎日", stat2Desc: "継続の星と報酬", stat3Title: "話す", stat3Desc: "聞いて、繰り返して、笑う" },
  kidsTopics: [
    { icon: "🔤", title: "ABCと単語", desc: "アルファベット、発音、基本的な語彙を学びます", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "数字と数学", desc: "楽しい視覚ゲームで数え、足し算、引き算をします", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "私たちの周りの世界", desc: "動物、自然、惑星、驚くべき科学的事実", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "芸術と創造性", desc: "色、形、描画、創造的な表現", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "お話の時間", desc: "読み取りと想像力を育てるインタラクティブな物語", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "話して学ぶ", desc: "言葉を発音し、話す自信を築きます", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "パズルと論理", desc: "思考と問題解決を鋭くする脳トレ", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "韻と歌", desc: "音楽、リズム、記憶の歌を通じて学びます", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "学生向け", badge: "集中した勢い", artTitle: "アクティブでモダンな学習スペース。", artDesc: "アニメーション化されたフィードバックによるシャープな学生体験。", stat1Title: "12", stat1Desc: "ガイド付きの科目", stat2Title: "迅速", stat2Desc: "復習ループ", stat3Title: "ライブ", stat3Desc: "進行状況バーと目標", title: "学校の科目をマスター", desc: "グレード1〜12向けの構造化されたレッスン。 クイズと説明で習得。", pill1: "試験対策", pill2: "アニメーションの進行", pill3: "高速復習" },
  studentsTopics: [
    { icon: "📐", title: "数学", desc: "代数、幾何、三角法、微積分", badge: "クラス6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "科学", desc: "物理、化学、生物を視覚的に", badge: "クラス6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "英語", desc: "文法、理解、書き取り、文学", badge: "クラス1-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "社会科", desc: "歴史、地理、公民、経済", badge: "クラス6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "コンピュータ科学", desc: "プログラミングの基礎、MS Office、デジタルスキル", badge: "クラス6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "実験実習", desc: "ステップバイステップのガイド付き仮想実験", badge: "クラス9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "作文", desc: "試験のための構造、語彙、書き取りスキル", badge: "クラス8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "言語", desc: "ヒンディー、サンスクリット、フランス語、地域言語", badge: "クラス1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "時事問題を含む予備、メイン、面接の準備", tag: "公務員", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "マハラシュトラ州公務員の完全準備", tag: "州公務員", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "医学入試のための生物、物理、化学", tag: "医学", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "IIT/NIT入試のための数学、物理、化学", tag: "工学", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "MBBS準備", desc: "医学生のための基礎と臨床知識", tag: "医学", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "工学", desc: "工学のコア科目 - CSE, ECE, 機械, 土木", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / 法", desc: "法入試のための法的推論、GK、英語", tag: "法", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "トップビジネススクール入試のための定量、言語、DILR", tag: "マネジメント", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "銀行 / IBPS", desc: "銀行試験のための推論、数学、英語", tag: "銀行", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / 防衛", desc: "軍隊のための数学、GK、SSB準備", tag: "防衛", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "PSU / M.Techのための高度な工学と科学", tag: "大学院", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "会計、税務、金融の専門コース", tag: "金融", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "競争試験", title: "最も難しい試験を突破", desc: "構造化されたパスや模擬テストでの競争試験の準備。", stat1Title: "12コース", stat1Desc: "複数のパス", stat2Title: "模擬テスト", stat2Desc: "プレッシャーの中の練習", stat3Title: "ランク付け", stat3Desc: "明確なフィードバック", pill1: "毎日のテスト", pill2: "ランク予測", pill3: "シラバストラッカー", floatingChips: ["AIR 184", "98 %ile 目標", "次のモック 07:30"] },
  scene: { today: "今日", streak: "連続", days: "日間", revision: "復習", grade: "A+", score: "スコア", mockClear: "模試合格", hi: "こんにちは", air: "順位" }
};
export default dict;

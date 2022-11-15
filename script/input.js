const part = ["他","名","動","形","副","前","接","代","助"];
//const _n = ["英単語","日本語",テスト範囲である0or1,"下のやつ","英語"]
const _0 = ["英語","日本語"];
const _1 = ["spaghetti","スパゲッティ",0];
const _2 = ["go swimming","泳ぎに行く",0];
const _3 = ["movie","映画",0];
const _4 = ["allergy","アレルギー",0];
const _5 = ["San Francisco","サンフランシスコ",1];
const _6 = ["hurry","急ぐ",0,"hurry up","急ぐ"];
const _7 = ["Spain","スペイン",1];

const _400 = ['valley ','谷',0];
const _401 = ['wind ','風',0];
const _402 = ['princess ','王女､姫',0];
const _403 = ['aware ','～に気づいて',0,'become aware of ','～に気がつくようになる'];
const _404 = ['importance ','大切さ､重要性',0];
const _405 = ['secondly ','第二に､次に',0];
const _406 = ['describe ','～を描写する',0];
const _407 = ['complex ','複雑な',0];
const _408 = ['emotion ','感情',0];
const _409 = ['mysterious ','神秘的な､不思議な',0];
const _410 = ['courage ','勇気',0];
const _411 = ['fear ','恐れ､不安',0];
const _412 = ['attractive ','魅力的な',0];
const _413 = ['variety ','変化に富むこと､多様性',0,'a variety of ','様々な～'];
const _414 = ['scary ','恐ろしい､怖い',0];
const _415 = ['scene ','(劇などの)1場面',0];
const _416 = ['strange ','奇妙な､見知らぬ',0];
const _417 = ['heroine ','主人公､ヒロイン',0];
const _418 = ['confused ','混乱して､まごついて',0];
const _419 = ['on the other hand ','一方',0];
const _420 = ['curious ','好奇心旺盛な',0];
const _421 = ['point of view ','視点､観点',0];
const _422 = ['discussion ','討論､議論',0];
const _423 = ['cartoon ','漫画､アニメ',0];
const _424 = ['knit ','編み物をする､～を編む',0];
const _425 = ['crossword ','クロスワード',0];
const _426 = ['plastic model ','プラモデル',0];
const _427 = ['star ','星',0];
const _428 = ['perform ','～を演じる､演奏する',0];
const _429 = ['trick ','手品､芸当､トリック',0];
const _430 = ['DVD ','DVD',1];
const _431 = ['patch work ','パッチワーク',1];
const _432 = ['cloth ','布',0];
const _433 = ['circle ','円',0];
const _434 = ['rectangle ','長方形',0];
const _435 = ['tariangle ','三角形',0];
const _436 = ['diamond ','ひし形',0];
const _437 = ['oval ','楕円形､卵型',0];
const _438 = ['ellipse ','楕円形､長円',0];
const _439 = ['wooden ','木製の',0];
const _440 = ['chopstick ','箸',0];
const _441 = ['aboard ','乗って',0,'Welcome aboard. ','ご乗船(ご搭乗)ありがとうございます'];
const _442 = ['seen ','seeの過去分詞',0];
const _443 = ['ferry ','フェリー',0];
const _444 = ['drunk ','drinkの過去分詞',0];
const _445 = ['eaten ','eatの過去分詞',0];
const _446 = ['shooting star ','流れ星',0];
const _447 = ['taken ','takeの過去分詞',0];
const _448 = ['Pluto ','冥王星',0];

const _449 = ['discover ','～を発見する ',0];
const _450 = ['astronomer ','天文学者 ',0];
const _451 = ['spoken ','speak の過去分詞 ',0];
const _452 = ['e-book ','電子書籍 ',0];
const _453 = ['download ','～をダウンロードする ',0];
const _454 = ['for free ','無料で ',0];
const _455 = ['build ','作る､組み立てる ',0];
const _456 = ['built ','build の過去形 ',0];
const _457 = ['complete ','～を完成させる ',0];
const _458 = ['until ','～までずっと ',0];
const _459 = ['put together ','～を組み立てる ',0];
const _460 = ['cover ','～を覆う､包む ',0];
const _461 = ['layer ','層 ',0];
const _462 = ['copper ','銅 ',0];
const _463 = ['shiny ','輝く､ピカピカな ',0];
const _464 = ['bronze ','赤褐色の､青銅色の ',0];
const _465 = ['gradually ','徐々に､だんだん ',0];
const _466 = ['over time ','時がたつにつれて､やがて ',0];
const _467 = ['steal ','～を盗む ',0];
const _468 = ['stolen ','steal の過去分詞 ',0];
const _469 = ['purse ','小銭入れ､財布､ハンドバッグ ',0];
const _470 = ['restroom ','《公共の》トイレ､お手洗い ',0];
const _471 = ['clerk ','店員 ',0];
const _472 = ['instant ','即席の､即座の ',0];
const _473 = ['invent ','～を発明する､考案する ',0];
const _474 = ['whom ','誰を(who の目的格) ',0];
const _475 = ['hall ','会館､ホール ',0];
const _476 = ['fill ','～をいっぱいにする ',0];
const _477 = ['known ','know の過去分詞 ',0];
const _478 = ['surprised ','～に驚く ',0];
const _479 = ['caught ','catch の過去形 ',0];
const _480 = ['shock ','～に驚く､衝撃を受ける ',0];
const _481 = ['satisfy ','～に満足する ',0];
const _482 = ['disappoint ','～にがっかりする ',0];
const _483 = ['interest ','～に興味がある ',0];
const _484 = ['tire ','飽きている ',0];
const _485 = ['soybean ','大豆 ',0];
const _486 = ['guide ','案内者､ガイド ',0];
const _487 = ['given ','give の過去分詞 ',0];
const _488 = ['hundreds of   ','何百という ',0];
const _489 = ['crown ','王冠 ',0];
const _490 = ['fantastic ','素晴らしい ',0];
const _491 = ['gold ','金の ',0];
const _492 = ['medal ','メダル､勲章 ',0];
const _493 = ['lecture ','講義､講演 ',0];
const _494 = ['Sumatra ','スマトラ島 ',1];
const _495 = ['be famous for ','～で有名である ',0];
const _496 = ['Sumatran ','スマトラ島の ',1];
const _497 = ['perhaps ','多分､おそらく ',0];
const _498 = ['at all ','全然(…ない) ',0];
const _499 = ['chart ','図表､図 ',0];
const _500 = ['hectare ','ヘクタール ',0];
const _501 = ['loss ','損失､損害 ',0];
const _502 = ['down ','下へ(に) ',0];
const _503 = ['product ','製品 ',0];

const _504 = ['Europe ','ヨーロッパ ',0];
const _505 = ['north ','北の ',0];
const _506 = ['North ♙merica ','北米､北アメリカ ',0];
const _507 = ['burn ','～を燃やす､焼く ',0];
const _508 = ['illegally ','不法に ',0];
const _509 = ['cause ','～を引き起こす ',0];
const _510 = ['flood ','洪水 ',0];
const _511 = ['global ','世界的な､地球全体の ',0];
const _512 = ['warming ','暖かくなること､温暖化 ',0];
const _513 = ['speech ','スピーチ､演説 ',0];
const _514 = ['rhino ','サイ ',0];
const _515 = ['leaf ','葉っぱ ',0];
const _516 = ['leaves ','葉っぱ(複数形) ',0];
const _517 = ['less than ','～より少ない ',0];
const _518 = ['extinction ','絶滅､死滅 ',0];
const _519 = ['living ','生計､暮らし ',0,'make a living ','生計を立てる '];
const _520 = ['kill ','～を殺す ',0];
const _521 = ['horn ','《牛などの》角 ',0];
const _522 = ['price ','値段､価格 ',0];
const _523 = ['illegal ','不法の､違法の ',0];
const _524 = ['hunting ','狩り､狩猟 ',0];
const _525 = ['shown ','show の過去分詞 ',0];
const _526 = ['protected ','保護された､保護指定された ',0];
const _527 = ['effort ','努力 ',0];
const _528 = ['patrol ','～を巡回する ',0];
const _529 = ['cutting ','伐採､切ること ',0];
const _530 = ['return ','返すこと ',0,'in return ','返礼として､お返しに '];
const _531 = ['legally ','合法的に ',0];
const _532 = ['make sure ','確実に…する ',0];
const _533 = ['occur ','起こる､生じる ',0];
const _534 = ['protect ','～を保護する ',0];
const _535 = ['protection ','保護 ',0];
const _536 = ['novel ','(長編の)小説 ',0];
const _537 = ['be depressed by(at) ','～に落胆する ',0];
const _538 = ['be frightened by ','怯える､ぞっとする ',0];
const _539 = ['be bored with ','～に退屈している ',0];
const _540 = ['how to ','…の仕方､…する方法 ',0];
const _541 = ['express ','急行列車 ',0];
const _542 = ['subway ','地下鉄 ',0];
const _543 = ['taxi ','タクシー ',0];
const _544 = ['line ','路線 ',0];
const _545 = ['Olympic ','オリンピック大会の ',0];
const _546 = ['won ','win の過去､過去分詞形 ',0];
const _547 = ['win ','勝ち取る ',0];
const _548 = ['figure ','フィギュア､図､図解 ',0];
const _549 = ['skating ','スケート ',0];
const _550 = ['figure skating ','フィギュアスケート ',0];


const _551 = ['No thanks. ','結構です､ありがとう｡ ',0];
const _552 = ['I’ve ','I have の短縮形 ',0];
const _553 = ['already ','すでに ',0];
const _554 = ['full ','(～で)いっぱいの､満腹した ',0];
const _555 = ['bake ','を焼く ',0];
const _556 = ['pie ','パイ ',0];
const _557 = ['dessert ','デザート ',0];
const _558 = ['yourself ','あなた自身 ',0];
const _559 = ['help oneself to ','～を自由に取って飲食する ',0];
const _560 = ['written ','write の過去分詞 ',0];
const _561 = ['essay ','作文､エッセイ､レポート ',0];
const _562 = ['haven’t ','have not  の短縮形 ',0];
const _563 = ['hasn’t ','has not の短縮形 ',0];
const _564 = ['been ','be の過去分詞形 ',0];
const _565 = ['ever ','(疑問文で)今までに､かつて ',0];
const _566 = ['golden ','金(製)の ',0];
const _567 = ['originally ','もともと､最初に ',0];
const _568 = ['burn down ','(建物が)焼け落ちる ',0];
const _569 = ['dancer ','踊る人､ダンサー ',0];
const _570 = ['abroad ','外国に､海外に ',0];
const _571 = ['gone ','go の過去分詞 ',0];
const _572 = ['since ','～以来､～から ',0];
const _573 = ['be friends with ','～と友達である ',0];
const _574 = ['for a long time ','長い間 ',0];
const _575 = ['perfect ','完全な､申し分のない ',0];
const _576 = ['each other ','お互い ',0];
const _577 = ['stadium ','競技場､スタジアム ',0];
const _578 = ['competition ','競技(会) ',0];
const _579 = ['we’ve ','we have の短縮形 ',0];
const _580 = ['clean up ','～をきれいにする､片付ける ',0];
const _581 = ['garage ','ガレージ､車庫 ',0];
const _582 = ['Good luck! ','幸運を祈ります ',0];
const _583 = ['poster ','ポスター ',0];
const _584 = ['Go for it! ','頑張って！ ',0];
const _585 = ['threw ','throw の過去形 ',0];
const _586 = ['social ','社会的な ',0];
const _587 = ['social media ','ソーシャルメディア ',0];
const _588 = ['typical ','典型的な ',0];
const _589 = ['thrown ','throw の過去分詞形 ',0];
const _590 = ['even though ','…ではあるが ',0];
const _591 = ['total ','合計の ',0];
const _592 = ['ton ','トン(重さの単位) ',0];
const _593 = ['kilogram ','キログラム(重さの単位) ',0];
const _594 = ['per ','～ごとに､～につき ',0];
const _595 = ['industry ','産業 ',0];
const _596 = ['rest ','残り ',0];


const _597 = ['individual ','個々の､それぞれの',0];
const _598 = ['owner ','持ち主､オーナー',0];
const _599 = ['customer ','客､顧客',0];
const _600 = ['freshness ','新鮮さ',0];
const _601 = ['avoid ','避ける',0];
const _602 = ['thinking ','考え､意見､思想',0];
const _603 = ['shocking ','衝撃的な､不快な',0];
const _604 = ['major ','主要な､大手の､重大な',0];
const _605 = ['discount ','割引､値引き',0];
const _606 = ['best before date ','賞味期限',0];
const _607 = ['addition ','追加',0,'in addition ','その上､更に加えて'];
const _608 = ['various ','様々な､多様な',0];
const _609 = ['logo ','ロゴ',0];
const _610 = ['inform ','～に知らせる､伝える',0,'inform ♙ about B ','♙にBを知らせる'];
const _611 = ['situation ','状況､事態',0];
const _612 = ['lastly ','最後に',0];
const _613 = ['food bank ','フードバンク',0];
const _614 = ['mobile app ','モバイルアプリケーション',0];
const _615 = ['nationwide ','全国的な､全国規模の',0];
const _616 = ['surplus ','余剰の､余分の',0];
const _617 = ['provide ','～を供給する',0];
const _618 = ['in need ','必要としている､困っている',0];
const _619 = ['increase ','～を増やす',0];
const _620 = ['pick-up ','行って受け取ること､集荷',0];
const _621 = ['location ','場所',0];
const _622 = ['system ','方式､制度',0];
const _623 = ['at any time ','いつでも',0];
const _624 = ['nearby ','近くの',0];
const _625 = ['police station ','警察署',0];
const _626 = ['goal ','目標',0];
const _627 = ['support ','～を支援する､支える',0];
const _628 = ['organization ','組織､機関',0];
const _629 = ['regret ','後悔､残念',0];
const _630 = ['maker ','メーカー､製造業者',0];
const _631 = ['website ','ウェブサイト',0];
const _632 = ['post ','～を投稿する､アップする',0];
const _633 = ['lend to   ','…という結果になる､引き起こす',0];
const _634 = ['progress ','進歩､全身',0];
const _635 = ['Germany ','ドイツ',0];
const _636 = ['atmosphere ','雰囲気',0];
const _637 = ['Italy ','イタリア',0];
const _638 = ['Russia ','ロシア',0];
const _639 = ['Egypt ','エジプト',0];
const _640 = ['Thailand ','タイ',0];
const _641 = ['New Zealand ','ニュージーランド',0];
const _642 = ['matter ','困った事､問題',0,'What’s the matter with you? ','どうかしましたか？'];
const _643 = ['scarf ','スカーフ､マフラー',0];
const _644 = ['glove ','手袋',0];
const _645 = ['wallet ','札入れ､財布',0];
const _646 = ['raincoat ','レインコート',0];
const _647 = ['handsome ','ハンサムな',0];
const _648 = ['phone ','電話',0];
const _649 = ['trust ','～を信用する',0];

const _650 = ['Chinatown ','中華街､チャイナタウン',0];
const _651 = ['whole ','全体の､すべての',0];
const _652 = ['brunch ','ブランチ',0];
const _653 = ['be crazy about ','～に夢中である､熱中している',0];
const _654 = ['custard ','カスタード',0];
const _655 = ['bun ','丸パン',0];
const _656 = ['seafood ','海産物､魚介類',0];
const _657 = ['audience ','聴衆､観客',0];
const _658 = ['clothes ','衣服',0];
const _659 = ['staff ','職員､店員',0];
const _660 = ['police ','警察､警察隊',0];
const _661 = ['pumpkin ','かぼちゃ',0];
const _662 = ['pound ','ポンド',0];
const _663 = ['butter ','バター',0];
const _664 = ['Los ♙ngeles ','ロサンゼルス',0];
const _665 = ['air ','空気､大気',0];
const _666 = ['lemon ','レモン',0];
const _667 = ['let ','～に(自由に)…させる',0,'Let me see. ','ええと｡･そうねぇ｡'];
const _668 = ['sauce ','ソース',0];
const _669 = ['sir ','あなた',0];
const _670 = ['That’s it. ','それだけです｡',0];
const _671 = ['menu ','メニュー',0];
const _672 = ['highlighter ','蛍光ペン､マーカー',0];
const _673 = ['somewhere ','どこかで､どこかへ',0];
const _674 = ['male ','男性の､オスの',0];
const _675 = ['female ','女性の､オスの',0];
const _676 = ['celebrate ','～を祝う',0];
const _677 = ['present ','プレゼント',0];
const _678 = ['myself ','私自身',0];
const _679 = ['invite ','～を招待する',0];
const _680 = ['chili ','チリトウガラシ',0];
const _681 = ['shrimp ','エビ',0];
const _682 = ['come over ','家にやってくる',0];
const _683 = ['himself ','彼自身',0];
const _684 = ['put on ','～を身につける(着る)',0];
const _685 = ['mirror ','鏡',0];
const _686 = ['ourselves ','私達自身',0];
const _687 = ['yourselves ','あなた達自身',0];
const _688 = ['itself ','それ自身(自体)',0];
const _689 = ['make oneself at home ','くつろぐ､気楽にする',0];
const _690 = ['say to oneself ','心のなかで思う',0];
const _691 = ['take care of oneself ','体に気をつけて',0];
const _692 = ['tale to oneself ','独り言を言う',0];
const _693 = ['for oneself ','独力で､自分のために',0];
const _694 = ['president ','会長､社長､大統領',0];
const _695 = ['guest ','客',0];
const _696 = ['honesty ','正直､誠実',0];
const _697 = ['take part in ','参加する',0];
const _698 = ['athlete ','スポーツ選手',0];
const _699 = ['make an effort ','努力する',0];
const _700 = ['accomplish ','～を成し遂げる',0];
const _701 = ['skater ','スケート選手',0];

const _702 = ['former ','元の､昔の ',0];
const _703 = ['East Germany ','東ドイツ ',0];
const _704 = ['ice skating ','アイススケート ',0];
const _705 = ['eventually ','最後には､ついに ',0];
const _706 = ['women ','女､女性 ',0];
const _707 = ['retire ','引退する､退職する ',0];
const _708 = ['professional ','プロの ',0];
const _709 = ['competitive ','競争の､競技の ',0];
const _710 = ['happen ','起こる､生じる ',0];
const _711 = ['held ','hold の過去形､過去分詞形 ',0];
const _712 = ['moment ','瞬間､ちょっとの間 ',0];
const _713 = ['silence ','沈黙､静寂 ',0];
const _714 = ['host ','主催国(団体､者)､開催地 ',0];
const _715 = ['suffer ','苦しむ ',0,'suffer from ','～に苦しむ '];
const _716 = ['civil ','国内の ',0];
const _717 = ['deliver ','～を配達する,届ける ',0];
const _718 = ['killing ','殺すこと ',0];
const _719 = ['gun ','銃､鉄砲､ピストル ',0];
const _720 = ['capital ','首都 ',0];
const _721 = ['throughout ','～を通してずっと ',0];
const _722 = ['Bosnian War ','ボスニア紛争 ',1];
const _723 = ['broke ','break の過去形 ',0,'break out ','勃発する '];
const _724 = ['religion ','宗教 ',0];
const _725 = ['fight ','戦う､争う ',0];
const _726 = ['independent ','独立した ',0];
const _727 = ['Yugoslavia ','ユーゴスラビア ',1];
const _728 = ['bloody ','血なまぐさい ',0];
const _729 = ['battlefield ','戦場 ',0];
const _730 = ['destroy ','～を破壊する ',0];
const _731 = ['graveyard ','墓地 ',0];
const _732 = ['stage ','舞台､ステージ ',0];
const _733 = ['anti-war ','反戦の ',0];
const _734 = ['melody ','メロディー ',0];
const _735 = ['repeat ','～を繰り返す ',0];
const _736 = ['over and over again ','何度も ',0];
const _737 = ['stupid ','愚かな ',0];
const _738 = ['understand ','～がわかる､理解する ',0];
const _739 = ['understood ','738 の過去形, 過去分詞形 ',0];
const _740 = ['feeling ','気持ち､感情 ',0];
const _741 = ['performance ','演技 ',0];
const _742 = ['for the purpose ','～のために､目的で ',0];
const _743 = ['anger ','怒り ',0];
const _744 = ['as well ','～もまた ',0];
const _745 = ['memory ','思い出､記憶 ',0];
const _746 = ['sadly ','残念なことには､ 不幸なことに ',0];
const _747 = ['call for ','～を(👉を大にして)求める ',0];
const _748 = ['result ','結果､成績 ',0,'as a result ','その結果 '];
const _749 = ['end up ','終わる ',0];
const _750 = ['messenger ','使者 ',0];
const _751 = ['What’s ~ like? ','～はどのようですか｡ ',0];
const _752 = ['hot spring ','温泉 ',0];
const _753 = ['tower ','塔､タワー ',0];

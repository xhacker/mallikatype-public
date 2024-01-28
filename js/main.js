//Mobile navigation
var mobileNav = document.getElementById("mobile-nav");
var mobileNavicon = document.getElementById("mobile-navicon");
var mobileNavlist = document.getElementById("mobile-navlist");
mobileNavicon.onclick = function() {
  if (mobileNavlist.style.display === "none") {
    mobileNavlist.style.display = "flex";
  } else {
    mobileNavlist.style.display = "none";
  };
}


//Hero text feature
var fontIndex = 0;
var fontSelector = document.getElementById("select-font");
var weightSelector = document.getElementById("select-weight");
var featureSelector = document.getElementById("select-feature");
var fonts = document.getElementsByClassName("font");
var heroText = document.getElementById("hero-text");
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");
var weightBar = document.getElementById("weight-bar");
var counterBar = document.getElementById("counter-bar");
//arrow
showFont(fontIndex);
function changeFont(n) {
  showFont(fontIndex += n);
}
function showFont(n) {
  if (n >= fonts.length) {fontIndex = 0;}
  if (n < 0) {fontIndex = fonts.length - 1;}
  heroText.style.fontFamily = fonts[fontIndex].value;
  fontSelector.value = fonts[fontIndex].value;
  dynamicSelect(fonts[fontIndex].value);
}
//selector
fontSelector.addEventListener('change', function()
  {
  heroText.style.fontFamily = this.value; 
  fontIndex = fontSelector.selectedIndex;
});

weightSelector.addEventListener('change', function()
  {
    heroText.style.fontWeight = this.value;
});

weightBar.addEventListener('change', function()
  {
    heroText.style.fontWeight = weightBar.value;
});

counterBar.addEventListener('change', function()
  {
    heroText.style.setProperty("--counter-axis", counterBar.value);
});
// 替换字形
function changeAlt() {
    var checkBox = document.getElementById("alt-checkbox");
    if (checkBox.checked == true) {
      heroText.style.fontVariantAlternates = "styleset(alternative)";
    } else {
      heroText.style.fontVariantAlternates = "";
    }
};
function resetSel() {
  weightSelector.style.display = "inline";
  weightSelector.childNodes.forEach(o => o.remove());
  featureSelector.style.display = "none";
  weightBar.style.display = "none";
  counterBar.style.display = "none";
  heroText.style.fontWeight = "400";
  heroText.innerHTML = "致力精品中文字型，以理性和美，面向世界。";
}

function dynamicSelect(listindex)
    {
        switch (listindex)
        {
          default :
            resetSel();
            break;
          case "Fiction Gothic" :
            resetSel(); 
            weightSelector.options[0]=new Option("Regular","400");
            weightSelector.options[1]=new Option("Rounded","700");
            break;
          case "TPTQSans":
            resetSel();
            weightSelector.options[0]=new Option("特细","100");
            weightSelector.options[1]=new Option("超细","150");
            weightSelector.options[2]=new Option("极细","200");
            weightSelector.options[3]=new Option("细体","300");
            weightSelector.options[4]=new Option("常规","400");
            weightSelector.options[5]=new Option("中等","500");
            weightSelector.options[6]=new Option("粗体","700");
            weightSelector.options[7]=new Option("超粗","800");
            weightSelector.options[8]=new Option("特粗","900");  
            heroText.style.fontWeight = "100";
            weightSelector.value = "100";
            break;
          case "Beiwei Longmen" :
            resetSel();
            weightSelector.options[0]=new Option("Heavy","800");
            heroText.style.fontWeight = "800";
            // heroText.innerHTML = "�力��中���，以����，面�世�。";
            break;
          case "YeBai Script" :
            resetSel();
            weightSelector.options[0]=new Option("Regular","400");
            weightSelector.options[1]=new Option("Bold", "700"); 
            heroText.innerHTML = "致力精品中文字型，以性hsx%hsx%理和美，面向界wmt%世界。";
            break;
          case "Glok Sans" :
            featureSelector.style.display = "none";         
            weightSelector.style.display = "none";
            weightBar.style.display = "inline";
            counterBar.style.display = "inline";
            heroText.style.fontWeight = "1000";
            heroText.style.setProperty("--counter-axis", 1);
            heroText.innerHTML = "致力精品中文字型，以理性和美，面向世界。";
            break;
          case "Jinhua Mincho" :
            resetSel();
            featureSelector.style.display = "flex";
            weightSelector.options[0]=new Option("Regular","400");
            break;
          case "Zhen":
            resetSel();
            weightSelector.options[0]=new Option("Regular","400");
            break;
          case "Zarid Sans SC":
            resetSel();
            weightSelector.options[0]=new Option("Thin","100");
            weightSelector.options[1]=new Option("Extra Light","200");
            weightSelector.options[2]=new Option("Light","300");
            weightSelector.options[3]=new Option("Regular","400");
            weightSelector.options[4]=new Option("Medium","500");
            weightSelector.options[5]=new Option("Semibold","600"); 
            weightSelector.options[6]=new Option("Bold","700");
            weightSelector.options[7]=new Option("Black","900");
            heroText.style.fontWeight = "900";
            weightSelector.value = "900"; 
            break;
        }
        return true;
    }

//Introduction popup

var modal1 = document.getElementById("team");
var modal2 = document.getElementById("service");
var link1 = document.getElementById("team-link");
var link2 = document.getElementById("service-link");
var close1 = document.getElementById("team-close");
var close2 = document.getElementById("service-close");
link1.onclick = function() {
  modal1.style.display = "block";
}
link2.onclick = function() {
    modal2.style.display = "block";
  }
close1.onclick = function() {
  modal1.style.display = "none";
}
close2.onclick = function() {
    modal2.style.display = "none";
  }

//Font section
var fontsIntro = [
  ["锦华明朝体", "这款宋体的灵感来自于雕版印刷。字形略扁，中宫较大，笔画温润。古典但不陈旧，现代而不冰冷。适用于大小标题、短段落排版。此字体于2022年获纽约TDC奖。", "https://mallikatype.com/jinhua/"],
  ["錦華明朝體", "這款宋體的靈感來自於雕版印刷。字形略扁，中宮較大，筆劃溫潤。古典但不陳舊，現代而不冰冷。適用於大小標題、短段落排版。此字體於2022年獲紐約TDC獎。", "https://mallikatype.com/jinhua/"],
  ["Jinhua Mincho", "Drawing inspiration from woodblock printing, Jinhua Mincho features a flat shape and wide counters, coupled with gentle strokes that exude a classic yet modern feel. This versatile font is perfect for title, subtitle, and short paragraph layouts. In recognition of its exceptional design, Jinhua Mincho was awarded the New York TDC in 2022.", "https://mallikatype.com/jinhua/"],
  ["珍体","贵州珍酒的品牌定制字体。灵感来于宋徽宗的书法，且用现代的面貌呈现。", ""],
  ["珍體","貴州珍酒的品牌定製字體。靈感來於宋徽宗的書法，且用現代的面貌呈現。", ""],
  ["Zhen","Zhen is a branding font used by Guizhou ZhenJiu, inspired by the calligraphy of Emperor Song Huizong. It combines traditional elements with a modern aesthetic to create a unique visual identity.", ""],
  ["虚构宽黑","基于Fiction品牌的定制中文字体，设定在正文黑体基础上引入少许装饰特征，例如强烈戏剧性对比的“点”和富有弹性的曲线，使之摆脱传统黑体的严肃面貌，展现出温和有趣的个性，适用于展览活动、标题排版等应用场景。", ""],
  ["虛構寬黑","基於Fiction品牌的定制中文字體，設定在正文黑體基礎上引入少許裝飾特徵，例如強烈戲劇性對比的“點”和富有彈性的曲線，使之擺脫傳統黑體的嚴肅面貌，展現出溫和有趣的個性，適用於展覽活動、標題排版等應用場景。", ""],
  ["Fiction Gothic", "Introducing a branding font inspired by Fiction. This font features unique decorations added to a basic sans serif, such as dramatically contrasted dots and flexible curves. These additions give the font a gentle and interesting originality, setting it apart from the serious feel of traditional sans serifs. Ideal for use in typography for exhibitions and titles.", ""],
  ["TPTQ黑体","TPTQ黑体是为匹配November多文字家族而设计。TPTQ黑体所传达的理性、自然之美得以在汉字语境下完美呈现。曲线自然放松，结构平稳，适用于正文排版或标题导视等多种用途。(其他文字字体由Typotheque出品)。", ""],
  ["TPTQ黑體","TPTQ黑體是為匹配November多文字家族而設計。TPTQ黑體所傳達的理性、自然之美得以在漢字語境下完美呈現。曲線自然放鬆，結構平穩，適用於正文排版或標題導視等多種用途。(其他文字字體由Typotheque出品)。", ""],
  ["TPTQ Sans", "TPTQ Sans was created to complement the November font series, which supports multiple languages. Its design perfectly captures the rationality and natural beauty of Chinese characters, featuring relaxed curves and stable structures. It is well-suited for various applications, including texts, titles, and signage. Other language fonts in the series are designed by Typotheque.", ""],
  ["洛黑体","探索极粗黑体的更多可能，受到包豪斯精神的影响，演绎汉字纯本质的丰富，去除一切装饰。专门为报刊杂志的标题而设计。", ""],
  ["洛黑體","探索極粗黑體的更多可能，受到包豪斯精神的影響，演繹漢字純本質的豐富，去除一切裝飾。專門為報刊雜誌的標題而設計。", ""],
  ["Glok Sans", "Glok Sans is a typeface that aims to explore the use of extremely heavy sans-serif weights. Inspired by the Bauhaus movement, it showcases the original richness of Chinese characters without any unnecessary embellishments. The typeface is specifically designed for use in the headlines of newspapers and magazines, where it can make a bold impact.", ""],
  ["北魏龙门体","北魏龙门体是从龙门石刻（尤其是“始平公造像”）中获得了创作灵感。以棱角分明、直来直去的粗笔画凸显刚强雄壮的气质：字形略扁中宫收縮，又有宽博肃穆之感。北魏龙门体通过现代数位字形，以极具当代性的表现手法重现龙门古韵。适用于各类媒介的大小标题、主视觉设计，可以为版面烘托出超强的表现力。", ""],
  ["北魏龍門體","北魏龙门体是从龙门石刻（尤其是「始平公造像」）中获得了创作灵感。以棱角分明、直来直去的粗笔画凸显刚强雄壮的气质：字形略扁中宫收縮，又有宽博肃穆之感。北魏龙门体通过现代数位字形，以极具当代性的表现手法重现龙门古韵。适用于各类媒介的大小标题、主视觉设计，可以为版面烘托出超强的表现力。", ""],
  ["Beiwei Longmen","Inspired by the Longmen Grottoes, the sharp-edged and straight-forward strokes convey a sense of strength, while the flat shapes and tight counters create a solemn feeling. Beiwei Longmen aims to evoke the ancient spirit of Longmen through the use of a modern digital typeface. This font is suitable for use in various media titles and key visual designs, where its layout can have a strong expressive impact.", ""],
  ["也白体","也白体希望还原稿纸时代的手写意趣，每个汉字都不等宽，去除了一般字库的机械感。又通过OpenType功能再现了“乌霉团”，“打叉”，“换位符”等手写时才有的记号，妙趣横生。", ""],
  ["也白體","也白體希望還原稿紙時代的手寫意趣，每個漢字都不等寬，去除了一般字庫的機械感。又通過OpenType功能再現了「烏黴團」，「打叉」，「換位符」等手寫時才有的記號，妙趣橫生。", ""],
  ["Yebai Script", "Yebai Script aims to recall the old handwriting interests. Each Chinese character is different in width, removing the rigid feeling of common fonts. Yebai also represents many handwriting marks like crossings, which shows sense of humour.", ""],
  ["29LT札理黑体","29LT札理黑体是一款无衬线字体，根植于书法，并经过重新提炼。简洁的轮廓与人文气息浓郁的笔画交织辉映，给人留下了明晰轻畅的印象。整体的连贯性与局部的独特性产生了一种微妙的平衡。字体弥合了高度现代的构成主义美学与舒适性和可读性之间的鸿沟。","https://www.29lt.com/product/29lt-zarid-sans-hzl/"],
  ["29LT札理黑體","29LT札理黑體是一款無襯線字體，根植於書法，並經過重新提煉。簡潔的輪廓與人文氣息濃郁的筆劃交織輝映，給人留下了明晰輕暢的印象。整體的連貫性與局部的獨特性產生了一種微妙的平衡。字體彌合了高度現代的構成主義美學與舒適性和可讀性之間的鴻溝。","https://www.29lt.com/product/29lt-zarid-sans-hzl/"],
  ["29LT Zarid Sans SC", "29LT Zarid Sans SC is a sans serif typeface rooted and refined from calligraphy. Simple outlines with humanistic strokes, 29LT Zarid  Sans SC makes people feel clear and light. With a delicate balance between overall coherence and partial originality, it bridges the gap between modern constructivist aesthetic and readability。", "https://www.29lt.com/product/29lt-zarid-sans-hzl/"]
]

var mainImage = document.getElementById("font-main-image");
var sampleImage = document.getElementById("font-sample");
var mainIntro = document.getElementById("font-main-intro");
var button = document.getElementById("purchase-button");
var tabs = document.getElementsByClassName("font-tab");
var mobileSel = document.getElementById("mobile-selector");

function Tabs() {
  var bindAll = function() {
    for(var i = 0; i < tabs.length ; i++) {
      tabs[i].addEventListener('click', change, false);
    }
  }
  var change = function(e) {
    for(let i = 0; i < tabs.length ; i++) {
      tabs[i].classList.remove('active');
    }
    e.target.classList.add('active');
    mainImage.src = `/img/main/${e.target.id}_main.svg`;
    sampleImage.src = `/img/sample/${e.target.id}_sample.svg`;
    for (let i = 0; i < fontsIntro.length; i++) {
        if ( e.target.innerHTML == fontsIntro[i][0] ) {
          mainIntro.innerHTML = fontsIntro[i][1];
          if ( fontsIntro[i][2] == "" ) {
            button.style.display = "none";
          } else {
            button.style.display = "block";
            button.onclick = function() {
              location.href = fontsIntro[i][2];
            }
          }
        };
    };
  }
  bindAll();
}

//mobile selector
  mobileSel.addEventListener('change', function()
  {
    var mobVal = mobileSel.options[mobileSel.selectedIndex].value;
    var mobTxt = mobileSel.options[mobileSel.selectedIndex].text;
    mainImage.src = `/img/main/${mobVal}_main.svg`;
    sampleImage.src = `/img/sample/${mobVal}_sample.svg`;
    for (let i = 0; i < fontsIntro.length; i++) {
        if ( mobTxt == fontsIntro[i][0] ) {
          mainIntro.innerHTML = fontsIntro[i][1];
          if ( fontsIntro[i][2] == "" ) {
            button.style.display = "none";
          } else {
            button.style.display = "block";
            button.onclick = function() {
              location.href = fontsIntro[i][2];
            }
          }
        };
    };
  });
var connectTabs = new Tabs();

var hkLogo = [
  ["大曲都市", "拉丁", "/img/logo_default.svg"],
  ["天格思", "蒙文", "/img/logo_mongolian.svg"],
  ["帕斯卡爾", "阿文", "/img/logo_arabic.svg"],
  ["張家碩", "韓文", "/img/logo_hangul.svg"]
];
var cnLogo = [
  ["大曲都市", "拉丁", "/img/logo_default.svg"],
  ["天格思", "蒙文", "/img/logo_mongolian.svg"],
  ["帕斯卡尔", "阿文", "/img/logo_arabic.svg"],
  ["张家硕", "韩文", "/img/logo_hangul.svg"]
];
var enLogo = [
  ["Omagari Toshi", "Latin", "/img/logo_default.svg"],
  ["Tengis", "Mongolian", "/img/logo_mongolian.svg"],
  ["Pascal Zoghbi", "Arabic", "/img/logo_arabic.svg"],
  ["Zhang Jiashuo", "Hangul", "/img/logo_hangul.svg"]
]
var logoImg = document.getElementById('jasmine-img');
var curve1 = document.getElementById('curve1');
var curve2 = document.getElementById('curve2');
var helper1 = document.getElementById('helper1');
var helper1Name = document.getElementById('helper1-name');
var helper1Lingual = document.getElementById('helper1-lingual');
var helper2 = document.getElementById("helper2");
var currentURL = window.location.pathname;

logoImg.onclick = function() {
  var rnd = 0;
  rnd = Math.floor(Math.random() * cnLogo.length);
  if (currentURL == "/index.html" || currentURL == "/") {
    helper1Name.innerHTML = cnLogo[rnd][0];
    helper1Lingual.innerHTML = cnLogo[rnd][1];
    logoImg.src = cnLogo[rnd][2];
  } else if (currentURL == "/en/index.html") {
    helper1Name.innerHTML = enLogo[rnd][0];
    helper1Lingual.innerHTML = enLogo[rnd][1];
    logoImg.src = enLogo[rnd][2];
  } else if (currentURL == "/zh-HK/index.html") {
    helper1Name.innerHTML = hkLogo[rnd][0];
    helper1Lingual.innerHTML = hkLogo[rnd][1];
    logoImg.src = hkLogo[rnd][2];
  }

}

logoImg.onmouseover = function() {
  curve1.style.visibility = "visible";
  curve2.style.visibility = "visible";
  helper1.style.visibility = "visible";
  helper2.style.visibility = "visible";
}
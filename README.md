---
dual-iframe: true
body-class: snap fs-video-mobile editor
css: src/theme.css
---

<script>
window.copyToClipboard = function(text, elementId, successMessage) {
  const btn = document.getElementById(elementId);
  if (btn) {
    btn.style.transform = 'scale(0.95)';
    btn.style.opacity = '0.7';
  }
  
  navigator.clipboard.writeText(text).then(() => {
    if (btn) {
      btn.style.transform = 'scale(1)';
      btn.style.opacity = '1';
    }
    
    const msg = document.createElement('div');
    msg.textContent = successMessage;
    msg.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #FA5F5F;
      color: white;
      padding: 12px 20px;
      border-radius: 4px;
      font-size: 14px;
      z-index: 9999;
    `;
    document.body.appendChild(msg);
    
    setTimeout(() => {
      msg.remove();
    }, 2000);
  }).catch(() => {
    if (btn) {
      btn.style.transform = 'scale(1)';
      btn.style.opacity = '1';
    }
    alert('Failed to copy link');
  });
};
</script>

# _עקירתה של_ ניבאל אל-היסי
[](map/#31.30336,34.29179,9.53,37.6,0.0/~labels_he)
[](svg/#intro-pre.svg/-0.01,0.45,1.52/+nibal2023,+displacement)

<div id="logo">
<a href="https://btselem.org" title="בצלם" class="dontinflect" target="blank"><img src="img/bts_logo.svg" alt="בצלם" style="max-width:100px;height:auto;"></a>
</div>

<div id="lang">
    <a href="?#" class="dontinflect" data-reload>עברית</a>
    <a href="?#en" class="dontinflect" data-reload>English</a>
    <a href="?#ar" class="dontinflect" data-reload>عربي</a>
</div>

<a href="https://www.btselem.org/hebrew/gaza_strip/202512_no_place_under_heaven_forced_displacement_in_the_gaza_strip_2023_2025" target="blank" class="dontinflect thumb">
    לפרסום המלא על העברה בכפייה ברצועת עזה:
    <strong>
    ״אין מקום תחת השמיים״
    </strong>
</a>

<img id="scroll-indicator" src="img/scrol-signal.svg" alt="יש לגלול את הדף למטה" style="max-width:100px;height:auto;">


{.meta}
[](svg/#intro-pre.svg/-0.02,1.21,1.52/+nibal2023,~displacement)
[](map/#31.41661,34.37347,10.01,37.6,0.0/~labels_he,~Gaza_border_dash,~Gaza_border_base)
מאז אוקטובר 2023 מנהלת ישראל מתקפה שמטרתה להחריב את כלל מרכיבי החיים ברצועת עזה. זו כוללת הרג של עשרות אלפי בני אדם, פציעה של מאות אלפים, יצירת הרס בקנה מידה אדיר והרעבה של מרבית האוכלוסייה. 


{.meta}
[](svg/#intro-pre.svg/-0.02,1.21,1.52/+nibal2023,~displacement)
[](map/#31.41661,34.37347,10.01,37.6,0.0/~labels_he)
לאורכה, ישראל הורתה לתושבי הרצועה לעקור שוב ושוב ממקומם. כ-1.9 מיליון בני אדם נעקרו לפחות פעם אחת מאז אוקטובר 2023, לעתים קרובות לאחר שאיבדו בני משפחה ואת מרבית רכושם.


{.meta}
[](svg/#intro-pre.svg/0.34,0.36,1.81/~all)
[](map/#31.41661,34.37347,10.01,37.6,0.0/~labels_he,+idf-zones,+idf-poly-outlines "באדום: האזורים שנכללו תחת צווי הפינוי של הצבא בין אוקטובר 2023 לאוקטובר 2025")
לרוב, ישראל הורתה לתושבי הרצועה לעקור באמצעות צווי הפינוי שהוציא הצבא הישראלי.


{.meta}
[](svg/#intro-pre.svg/0.34,0.36,1.81/~all)
[](map/#31.41661,34.37347,10.01,37.6,0.0/~labels_he,+idf-zones "באדום: האזורים שנכללו תחת צווי הפינוי של הצבא בין אוקטובר 2023 לאוקטובר 2025")
במקרים רבים, הצווים היו בלתי-ברורים, מטעים, או שהוצאו רק לאחר שמתקפות הצבא באזורי הפינוי כבר החלו, מה שהגביר את החרדה, עורר בלבול ויצר סכנה ממשית לחיי העקורים.


{.meta}
[](svg/#intro-pre.svg/0.34,0.36,1.81/~all)
[](map/#31.41661,34.37347,10.01,37.6,0.0/~labels_he,+UNOSAT_gaza_23-10-15(poly-scale) "הערכת צפיפות בניינים שניזוקו ברצועת עזה כעבור שבוע של מתקפה. מקור: UNOSAT")
במקביל לעקירה בשל צווי הפינוי, תושבי עזה נאלצו לעקור בשל ההפצצות התכופות של הצבא בכל רחבי הרצועה.


{.meta}
[](svg/#intro-pre.svg/0.34,0.36,1.81/~all)
[](map/#31.41661,34.37347,10.01,37.6,0.0/~labels_he,+UNOSAT_gaza_25-10-11(poly-scale) "הערכת צפיפות בניינים שניזוקו ברצועת עזה כעבור שנתיים של מתקפה. מקור: UNOSAT")
הפצצות אלו הביאו להרס ולמוות בקנה מידה עצום.


{.meta}
[](svg/#intro-pre.svg/0.34,0.36,1.81/+displacement " בתמונה: תושבי העיר עזה נמלטים לאחר שהצבא הורה להם להתפנות דרומה, 15 בספטמבר 2025. (REUTERS / מחמוד עיסא)")
[](map/#31.41661,34.37347,10.01,37.6,0.0/~labels_he,+UNOSAT_gaza_25-10-11(poly-scale))
לאורך המתקפה, ישראל מנעה מהעקורים למצוא מחסה בטוח עם גישה למזון, מים ושירותים בסיסיים.


{.meta}
[](svg/#intro-pre.svg/-0.01,0.27,1.02/+displacement,+nibal2023)
[](map/#31.41661,34.37347,10.01,37.6,0.0/~labels_he)
אחת מהמוני העקורים היא ניבאל אל-היסי, בת 25, שנעקרה מביתה יחד עם בתה התינוקת ריתא.


{.meta}
[](svg/#intro-pre.svg/-0.01,0.31,1.28/+displacement,+nibal2023)
[](map/#31.41661,34.37347,10.01,37.6,0.0/+pois.csv(poi,id=home),+pois.csv#2(poi,id=gaza-2403),+pois.csv#3(poi,id=nuseirat),+pois.csv#4(poi,id=rafah),+pois.csv#5(poi,id=bureij),+pois.csv#6(poi,id=al-mawasi),+pois.csv#7(poi,id=deir-al-balah),~labels_he,~labels_he)
זה הסיפור שלה.


{.subheader}
[](svg/#intro-pre.svg/-0.28,1.05,1/+nibal2023)
[](map/#31.53332,34.48215,14.18,37.6,0.0/~labels_he,+Gaza_border_dash,+Gaza_border_base)
## החיים שלפני


{.testimony typewriter}
[](svg/#intro-pre.svg/-0.29,0.28,1/+nibal2023)
[](map/#31.53332,34.48215,14.18,37.6,0.0/~labels_he,+Gaza_border_dash,+Gaza_border_base)

שמי ניבאל. אני בת 25. עד לאוקטובר 2023, גרתי בעיירה ג׳אבליא עם בעלי אחמד ובתנו התינוקת ריתא.


{.testimony typewriter}
[](svg/#intro-pre.svg/-0.67,0.25,2.4/,+nibal2023)
[](map/#31.53332,34.48215,14.18,37.6,0.0/~labels_he,+Gaza_border_dash,+Gaza_border_base)

אני הצעירה מבין תשעה אחים ושלוש אחיות.  


{.testimony typewriter}
[](svg/#intro-pre.svg/-0.39,-0.21,2.4/+@vimeo-1137392053 "מתוך חשבון הטיקטוק של ניבאל")
[](map/#31.53332,34.48215,14.18,37.6,0.0/~labels_he,+Gaza_border_dash,+Gaza_border_base "מתוך חשבון הטיקטוק של ניבאל")

בגלל שאני הקטנה, ההורים והאחים שלי תמיד פינקו אותי.


{.testimony typewriter}
[](svg/#intro-pre.svg/-0.39,-0.21,2.4/+@vimeo-1137392053)
[](map/#31.53332,34.48215,14.18,37.6,0.0/~labels_he,+Gaza_border_dash,+Gaza_border_base)

אחרי התיכון, המשכתי ללימודי אנגלית ותרגום באוניברסיטת אל-אזהר בעיר עזה.


{.testimony typewriter}
[](svg/#intro-pre.svg/-0.07,-0.36,2.4/+vimeo-1137392053,+@vimeo-1137391389 "מתוך חשבון הטיקטוק של ניבאל")
[](map/#31.53332,34.48215,14.18,37.6,0.0/~labels_he,+Gaza_border_dash,+Gaza_border_base)

בשנה האחרונה באוניברסיטה הכרתי את אחמד. הרגשתי שהוא דומה לי, שהוא מבין אותי.


{.testimony typewriter}
[](svg/#intro-pre.svg/-0.07,-0.36,2.4/+vimeo-1137392053,+@vimeo-1137391389)
[](map/#31.53332,34.48215,14.18,37.6,0.0/~labels_he,+Gaza_border_dash,+Gaza_border_base)
התחתנתי איתו למרות שההורים שלי התנגדו. ידעתי שלא יהיו לנו חיי שפע, אבל הרגשתי שהוא הזהב שלי.


{.testimony typewriter}
[](svg/#intro-pre.svg/0.26,-0.41,2.4/+vimeo-1137392053,+vimeo-1137391389,+@vimeo-1137393585 "מתוך חשבון הטיקטוק של ניבאל")
[](map/#31.53332,34.48215,14.18,37.6,0.0/~labels_he,+Gaza_border_dash,+Gaza_border_base)

בספטמבר 2022 עברנו לגור בדירה משלנו בבניין של המשפחה של אחמד, בג׳אבליא, לא רחוק מהבית של ההורים שלי.  


{.testimony typewriter}
[](svg/#intro-pre.svg/0.26,-0.41,2.4/+vimeo-1137392053,+vimeo-1137391389,+@vimeo-1137393585)
[](map/#31.53332,34.48215,14.18,37.6,0.0/~labels_he,+Gaza_border_dash,+Gaza_border_base)
היינו מובטלים ומצבנו הכלכלי לא היה פשוט, אבל שרדנו בעזרת התמיכה של המשפחות שלנו.


{.testimony typewriter}
[](svg/#intro-pre.svg/0.26,-0.41,2.4/+vimeo-1137392053,+vimeo-1137391389,+@vimeo-1137393585)
[](map/#31.53332,34.48215,14.18,37.6,0.0/~labels_he,+Gaza_border_dash,+Gaza_border_base)
היו לנו חיים מאושרים, מלאים באהבה ועטופים בחום של המשפחה.


{.meta}
[](svg/#intro-pre.svg/1.14,-0.37,3.26/+@vimeo-1138452992,+vimeo-1137393585,+vimeo-1137391389,+vimeo-1137392053 "מתוך חשבון הטיקטוק של ניבאל")
[](map/#31.53332,34.48215,14.18,37.6,0.0/~labels_he,+Gaza_border_dash,+Gaza_border_base)

שנה אחרי החתונה, בספטמבר 2023, נולדה לניבאל ולאחמד בתם, ריתא. 


{.meta}
[](svg/#intro-pre.svg/1.14,-0.37,3.26/+@vimeo-1138452992,+vimeo-1137393585,+vimeo-1137391389,+vimeo-1137392053)
[](map/#31.53332,34.48215,14.18,37.6,0.0/~labels_he,+Gaza_border_dash,+Gaza_border_base)
חמישה ימים אחרי שריתא נולדה, אחמד קיבל היתר עבודה בישראל והתחיל לעבוד בשטחה כפועל בניין.


{.subheader}
[](fg:blank)
[](bg:blank)
## 7 באוקטובר 2023 


{.meta no-h}
### Oct 23

{.meta} 
[](fg:blank)
[](map/#31.38518,34.39275,9.64,-10.4,42.0/~labels_he,+oct7-hamas(label-focused),+oct7-hamas#2(bubbles))
ב-7 באוקטובר 2023 ביצעו ארגון חמאס ופלגים חמושים פלסטינים נוספים מרצועת עזה את המתקפה הקטלנית ביותר שתועדה אי פעם נגד אזרחים ישראלים.

1,220 בני אדם נהרגו, עשרות אלפים נפצעו, ו-252 בני אדם חיים וגופות נחטפו לרצועת עזה.


{.meta} 
[](fg:blank)
[](map/#31.38461,34.38113,10.13,-10.4,42.0/+UNOSAT_gaza_23-10-15(poly-scale) "הערכת צפיפות בניינים שניזוקו ברצועת עזה כעבור השבוע הראשון למתקפה. מקור: UNOSAT")
עוד באותו יום, ישראל פתחה בגל תקיפות נרחב ברצועה.


{.meta} 
[](fg:blank)
[](map/#31.51976,34.47657,10.89,-10.4,42.0/+UNOSAT_gaza_23-10-15(poly-scale),~labels_he,+pois.csv(poi,id=home) "הערכת צפיפות בניינים שניזוקו ברצועת עזה כעבור השבוע הראשון למתקפה. מקור: UNOSAT")
ניבאל הייתה אז בביתה בג׳באליא עם בתה ריתא, אז בת חודש בלבד. 
אחמד, בעלה, היה באותה עת בעבודתו בבניין בתוך ישראל.


{.meta} 
[](svg/#oct7.svg/0.56,0.74,2.51/+detainies-2,+detainies-1 "פלסטינים שנעצרו בידי הצבא לאחר ששוחררו לרפיח, 28 בדצמבר 2023. (REUTERS / בסאם מסעוד)")
[](map/#31.43482,34.38239,9.64,-10.4,42.0/~labels_he)
בימים שאחרי כן, ישראל שללה את כלל היתרי העבודה של עשרות אלפי העובדים הפלסטינים מרצועת עזה, בשעה שחלקם שוהים בשטח ישראל ולא יכולים לשוב לביתם. 
אלפי עובדים הפכו באחת ל״שוהים בלתי-חוקיים״. 


{.meta} 
[](svg/#oct7.svg/0.79,0.96,2.51/+detainies-2 "פלסטינים שנעצרו בידי הצבא לאחר ששוחררו לרפיח, 28 בדצמבר 2023. (REUTERS / בסאם מסעוד)")
[](map/#31.43482,34.38239,9.64,-10.4,42.0/~labels_he)
מיד לאחר מכן, ישראל עצרה אלפי עובדים פלסטינים בשטחה - בהם גם את אחמד, בעלה של ניבאל.


{.meta} 
[](fg:blank)
[](map/#31.41869,34.37279,10.00,37.6,0.0/+north "באדום: האיזורים שנכללו בצווי הפינוי שהפיץ הצבא לתושבי עזה ב-13 באוקטובר 2023")
במקביל, הצבא החל להפיץ צווי פינוי לתושבי עזה.


{.meta} 
[](fg:blank)
[](map/#31.41869,34.37279,10.00,37.6,0.0/+north,+arrow)
צווי הפינוי ההמוניים הראשונים שהוציא הצבא ב-13 לאוקטובר הורו לכמיליון תושבי צפון הרצועה לעזוב את בתיהם ולעקור לדרום הרצועה תוך 24 שעות.

<a href="https://www.btselem.org/hebrew/gaza_strip/202512_no_place_under_heaven_forced_displacement_in_the_gaza_strip_2023_2025#evacuation_orders" target="blank" class="dontinflect thumb">
    להרחבה, ראו:
    <strong>
    צווי הפינוי ו״המסדרונות הבטוחים״
    </strong>
</a>


{.meta} 
[](svg/#oct7.svg/-0.32,-0.25,2.53/+@vimeo-1136099759 "נסיעה על כביש סלאח א-דין החוצה את הרצועה מצפון לדרום, 14 באוקטובר 2023. (מוחמד זענון)")
[](map/#31.37390,34.16724,9.97,-10.4,42.0/+north,+arrow)
תחת ההפצצות הכבדות, נאלצו מאות אלפי בני אדם להחליט במהירות לאן להימלט, מבלי לדעת אם ומתי יוכלו לשוב לבתיהם.


{.meta} 
[](fg:blank)
[](map/#31.52287,34.46534,12.90,-3.2,39.0/+UNOSAT_gaza_23-10-15(poly-scale),+pois.csv(poi,id=home) "הערכת צפיפות בניינים שניזוקו ברצועת עזה כעבור השבוע הראשון למתקפה. מקור: UNOSAT")
ניבאל, שחששה מיציאה למסע הקשה לדרום הרצועה לבדה עם בתה בת החודש, עברה עם ריתא לבית הוריה הסמוך. 


{.testimony typewriter}
[](svg/#oct7.svg/-1.6,1.15,3.54/+nibal_rita_hands-comp.jpg)
[](map/#31.52287,34.46534,12.90,-3.2,39.0/+UNOSAT_gaza_23-10-15(poly-scale),+pois-he(label-main,id=home))
נשארנו בג׳אבליא למרות ההפצצות, הרעב והפחד. סבלתי מאוד בתקופה הזאת. אחמד חסר לי מאוד ולא יכולתי לדמיין את העקירה לבד עם ריתא, בלעדיו ובלי התמיכה של המשפחה שלי.


{.testimony typewriter}
[](svg/#oct7.svg/-1.6,1.15,3.54/+nibal_rita_hands-comp.jpg)
[](map/#31.52287,34.46534,12.90,-3.2,39.0/+UNOSAT_gaza_23-10-15(poly-scale),+pois-he(label-main,id=home))
פחדתי על ריתא מאוד.


{.meta} 
[](svg/#oct7.svg/0,-0.47,2/+ruined_jabalia "תושבים בוחנים אתר תקיפה ישראלית על בית בג׳באליא, 3 בינואר 2024. (REUTERS / עימאד גבון)")
[](bg:blank)
תוך חודשים ספורים, המתקפה הישראלית שינתה לבלי היכר את פני צפון הרצועה.


{.meta} 
[](svg/#oct7.svg/0,-0.47,2/+ruined_jabalia "תושבים בוחנים אתר תקיפה ישראלית על בית בג׳באליא, 3 בינואר 2024. (REUTERS / עימאד גבון)")
[](bg:blank)
התושבים שעוד נותרו בג׳אבליא תועדו מסתובבים בין ההריסות, כשהם מנסים לאסוף את מה שנותר מרכושם.


{.meta} 
[](fg:blank)
[](map/#31.41524,34.36943,10.06,-0.8,0.0/+pois.csv2(poi,id=khan-yunis),+arrow,+pois-he(label-main,id=khan-yunis),+pois-he#2(label-main,id=home))
בפברואר 2024 שיחרר הצבא הישראלי את אחמד, והוא הגיע לח'אן יונס שבדרום הרצועה.  
למרות התנגדותם הנחרצת של הוריה, ניבאל החליטה לצאת דרומה, בתקווה להתאחד עם בעלה.


{.subheader}
[](fg:blank)
[](bg:blank)
## המסע דרומה  


{.meta} 
[](fg:blank)
[](map/#31.50634,34.45154,12.96,0.0,39.0/+jabalia-gaza(by-car):follow+,+pois.csv(poi,id=home),+pois.csv#2(poi,id=gaza-2403),+pois-he(label-main,id=home),+pois-he#2(label-main,id=gaza-2403))
את תחילת הדרך עשתה ניבאל עם אביה, שהסיע אותה ואת ריתא מביתם בג'אבליא לפאתי העיר עזה.


{.meta}
[](svg/#south.svg/-0.45,0.65,2.21/+@vimeo-1133751988 "מתוך חשבון האינסטגרם של ניבאל")
[](map/#31.50634,34.45154,12.96,0.0,39.0/+jabalia-gaza(by-car):follow+,+pois.csv(poi,id=home),+pois.csv#2(poi,id=gaza-2403),+pois-he(label-main,id=home),+pois-he#2(label-main,id=gaza-2403))
בעדותה תיארה ניבאל נסיעה רוויית אימה בדרכים הרוסות, במהלכה ראתה מבעד לחלון המכונית את ההפצצות הכבדות של הצבא הישראלי.


{.meta} 
[](fg:blank)
[](map/#31.47949,34.42091,12.96,0.0,39.0/+jabalia-gaza(by-car),+gaza-nuseirat(by-foot):follow+10100,+family-home,+pois.csv(poi,id=home),+pois.csv#2(poi,id=gaza-2403),+pois.csv#3(poi,id=nuseirat),+pois-he(label-main,id=gaza-2403),+pois-he#2(label-main,id=nuseirat))
מהעיר עזה המשיכה ניבאל ברגל, כשהיא נושאת את ריתא בת החצי שנה בידיה.


{.meta}
[](fg:blank)
[](map/#31.41663,34.36232,12,0.0,39.0/+jabalia-gaza(by-car),+gaza-nuseirat(by-foot),+nuseirat-rafah(2-by-foot):follow+16900,+family-home,+pois.csv(poi,id=home),+pois.csv#2(poi,id=gaza-2403),+pois.csv#3(poi,id=nuseirat),+pois.csv#4(poi,id=rafah),+pois-he(label-main,id=nuseirat),+pois-he#2(label-main,id=rafah))
באזור א-נוסייראת השתיים התאחדו עם אחמד, אותו לא ראו מזה כחצי שנה.


{.meta}
[](fg:blank)
[](map/#31.26998,34.25242,14.63,0.0,39.0/+nuseirat-rafah(2-by-foot),+family-home,+pois.csv(poi,id=rafah),+pois-he(label-main,id=rafah),~labels_he) 
משם, המשיכו שלושתם אל האוהל של אחמד ברפיח.


{.testimony typewriter}
[](fg:blank)
[](map/#31.26878,34.25305,15.23,0.0,39.0/+pois.csv(poi,id=rafah),~labels_he) 
התרגשתי מאוד לראות את אחמד. הוא חיבק ונישק את ריתא בלי הפסקה. 


{.testimony typewriter}
[](svg/#south.svg/-0.9,-1.71,7.98/+prisoners_kid)
[](map/#31.26859,34.25352,16.36,0.0,39.0/+pois.csv(poi,id=rafah),~labels_he) 
אבל המפגש איתו היה גם מזעזע. הוא ירד המון במשקל, ונראה שהוא איבד את ניצוץ החיים שלו. 


{.meta} 
[](svg/#south.svg/-0.29,-1.02,3.82/+prisoners_kid "פלסטינים ששוחררו מבתי כלא בישראל מחוץ לבית החולים נאסר בח'אן יונס, 13 באוקטובר 2025. (מג'די פאתחי / NurPhoto)")
[](map/#31.27110,34.25408,16.36,0.0,39.0/+pois.csv(poi,id=rafah),~labels_he) 
ניבאל וריתא פגשו את אחמד לאחר שהוחזק באחד ממתקני הכליאה הישראליים ללא משפט במשך חודשים. 


{.meta} 
[](svg/#south.svg/0.73,0.65,2.87/+ahmed_detained-comp.jpg "פלסטינים שנעצרו בידי הצבא לאחר ששוחררו לרפיח, 28 בדצמבר 2023. (REUTERS / בסאם מסעוד)")
[](map/#31.27110,34.25408,16.36,0.0,39.0/+pois.csv(poi,id=rafah),~labels_he) 
בצלם וארגוני זכויות אדם נוספים תיעדו כיצד מאז 7 באוקטובר 2023 ישראל הנהיגה כלפי כלואים פלסטינים מדיניות מערכתית של אלימות תכופה, קשה ושרירותית, הרעבה ומניעת טיפול רפואי, שכבר הובילה לעשרות מקרי מוות.


{.meta} 
[](svg/#south.svg/-0.02,0.65,2.87/+ahmed_detained-comp.jpg "פלסטינים שנעצרו בידי הצבא לאחר ששוחררו לרפיח, 28 בדצמבר 2023. (REUTERS / בסאם מסעוד)")
[](map/#31.27110,34.25408,16.36,0.0,39.0/+pois.csv(poi,id=rafah),~labels_he) 
מאז ועד היום ישראל שוללת מרובם זכויות יסוד, בהן הזכות להליך משפטי הוגן, ומחזיקה בהם במתקני כליאה המתנהלים כרשת של מחנות עינויים.


{.meta} 
[](svg/#south.svg/-0.82,2.16,7.52/+ahmed_detained-comp.jpg "פלסטינים שנעצרו בידי הצבא לאחר ששוחררו לרפיח, 28 בדצמבר 2023. (REUTERS / בסאם מסעוד)")
[](map/#31.27110,34.25408,16.36,0.0,39.0/+pois.csv(poi,id=rafah),~labels_he) 
חלק מתושבי עזה שנעצרו בתוך ישראל בימים שלאחר ה-7 באוקטובר מוחזקים עד היום במתקני הכליאה הישראליים.  


{.meta}
[](svg/#south.svg/-0.03,0.03,5.52/+rafah_tent_comp.jpg "עקורים במחנה אוהלים בח'אן יונס, 11 בדצמבר 2023. (REUTERS / איברהים אבו מוסטפא)")
[](map/#31.27110,34.25408,16.36,0.0,39.0/+pois.csv(poi,id=rafah),~labels_he) 
על אף שמחת האיחוד עם אחמד, ניבאל התקשתה להסתגל לחיים באוהל ברפיח. 


{.meta thumb}
[](svg/#south.svg/-0.03,0.03,5.52/+rafah_tent_comp.jpg "עקורים במחנה אוהלים בח'אן יונס, 11 בדצמבר 2023. (REUTERS / איברהים אבו מוסטפא)")
[](map/#31.27110,34.25408,16.36,0.0,39.0/+pois.csv(poi,id=rafah),~labels_he)
הצפיפות, המחסור במים ובמזון, תנאי הסניטציה הירודים והיעדר הפרטיות, הפכו את החיים במחנות העקורים לבלתי נסבלים, במיוחד עבור נשים ונערות.

<a href="https://www.btselem.org/hebrew/gaza_strip/202512_no_place_under_heaven_forced_displacement_in_the_gaza_strip_2023_2025#living_conditions" target="blank" class="dontinflect thumb">
    להרחבה, ראו:
    <strong>תנאי החיים במתחמי העקורים</strong>
</a>


{.testimony typewriter}
[](svg/#south.svg/-0.34,-0.98,5.32/+rita_tent2.jpg)
[](map/#31.27517,34.20911,12.96,0.0,39.0/+pois.csv(poi,id=rafah),~labels_he "ריתא במחנה העקורים ברפיח")
זה היה עינוי מתמשך, ככל הנראה מהתקופות הקשות בחיי.


{.testimony typewriter}
[](svg/#south.svg/-0.34,-0.98,5.32/+rita_tent2.jpg)
[](map/#31.27517,34.20911,12.96,0.0,39.0/+pois.csv(poi,id=rafah),~labels_he "ריתא במחנה העקורים ברפיח")
לא סיפרתי על הקשיים להורים שלי, שהתנגדו מלכתחילה שאעקור דרומה. 
התביישתי לספר להם איך אני חיה.


{.meta thumb} 
[](svg/#south.svg/0.24,-1.2,2.76/+IDF_order_rafah)
[](map/#31.45080,34.31559,9.93,-49.6,24.5/+IDF_zone_060524-110524(idf-poly),+idf-poly-outlines,+IDF_zone_060524-110524_NEW(idf-poly) "בתמונה: צווי הפינוי שהפיץ הצבא לתושבי ושוהי רפיח ב-6 במאי 2024")
בתחילת מאי 2024, פחות מחודשיים לאחר הגעתם של ניבאל, אחמד וריתא לעיר, הפיץ הצבא הישראלי צווי פינוי חדשים שדרשו מתושבי רפיח ומהעקורים השוהים בה להתפנות.  

<a href="https://www.btselem.org/hebrew/gaza_strip/202512_no_place_under_heaven_forced_displacement_in_the_gaza_strip_2023_2025#rafah_invasion" target="blank" class="dontinflect thumb">
    להרחבה, ראו:
    <strong>
    מאי 2024: הפלישה לרפיח
    </strong>
</a>


{.meta} 
[](svg/#south.svg/0,-3.69,8.67/+rafah_bomb_comp.jpg "תושב רפיח צופה בעשן מיתמר בזמן שכוחות ישראליים מנהלים מתקפה אווירית וקרקעית במזרח העיר, 7 במאי 2024. (REUTERS / חאתם חאלד)")
[](bg:blank)
במקביל להפצת צווי הפינוי, ישראל הגבירה את תקיפותיה ברפיח.


{.meta} 
[](fg:blank)
[](map/#31.35894,34.31925,10.36,0.0,39.0/+rafah-bureij(2-by-foot):follow+,+pois.csv(poi)[name=rafah],+pois.csv(poi)[name=bureij],+idf-poly-outlines,+IDF_zone_060524-110524_NEW(idf-poly),+pois-he(label-main,id=rafah),+pois-he#2(label-main,id=bureij))

ניבאל, אחמד וריתא נאלצו אז להימלט מרפיח יחד עם כמיליון איש נוספים, רובם המוחלט עקורים שרוכזו בהוראת הצבא הישראלי בעיר במהלך החודשים שלפני כן.


{.meta} 
[](fg:blank)
[](map/#31.44772,34.39655,13.00,0.0,39.0/+rafah-bureij(2-by-foot),+pois.csv(poi,id=bureij),+pois-he(label-main,id=bureij))
הם הגיעו למחנה הפליטים אל-בוריג׳ שבמרכז הרצועה, שם שכרו מחסן קטן מחברים.


{.subheader}
[](fg:blank)
[](bg:blank)
## המחסן באל-בוריג׳


{.testimony typewriter}
[](svg/#warehouse_bureij1.svg/0.01,-0.53,2.31/+warehouse_new-compressed.jpg "מחנה הפליטים א-שאטי בעיר עזה, 15 ביולי 2025. (REUTERS / מחמוד עיסא)")
[](bg:blank)

החיים במחסן היו קצת יותר יציבים מאשר החיים באוהל, אבל הרגשתי חצויה. מצד אחד שמחתי להיות עם אחמד וריתא, ומצד שני, המרחק מההורים, מהאחים ומהבית שלי בג׳אבליא גרם לי להרגיש בודדה ומנוכרת. התגעגעתי אליהם מאוד.


{.testimony typewriter}
[](svg/#warehouse_bureij1.svg/0.01,-0.53,2.31/+warehouse_new-compressed.jpg)
[](bg:blank)

דיברתי איתם בטלפון בכל הזדמנות שהייתה לי.


{.testimony typewriter}
[](svg/#warehouse_bureij1.svg/0.27,0.35,2.26/+@vimeo-1130687838 "ריתא במחסן באל-בוריג׳, מתוך חשבון הטיקטוק של ניבאל")
[](bg:blank)

גרנו במחסן בערך חמישה חודשים. חיינו בתנאים לא פשוטים, אבל הרגשתי שלאט לאט הצלחנו למצוא קצת נחת.


{.testimony typewriter}
[](svg/#warehouse_bureij1.svg/0.27,0.35,2.26/+@vimeo-1130687838 "ריתא במחסן באל-בוריג׳, מתוך חשבון הטיקטוק של ניבאל")
[](bg:blank)
בבוקר של ה-7 באוקטובר 2024 ריתא קראה לי "אמא" בפעם הראשונה. זה היה מרגש מאוד.


{.testimony typewriter}
[](fg:blank)
[](bg:blank)

אבל אז הכול השתנה.


{.meta no-h}
### Oct 24
[](svg/#warehouse_bureij2.svg/-16.71,-1.35,58.58/+nibal_xray)
[](bg:blank)
באותו בוקר הפגיז הצבא את אל-בוריג׳. ניבאל תיארה רעש בלתי פוסק של פיצוצים סביבה. 


{.meta}
[](svg/#warehouse_bureij2.svg/-14.53,2.75,58.58/+nibal_xray)
[](bg:blank)
בזמן שבעלה יצא לבדוק איפה נפלו הפגזים, היא וריתא נותרו לבדן במחסן הקטן. ניבאל התקשרה לבני משפחתה ושוחחה איתם בניסיון להפיג מעט מהפחד שאחז בה. 


{.meta}
[](svg/#warehouse_bureij2.svg/-17.15,3.61,61.92/+nibal_xray)
[](bg:blank)
בזמן השיחה שלהם, פגז פגע במחסן.


{.meta}
[](svg/#warehouse_bureij2.svg/-4.73,0.63,16.15/+nibal_xray)
[](bg:blank)
ניבאל נפצעה קשה, אבל הצליחה להעזיק עזרה מתוך המחסן ההרוס ופונתה לבית החולים.


{.testimony typewriter}
[](svg/#warehouse_bureij2.svg/-2.53,0.24,8.59/+nibal_xray)
[](bg:blank)

התעוררתי בבית החולים וראיתי שנכרתו לי הידיים. 


{.meta}
[](svg/#warehouse_bureij2.svg/-2.53,0.24,8.59/+nibal_xray)
[](bg:blank)
כתוצאה מפגיעת הפגז, ידיה של ניבאל נקטעו מתחת למרפק והיא נכוותה קשות. בית החולים בו היא אושפזה היה שרוי בעומס אדיר של פצועים, והרופאים טיפלו בה בתנאים קשים.


{.testimony typewriter}
[](svg/#warehouse_bureij2.svg/-1.09,0.35,3.64/+nibal_xray,+nibal_after_amputation)
[](bg:blank)
הייתי בהלם. הרגשתי כאילו הידיים שלי עדיין קיימות, או כאילו יום אחד הן יחזרו לצמוח.


{.testimony typewriter}
[](svg/#warehouse_bureij2.svg/-2.6,0.24,12.54/+rita_tent1,+nibal_xray)
[](bg:blank)
שאלתי מה עם ריתא, וענו לי שהיא בריאה ושלמה. זה מה שהחזיק אותי. זה, וזה שאחמד היה לצדי.


{.testimony typewriter}
[](fg:blank)
[](map/#31.40988,34.36287,10.17,-0.8,0.0/+pois-he(label-main,id=al-zawaida),+pois-he#2(label-main,id=home))
ההורים שלי השתגעו מדאגה. הם חששו שלא אשרוד, וכל הזמן התעדכנו במצבי דרך אחמד. 
כשמצבי השתפר קצת במהלך האשפוז, הצלחתי סוף סוף להתקשר בעצמי לאמא שלי. רציתי שהיא תשמע שאני בסדר. היא לא האמינה שאני עדיין חיה ולא הפסיקה לבכות.


{.meta}
[](fg:blank)
[](map/#31.41688,34.35054,11.63,0.0,39.0/+al-zawaida-al-mawasi(2-by-foot):follow,+idf-poly-outlines,+pois-he(label-main,id=al-zawaida),+pois-he#2(label-main,id=al-mawasi))
ניבאל השתחררה מבית החולים לאחר 40 יום. מיד לאחר מכן, היא, אחמד וריתא נאלצו לעקור שוב.


{.meta}
[](fg:blank)
[](map/#31.36106,34.26832,13.74,0.0,39.0/+al-zawaida-al-mawasi(2-by-foot),+pois-he(label-main,id=al-mawasi))
הם הגיעו ל״אזור ההומניטרי״ באל-מוואסי, שם הם חיו שוב באוהל.


{.meta} 
[](fg:blank)
[](map/#31.37125,34.28097,13.97,40.0,1.2/+wayback:20231101 "תצלום לוויין של השטח שהוגדר אחרי אוקטובר 2023 כ״אזור ההומניטרי״ באל-מוואסי, ח׳אן יונס, במאי 2023. מקור: ESRI Wayback")
כבר בתחילת המתקפה הגדירה ישראל שטח באזור העיירה אל-מוואסי כ״אזור הומניטרי״.


{.meta} 
[](fg:blank)
[](map/#31.37047,34.28073,14.79,40.0,1.2/+wayback:20231101,~wayback:20251005 "תצלום לוויין של השטח שהוגדר לאחר אוקטובר 2023 כ״אזור ההומניטרי״ באל-מוואסי, ח׳אן יונס, במאי 2023. מקור: ESRI Wayback")
מרבית שטח מדברי זה לא היה מחובר לתשתיות חשמל, מים או ביוב עוד לפני המתקפה הישראלית.


{.meta} 
[](fg:blank)
[](map/#31.37047,34.28073,15.79,40.0,1.2/+wayback:20231101,+wayback:20251005 "תצלום לוויין של ״האזור ההומניטרי״ באל-מוואסי, ח׳אן יונס, בינואר 2025. מקור: ESRI Wayback")

תוך מספר חודשים, ״האזור ההומניטרי״ התמלא עד אפס מקום באוהלים, בהם נאלצו לחיות מעל למיליון בני אדם שנעקרו מכל רחבי הרצועה.

<a href="https://www.btselem.org/hebrew/gaza_strip/202512_no_place_under_heaven_forced_displacement_in_the_gaza_strip_2023_2025#displacement_waves" target="blank" class="dontinflect thumb">
    להרחבה, ראו:
    <strong>
    גלי העקירה ו״האזורים ההומניטריים״
    </strong>
</a>


{.meta}
[](svg/#warehouse_bureij2.svg/0.86,-1.07,3.83/+winter_triple_comp.jpg "חורף במחנה עקורים בח׳אן יונס, 31 בדצמבר 2024. (Activestills / דועאא אל-באז)")
[](map/#31.37047,34.28073,15.79,40.0,1.2/+wayback:20251005)
בנובמבר 2024, החודש בו ניבאל ומשפחתה הגיעו ל״אזור ההומניטרי״, עקורים רבים שחסו במתחם תיארו חיים בצפיפות אדירה, עם מחסור אקוטי במים ובמזון, כשהם חשופים לחלוטין לקור ולגשמים העזים.


{.meta}
[](svg/#warehouse_bureij2.svg/1.22,-0.49,3.65/+wheelchaor_triple_comp.jpg "אכרם עדיל, ילד פלסטיני שאיבד את אחת מרגליו בתקיפה ישראלית, באוהל בעיר עזה, 13 בדצמבר 2024. (מחמוד עיסא / Anadolu)")
[](map/#31.37047,34.28073,15.79,40.0,1.2/+wayback:20251005)
ניבאל נאלצה להתחיל את תהליך ההחלמה שלה בתנאים בלתי-אנושיים.
עד היום, עשרות אלפי פצועים, נכים ובעלי מוגבלויות, חלקם הגדול כתוצאה מהמתקפה הישראלית, מתקשים  לשרוד את התנאים הקשים במחנות העקורים.


{.testimony typewriter}
[](svg/#warehouse_bureij2.svg/0.84,0.59,3.44/+@vimeo-1129846713  "מתוך חשבון הטיקטוק של ניבאל")
[](bg:blank)

לחזור לחיות שוב באוהל אחרי הפציעה היה קשה מאוד. לא יכולתי להשתמש בשירותים באופן עצמאי, והביך אותי כל-כך לבקש בכל פעם עזרה. 


{.testimony typewriter}
[](svg/#warehouse_bureij2.svg/-0.77,0.04,4.1/+rita_tent1 "ריתא במחנה העקורים באל-מוואסי")
[](bg:blank)

הבת של השכנים מהאוהל לידנו, נערה חכמה ורגישה, ריחמה עליי והגיעה בכל יום לעזור לי ולטפל בי ובריתא.


{.testimony typewriter}
[](svg/#warehouse_bureij2.svg/-2,1.15,6.89/+nibal_after_amputation)
[](bg:blank)

התקשיתי לקבל את הגוף החדש שלי. 


{.testimony typewriter}
[](svg/#warehouse_bureij2.svg/-2,1.15,6.89/+nibal_after_amputation)
[](bg:blank)

השתדלתי להישאר מטופחת, ועם עזרה גם להתלבש, להתאפר ולצאת מהאוהל.


{.testimony typewriter}
[](svg/#warehouse_bureij2.svg/-1.09,0.43,3.58/+nibal_after_amputation)
[](bg:blank)
אבל לא העזתי להסתכל במראה.


{.testimony typewriter}
[](vim/#vimeo.com%2F1141224369%3Fshare%3Dcopy%26fl%3Dsv%26fe%3Dci/autoplay,loop,auto)
[](bg:blank)
הרגשתי שגם ריתא בקושי מזהה אותי. 


{.testimony typewriter}
[](svg/#warehouse_bureij3.svg/-0.41,-1.11,2.88/+@vimeo-1132490042,+vimeo-1137390641,+vimeo-1131630900 "מתוך חשבון האינסטגרם של ניבאל")
[](bg:blank)

פחדתי שהיא משתנה, שהיא מאבדת משמחת החיים ומהחיוניות שלה.


{.testimony typewriter}
[](svg/#warehouse_bureij3.svg/0.25,-0.73,3.14/+@vimeo-1137390641,+vimeo-1131630900 "סרטון מהרשתות, שימוש לפי סעיף 27א'")
[](bg:blank)

אבל אחמד היה שם בשבילי. הוא אמר לי, ״אני אהיה הידיים שלך, העיקר שלך ולריתא יהיה טוב״.


{.testimony typewriter}
[](svg/#warehouse_bureij3.svg/0.93,-0.16,3.14/+@vimeo-1131630900  "מתוך חשבון הטיקטוק של ניבאל")
[](bg:blank)

חלמתי שנחזור לצפון הרצועה, לחיק המשפחה שלי, לימים שבהם כולנו היינו ביחד. כל-כך התגעגעתי אליהם. ייחלתי לרגע שבו תהיה הפסקת אש ואוכל לחזור אליהם ולהרגיש בטוחה שוב. 
אבל אחרי חודשים של מרחק, התחלתי לאבד תקווה שזה יקרה. 


{.subheader}
[](fg:blank)
[](bg:blank)
## הפסקת האש: ינואר 2025 


{.meta}
[](svg/#ceasefire_hope.svg/-0.15,0.3,2.65/+@vimeo-1136076448 "עקורים חוזרים לצפון על כביש אל-רשיד, 21 בינואר 2025. (Activestills / יוסף זענון)")
[](bg:blank)
אחרי כחודשיים של חיים באוהל באל-מוואסי, בינואר 2025 התבשרו תושבי הרצועה, וניבאל ביניהם, על כניסתה לתוקף של הפסקת האש השנייה בין ישראל לחמאס. 


{.meta}
[](svg/#ceasefire_hope.svg/-0.15,0.3,2.65/+@vimeo-1136076448 "עקורים חוזרים לצפון על כביש אל-רשיד, 21 בינואר 2025. (Activestills / יוסף זענון)")
[](bg:blank)
בשבועות שלאחר מכן, כחצי מיליון עקורים התחילו לשוב לבתיהם בצפון הרצועה. 


{.meta}
[](fg:blank)
[](map/#31.43623,34.35063,10.79,0.0,39.0/+al-mawasi-jabalia(by-car):follow+,+al-mawasi,+family-home,+idf-poly-outlines,+pois-he(label-main,id=jabalia),+pois-he#2(label-main,id=al-mawasi))

גם ניבאל ואחמד יצאו צפונה עם ריתא בת השנה וארבעה חודשים. 
במחסום נצרים, אספו אותם קרובי משפחה של ניבאל. הם לקחו את אחמד לדירתם של בני הזוג, ואת ניבאל וריתא לבית הוריה בג׳אבליא. 


{.testimony typewriter}
[](svg/#ceasefire_hope.svg/-0.51,-0.49,1.93/+@vimeo-1129854927 "מתוך חשבון הטיקטוק של ניבאל")
[](map/#31.53564,34.47997,11.77,0.0,39.0/+al-mawasi-jabalia(by-car),+pois-he(label-main,id=home))

המשפחה קיבלה אותי בבית בחיבוקים, שירים ובכי. בלילות נפגשנו כל האחים בבית ההורים שלי.


{.testimony typewriter}
[](svg/#ceasefire_hope.svg/0.08,-0.47,2.32/+nibal_rita_happy.jpg)
[](map/#31.53564,34.47997,11.77,0.0,39.0/+pois-he(label-main,id=home))

האחיות שלי היו לצידי כל הזמן ועזרו לי בהכל: להתקלח, להתלבש, לאכול ולטפל בריתא. 


{.testimony typewriter}
[](svg/#ceasefire_hope.svg/0.69,-0.57,2.32/+nibal_rita_home.jpg)
[](map/#31.53564,34.47997,11.77,0.0,39.0/+pois-he(label-main,id=home))

הן החליפו לה חיתולים, חיבקו אותה ושיחקו איתה. בזכותן הרגשתי שהחיים שלי מתחילים לחזור למסלול.


{.meta}
[](svg/#ceasefire_hope.svg/0.69,-0.57,2.32/+nibal_rita_home.jpg)
[](map/#31.53564,34.47997,11.77,0.0,39.0/+pois-he(label-main,id=home))
אחרי כחודש של מנוחה והחלמה בבית הוריה, אחמד ביקש מניבאל שתשוב אליו. 
למרות הסתייגות הוריה, היא נענתה לבקשתו וחזרה עם ריתא לדירתם המשותפת, שם הם שכרו עזרה עבורה.


{.meta}
[](svg/#ceasefire_hope.svg/-2.23,-2.6,6.44/+attack_march_25.jpg "תקיפה ישראלית במרכז העיר עזה, 22 במרץ 2025. (סאהר אל־ע'ורה / ZUMA Press Wire)")
[](bg:blank)
אבל אז ישראל הפרה את הפסקת האש, והמתקפה על הרצועה התחדשה ביתר שאת. 


{.meta}
[](svg/#ceasefire_hope.svg/-0.25,0.55,2.15/+@vimeo-1141082583 "סרטון מהרשתות, שימוש לפי סעיף 27א'")
[](bg:blank)

תחת ההפצצות והמצור, מערכת היחסים של ניבאל ואחמד נקלעה למשבר.


{.meta}
[](svg/#ceasefire_hope.svg/-0.54,0.55,2.15/+vimeo-1141082583,+@vimeo-1141231313 "סרטון מהרשתות, שימוש לפי סעיף 27א'")
[](bg:blank)
בעדותה, סיפרה ניבאל כי אחמד התמודד באותה תקופה עם החותם שהותירה בו השהות במתקן הכליאה בישראל.


{.testimony typewriter}
[](svg/#ceasefire_hope.svg/-0.54,0.55,2.15/+vimeo-1141082583,+@vimeo-1141231313 "סרטון מהרשתות, שימוש לפי סעיף 27א'")
[](bg:blank)
מאז שאחמד חזר אלינו מישראל הוא נראה לי מוטרד ולחוץ. משהו בו השתנה.
במובן מסוים, הרגשתי, הוא איבד שם חלק מעצמו.


{.meta}
[](svg/#ceasefire_hope.svg/0.8,0.36,2.15/+@vimeo-1137391158  "מתוך חשבון הטיקטוק של ניבאל")
[](bg:blank)

ניבאל תיארה את הכאב הנפשי שחווה אז אחמד, שהחמיר תחת הקושי של שלושתם לשרוד בתנאי המצור ההדוק שהטילה שוב ישראל.  


{.testimony typewriter}
[](svg/#ceasefire_hope.svg/0.8,0.36,2.15/+@vimeo-1137391158  "מתוך חשבון הטיקטוק של ניבאל")
[](bg:blank)

בהתחלה הוא מאוד תמך בי. אבל עם הזמן ועם הקושי האישי שלו, הרגשתי שהוא נאלץ לטפל בי מתוך רחמים.


{.testimony typewriter}
[](svg/#ceasefire_hope.svg/0.8,0.36,2.15/+@vimeo-1137391158  "מתוך חשבון הטיקטוק של ניבאל")
[](bg:blank)

בתוך כל הקשיים, ניסיתי להתמקד בריתא. היא הייתה הדבר החשוב ביותר בשבילי, ועשיתי מה שיכולתי כדי להתגבר על המתיחות ביני לבין אחמד ולטפל בה.


{.subheader}
[](fg:blank)
[](bg:blank)
## בין ארבעה קירות


{.meta}
[](fg:blank)
[](map/#31.52947,34.47904,17.00,38.4,0.0/+UNOSAT_jabalia_25-04-04(poly-scale),+pois-he(label-main,id=alaa-home),+pois-he#2(label-main,id=couple-home),+pois-he#3(label-main,id=home),~labels_he "הערכת צפיפות בניינים שניזוקו בג׳אבליא עד לתחילת אפריל 2025. מקור: UNOSAT")
באפריל 2025 הפציץ הצבא הישראלי את הבית הסמוך לבית הזוג, בו חיה משפחתה של אלאא, אחותה של ניבאל.  

כתוצאה מההפצצה נהרגו שלושת ילדיה של אלאא: וסים, בן 10, מוהנד, בן 8, וח'וולה, בת 5.


{.meta}
[](svg/#back_home.svg/-1.22,-1.03,4.53/+@vimeo-1129860275 "תיעוד של ביתה של אלאא לאחר ההפצצה, לצד תמונות של ילדיה שנהרגו")
[](bg:blank)


{.meta}
[](svg/#back_home.svg/-1.06,-0.62,3.53/+@vimeo-1129871187 "מתוך חשבון הטיקטוק של ניבאל")
[](bg:blank)
ניבאל קיבלה את הבשורה המרה על המוות של אחיינים שלה בשעה שהקשיים בינה לבין לאחמד הגיעו לשיאם.


{.testimony typewriter}
[](svg/#back_home.svg/-1.06,-0.62,3.53/+@vimeo-1129871187 "מתוך חשבון הטיקטוק של ניבאל")
[](bg:blank)
באותם ימים הרגשתי שאחמד כבר לא מסוגל לדאוג לי ולריתא. הקושי לטפל בנו ולדאוג לנו למים ולאוכל עשה אותו עצבני, ולרגעים אפילו חששתי ממנו.
יום אחד, הוא דרש שאחזור לבית הוריי.


{.meta}
[](fg:blank)
[](map/#31.52942,34.47911,18.34,38.4,0.0/+pois-he(label-main,id=couple-home),+pois-he#2(label-main,id=home),~labels_he)
בתחילת יוני 2025, ניבאל החליטה לחזור עם ריתא לבית הוריה הסמוך.
 

{.testimony typewriter}
[](svg/#back_home.svg/0.33,-1.52,5.01/+jabalia_april_25.JPG "תושבים בסמוך לגופות הרוגים באתר תקיפה ישראלית על בית בג'באליא, 18 באפריל 2025. (סאהר אל־ע'ורה / ZUMA Press Wire)")
[](bg:blank)

המשפחה שוב קיבלה את פנינו באהבה, אבל בבית שרר עצב כבד. אני ואחותי ניסינו לנחם אחת את השנייה.


{.testimony typewriter}
[](svg/#back_home.svg/0.94,-0.57,3.11/+nibal_home_smile3.heic)
[](map/#31.53028,34.47787,17.18,38.4,0.0/+pois.csv(poi,id=home),~labels_he)

הייתי מתוסכלת כי לא יכולתי לעשות כלום בעצמי והתקשיתי לטפל בריתא. היה לי קשה לעכל את הפרידה מאחמד, והוא חסר לי מאוד. 
למרות כל התמיכה שקיבלתי מההורים שלי, הרגשתי שהפכתי לנטל גם עליהם.


{.testimony typewriter}
[](fg:blank)
[](map/#31.52943,34.47873,16.78,38.4,0.0/+UNOSAT_jabalia_25-07-08(poly-scale),+pois.csv(poi,id=home),~labels_he "הערכת צפיפות בניינים שניזוקו בג׳אבליא עד לתחילת יולי 2025. מקור: UNOSAT")

ההפצצות באזור שלנו נמשכו כל הזמן והרבה אנשים סביבנו נעקרו שוב. אבל המשפחה המורחבת שלי גדולה מאוד ולא היה לנו לאן ללכת בלי שנצטרך להתפצל.


{.meta}
[](svg/#back_home.svg/-0.43,0.71,2.35/+@vimeo-1137391856,+vimeo-1137392312 "הפצצות בשכונת א-נזלה בג׳אבליא, אוגוסט 2025")
[](map/#31.52947,34.47929,18.15,38.4,0.0/+pois.csv(poi,id=home),~labels_he)
בסוף אוגוסט 2025, כוחות הצבא הישראלי נכנסו לג'באליא והתקדמו אל עבר השכונה של ניבאל. 
ההפגזות הלכו והתקרבו לביתה.  


{.meta}
[](svg/#back_home.svg/-0.43,0.71,2.35/+@vimeo-1137391856,+vimeo-1137392312 "הפצצות בשכונת א-נזלה בג׳אבליא, אוגוסט 2025")
[](map/#31.52947,34.47929,18.15,38.4,0.0/+pois.csv(poi,id=home),+pois.csv#2(poi,id=alaa-home),~labels_he)
בשלב מסוים, אחד מהפגזים פגע בבית של דוד שלה, הסמוך לבית הוריה. 
בת דודתה של ניבאל נהרגה בהפצצה, וכמה מבני משפחתה האחרים נפצעו.


{.testimony typewriter}
[](svg/#back_home.svg/0.03,0.51,2.35/+@vimeo-1137392312 "תושבים נעקרים משכונת א-נזלה בג׳אבליא ביום ההפצצה")
[](map/#31.52947,34.47929,18.15,38.4,0.0/+pois.csv(poi,id=home),+pois.csv#2(poi,id=alaa-home),~labels_he)

שמענו פיצוץ עז, ואז המון צעקות מבחוץ. ראינו אנשים רצים. אמרו לנו שהצבא הישראלי ציווה לפנות את האזור תוך רבע שעה. 
יצאנו מהבית מבוהלים בלי לקחת איתנו כמעט כלום. שכחתי בבית את התעודות שלנו, הבגדים שלנו, הכול. אבל הצלחנו להימלט בזמן.


{.testimony typewriter}
[](svg/#back_home.svg/0.03,0.51,2.35/+@vimeo-1137392312 "תושבים נעקרים משכונת א-נזלה בג׳אבליא ביום ההפצצה")
[](map/#31.52947,34.47929,18.15,38.4,0.0/+pois.csv(poi,id=home),~labels_he)

הלכנו ברגל ברחובות, מפוחדים.


{.meta}
[](svg/#back_home.svg/1.03,0.65,4.6/+nibal_ruined_home1.jpg "אזור ביתה של ניבאל לאחר ההפצצה")
[](bg:blank)
בהמשך, נודע לניבאל כי הבניין בו גרה רוב חייה לצד משפחתה המורחבת נהרס כליל בהפצצות הכבדות על ג׳אבליא.


{.subheader}
[](fg:blank)
[](bg:blank)
## ארעיות קבועה 


{.meta}
[](svg/#permanent_impermanence.svg/-0.7,1.26,3.27/+nibal_ruined_home2.jpg "אזור ביתה של ניבאל לאחר ההפצצה")
[](map/#31.52947,34.47929,18.15,38.4,0.0/+pois.csv(poi,id=home),+pois.csv#2(poi,id=gaza-2509))

ניבאל, ריתא וכ-50 מבני משפחתן המורחבת - הוריה של ניבאל, אחיה, בני זוגם וילדיהם - צעדו ברגל מג׳אבליא לעיר עזה בחיפוש אחר מקום בטוח. 
הם התמקמו במסעדה נטושה של חברים, ואחר-כך עברו לדירה קטנה וצפופה בעיר עזה.


{.meta} 
[](svg/#permanent_impermanence.svg/-0.59,0.39,2.29/+@vimeo-1136076786 "תושבים נעקרים ממחנה א-שאטי הסמוך לעיר עזה, 19 בספטמבר 2025. (Activestills / יוסף זענון)")
[](map/#31.50774,34.46034,14.51,38.4,0.0/)

שבועות ספורים לאחר שמשפחתה של ניבאל הגיעה אליה, פתחה ישראל במתקפה קרקעית נוספת על העיר עזה. 


{.meta thumb} 
[](svg/#permanent_impermanence.svg/0.53,0.69,2.43/+IDF_order_gaza_city-comp.jpg,~@vimeo-1136076786 "תושב העיר עזה מחזיק בצו פינוי שהוטל ממטוס ישראלי, 9 בספטמבר 2025. (REUTERS / דאווד אבו אלקאס)")
[](map/#31.50774,34.46034,14.51,38.4,0.0/+IDF_zone_090925_NEW(idf-poly))
צווי הפינוי שהוציא הצבא בתחילת ספטמבר 2025 לתושבי צפון הרצועה הורו לכ-1.2 מיליון בני אדם לעקור שוב ממקום מושבם.

<a href="https://www.btselem.org/hebrew/gaza_strip/202512_no_place_under_heaven_forced_displacement_in_the_gaza_strip_2023_2025#destruction_of_gaza_city" target="blank" class="dontinflect thumb">
    להרחבה, ראו:
    <strong>
    אוגוסט-ספטמבר 2025: הרס העיר עזה
    </strong>
</a>


{.meta}
[](fg:blank)
[](map/#31.43623,34.35063,10.79,0.0,39.0/+gaza-deir-al-balah(by-car):follow+,+IDF_zone_090925_NEW(idf-poly),+idf-poly-outlines,+pois-he(label-main,id=deir-al-balah))
המשפחה נעקרה שוב, הפעם דרומה, למתחם אוהלים בדיר אל-בלח. 


{.testimony typewriter}
[](svg/#permanent_impermanence.svg/0.2,-0.85,3.14/+@vimeo-1129867912 "מתוך חשבון הטיקטוק של ניבאל. בטקסט שצירפה לסרטון כתבה: ״בין ההריסות, ״אנשים נושאים את מה שנשאר מחייהם, כאילו גוררים שרידי מולדת על משאית״")
[](bg:blank)
אני מותשת מהעקירה החוזרת ונשנית, וחוששת שריתא ואני לא נצליח להסתגל שוב לחיים באוהל.
הצבא הישראלי מפזר כל הזמן כרוזים שמורים לנו להתפנות, ואנחנו חיים בחוסר אונים ובפחד. 


{.testimony typewriter}
[](svg/#permanent_impermanence.svg/-0.66,-1.1,4.35/+home_nibal.png,~vimeo-1129867912 "ביתה של ניבאל בג׳אבליא טרם תחילת המתקפה הישראלית")
[](bg:blank)
החיים שלנו נהרסו.


{.testimony typewriter}
[](svg/#permanent_impermanence.svg/-0.66,-1.1,4.35/+home_nibal_RUINED.png,~home_nibal.png "ביתה של ניבאל בג׳אבליא, אוקטובר 2025")
[](bg:blank)

הם הפכו למוות מתמשך. חיי השפלה ועלבון, בלי בית, בלי טיפת יציבות.


{.testimony typewriter}
[](svg/#permanent_impermanence.svg/0.8,-0.49,3.32/+@vimeo-1132487425 "ניבאל ואביה באוהל בדיר אל-בלח")
[](map/#31.41150,34.38598,9.96,38.4,0.0/+pois.csv(poi,id=deir-al-balah))

כל דבר בחיים שלי כרוך בסבל עכשיו. החום באוהל נורא, ואני מזיעה אבל לא יכולה להתרחץ לבד. אני סובלת מאוד מעקיצות, כי אני לא יכולה אפילו להתגרד. 
אני מביטה סביבי ורואה את נשות האחים שלי עסוקות עם המשפחות שלהן, ואני מתביישת לבקש עזרה.


{.meta no-h}
[](fg:blank)
[](map/#31.41505,34.39181,9.91,38.4,0.0/+IDF_zone_191025(idf-poly),+pois-he(label-main,id=deir-al-balah) "באדום: השטח שנותר בשליטת ישראל לפי השלב הראשון בהסכם הפסקת האש ")
### Oct 25
ב-10 לאוקטובר 2025 נכנסה לתוקף הפסקת האש בין ישראל לחמאס. 
בשבועות שלאחר מכן ישראל המשיכה את תקיפותיה ברצועה.


{.meta}
[](svg/#permanent_impermanence.svg/2.16,-2.2,5.41/+nibal_next_to_ruins3.jpg "ניבאל על רקע הריסות ביתה בג׳אבליא")
[](bg:blank)
גם עם שוך ההפצצות, ניבאל, ריתא ובני משפחתן עדיין חשופים לסכנת חיים יומיומית. 


{.meta}
[](svg/#permanent_impermanence.svg/2.16,-2.2,5.41/+nibal_next_to_ruins1.jpg "ניבאל על רקע הריסות ביתה בג׳אבליא")
[](bg:blank)


{.meta}
[](svg/#permanent_impermanence.svg/1.94,-1.81,5.68/+@vimeo-1139274686 "מתוך האינסטגרם של ניבאל")
[](bg:blank)
החיים במחנה האוהלים, יחד עם ההתמודדות עם האובדן של בני משפחתה, הרס הבית והנכות הקשה ממשיכים להותיר משקעים בנפשה ובגופה של ניבאל.


{.meta}
[](svg/#permanent_impermanence.svg/1.94,-1.81,5.68/+@vimeo-1139274686 "מתוך האינסטגרם של ניבאל")
[](bg:blank)
היא מתקשה לדמיין עתיד טוב יותר עבורה ועבור ריתא.


{.meta}
[](svg/#permanent_impermanence.svg/0.56,-0.99,2.7/+vimeo-1139274686,+refugees_end-comp.jpg "תושבי העיר עזה נמלטים לאחר שהצבא הורה להם להתפנות דרומה, 15 בספטמבר 2025. (REUTERS / מחמוד עיסא)")
[](map/#31.41306,34.39134,9.30,38.4,0.0/~labels_he)

סיפורה של ניבאל הוא רק אחד מבין שני מיליון סיפוריהם של תושבי עזה, המנסים מזה שנתיים לשרוד את הג'נוסייד שמבצעת ישראל ברצועה. הם חוו אובדן, רעב ועקירה מתמשכים, ומוסיפים לחיות בתנאים האיומים שכפתה עליהם ישראל, כשהם מופקרים על-ידי הקהילה הבינלאומית, בלי תקווה אמיתית לעתיד טוב יותר. 


{.meta}
[](fg:blank)
[](map/#31.40796,34.38347,9.91,38.4,0.0/~labels_he,+idf-zones,+idf-poly-outlines "באדום: האזורים שנכללו תחת צווי הפינוי של הצבא בין אוקטובר 2023 לאוקטובר 2025")
הסיפור שלהם הוא הסיפור של חורבן עזה עצמה. 


{.meta thumb gofundme}
[](fg:blank)
[](bg:blank)
במהלך החודשים האחרונים, סיפורה של ניבאל פורסם בעיתונות וברשתות החברתיות. 
היא מקווה שבעזרת הפרסום תצליח לגייס כסף כדי לצאת מהרצועה ולעבור השתלה של גפיים תותבות, שיעזרו לה להחזיר לעצמה מעט מהעצמאות שאיבדה.

<a href="https://www.gofundme.com/f/help-nebal-and-her-family-survive-in-gaza?attribution_id=sl%3Ac8f825db-4dc9-4cf2-aeea-40e4e79fb7ef&utm_campaign=natman_sharesheet_dash&utm_content=amp13_c&utm_medium=customer&utm_source=whatsapp&fbclid=PAb21jcAN4JUJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadzjiJkT7H9BLMjCNGSUD5VvOkcMtgK2I4dNb9OkV-9HZq4k7IwSljiCJ-xNw_aem_RLk6gsE3EAadchTzhrw3Gg`" target="blank" class="alpha_0.25 thumb">
    הצטרפו לקמפיין:
    <strong>
    להושיט יד לניבאל
    </strong>
</a>


{.meta share-section closing}
[](fg:blank)
[](map/#31.42216,34.36628,9.79,40.0,0.0/~labels_he)
## שתפו את המסע של ניבאל אל-היסי

<div class="share-buttons">
  <button class="share-btn dontinflect" 
    onclick="const url=window.SHARE_URL||document.querySelector('head')?.getAttribute('data-page-url')||window.location.href;navigator.clipboard.writeText(url).then(() => { this.style.transform='scale(0.95)'; this.style.opacity='0.7'; setTimeout(() => { this.style.transform='scale(1)'; this.style.opacity='1'; }, 100); const m=document.createElement('div'); m.textContent='הקישור הועתק'; const rect=this.getBoundingClientRect(); m.style.cssText='position:fixed;top:'+(rect.top-40)+'px;left:'+(rect.left+rect.width/2)+'px;transform:translateX(-50%);background:#FA5F5F;color:black;padding:8px 16px;border-radius:4px;font-size:14px;font-weight:bold;z-index:9999;white-space:nowrap'; document.body.appendChild(m); setTimeout(() => m.remove(), 2000); }).catch(() => alert('Failed to copy'))"
    aria-label="Copy link" title="Copy link">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M2.66699 16.0005C2.66699 11.5822 6.24872 8.00049 10.667 8.00049H13.333C14.0694 8.00049 14.667 8.59712 14.667 9.3335C14.667 10.0699 14.0694 10.6665 13.333 10.6665H10.667C7.72148 10.6665 5.33301 13.055 5.33301 16.0005C5.33318 18.9458 7.72159 21.3335 10.667 21.3335H13.333C14.0693 21.3335 14.6668 21.9303 14.667 22.6665C14.667 23.4029 14.0694 24.0005 13.333 24.0005H10.667C6.24882 24.0005 2.66717 20.4186 2.66699 16.0005ZM26.667 16.0005C26.667 13.055 24.2785 10.6665 21.333 10.6665H18.667C17.9306 10.6665 17.333 10.0699 17.333 9.3335C17.333 8.59712 17.9306 8.00049 18.667 8.00049H21.333C25.7513 8.00049 29.333 11.5822 29.333 16.0005C29.3328 20.4186 25.7511 24.0005 21.333 24.0005H18.667C17.9306 24.0005 17.333 23.4029 17.333 22.6665C17.3332 21.9303 17.9307 21.3335 18.667 21.3335H21.333C24.2784 21.3335 26.6668 18.9458 26.667 16.0005ZM21.333 14.6665C22.0694 14.6665 22.667 15.2641 22.667 16.0005C22.6668 16.7367 22.0693 17.3335 21.333 17.3335H10.667C9.93072 17.3335 9.33318 16.7367 9.33301 16.0005C9.33301 15.2641 9.93061 14.6665 10.667 14.6665H21.333Z"/>
    </svg>
  </button>
  <a href="mailto:?subject=%D7%9E%D7%A1%D7%A2%20%D7%94%D7%A2%D7%A7%D7%99%D7%A8%D7%94%20%D7%A9%D7%9C%20%D7%A0%D7%99%D7%91%D7%90%D7%9C%20%D7%90%D7%9C-%D7%94%D7%99%D7%A1%D7%99&body=%D7%A2%D7%9D%20%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%AA%20%D7%91%D7%99%D7%93%D7%99%D7%99%D7%9D%2C%20%D7%9E%D7%94%D7%91%D7%99%D7%AA%20%D7%91%D7%92%27%D7%90%D7%91%D7%9C%D7%99%D7%94%2C%20%D7%93%D7%A8%D7%9A%20%D7%90%D7%95%D7%94%D7%9C%20%D7%91%D7%9E%D7%97%D7%A0%D7%94%20%D7%94%D7%A2%D7%A7%D7%95%D7%A8%D7%99%D7%9D%20%D7%91%D7%90%D7%9C-%D7%9E%D7%95%D7%95%D7%90%D7%A1%D7%99%20%D7%95%D7%A2%D7%93%20%D7%9C%D7%A2%D7%99%D7%A8%20%D7%A2%D7%96%D7%94%20%D7%94%D7%97%D7%A8%D7%91%D7%94.%20%D7%96%D7%94%20%D7%A1%D7%99%D7%A4%D7%95%D7%A8%20%D7%94%D7%A2%D7%A7%D7%99%D7%A8%D7%94%20%D7%A9%D7%9C%20%D7%A0%D7%99%D7%91%D7%90%D7%9C%2C%20%D7%90%D7%97%D7%AA%20%D7%9E%D7%A9%D7%A0%D7%99%20%D7%9E%D7%99%D7%9C%D7%99%D7%95%D7%9F%20%D7%AA%D7%95%D7%A8%D7%A9%D7%91%D7%99%20%D7%A2%D7%96%D7%94%2C%20%D7%A9%D7%91%D7%A9%D7%A0%D7%AA%D7%99%D7%99%D7%9D%20%D7%94%D7%90%D7%97%D7%A8%D7%95%D7%A0%D7%95%D7%AA%20%D7%A2%D7%A7%D7%A8%D7%95%20%D7%A9%D7%95%D7%91%20%D7%95%D7%A9%D7%95%D7%91%20%D7%91%D7%A0%D7%99%D7%A1%D7%99%D7%95%D7%9F%20%D7%9C%D7%9E%D7%A6%D7%95%D7%90%20%D7%9E%D7%A7%D7%95%D7%9D%20%D7%91%D7%98%D7%95%D7%97.%0A%0Ahttps%3A%2F%2Fwww.btselem.org%2Fthe_displacement_journey_of_nibal_al_hisi%2F" class="share-btn dontinflect" aria-label="Share via Email">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
  </a>
  <a href="https://api.whatsapp.com/send?text=%D7%A2%D7%9D%20%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%AA%20%D7%91%D7%99%D7%93%D7%99%D7%99%D7%9D%2C%20%D7%9E%D7%94%D7%91%D7%99%D7%AA%20%D7%91%D7%92%27%D7%90%D7%91%D7%9C%D7%99%D7%94%2C%20%D7%93%D7%A8%D7%9A%20%D7%90%D7%95%D7%94%D7%9C%20%D7%91%D7%9E%D7%97%D7%A0%D7%94%20%D7%94%D7%A2%D7%A7%D7%95%D7%A8%D7%99%D7%9D%20%D7%91%D7%90%D7%9C-%D7%9E%D7%95%D7%95%D7%90%D7%A1%D7%99%20%D7%95%D7%A2%D7%93%20%D7%9C%D7%A2%D7%99%D7%A8%20%D7%A2%D7%96%D7%94%20%D7%94%D7%97%D7%A8%D7%91%D7%94.%20%D7%96%D7%94%20%D7%A1%D7%99%D7%A4%D7%95%D7%A8%20%D7%94%D7%A2%D7%A7%D7%99%D7%A8%D7%94%20%D7%A9%D7%9C%20%D7%A0%D7%99%D7%91%D7%90%D7%9C%2C%20%D7%90%D7%97%D7%AA%20%D7%9E%D7%A9%D7%A0%D7%99%20%D7%9E%D7%99%D7%9C%D7%99%D7%95%D7%9F%20%D7%AA%D7%95%D7%A9%D7%91%D7%99%20%D7%A2%D7%96%D7%94%2C%20%D7%A9%D7%91%D7%A9%D7%A0%D7%AA%D7%99%D7%99%D7%9D%20%D7%94%D7%90%D7%97%D7%A8%D7%95%D7%A0%D7%95%D7%AA%20%D7%A2%D7%A7%D7%A8%D7%95%20%D7%A9%D7%95%D7%91%20%D7%95%D7%A9%D7%95%D7%91%20%D7%91%D7%A0%D7%99%D7%A1%D7%99%D7%95%D7%9F%20%D7%9C%D7%9E%D7%A6%D7%95%D7%90%20%D7%9E%D7%A7%D7%95%D7%9D%20%D7%91%D7%98%D7%95%D7%97%20https%3A%2F%2Fwww.btselem.org%2Fthe_displacement_journey_of_nibal_al_hisi%2F" target="_blank" class="share-btn dontinflect" aria-label="Share on WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
  </a>
  <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.btselem.org%2Fthe_displacement_journey_of_nibal_al_hisi%2F" target="_blank" class="share-btn dontinflect" aria-label="Share on Facebook">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  </a>
  <a href="https://bsky.app/intent/compose?text=%D7%A2%D7%9D%20%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%AA%20%D7%91%D7%99%D7%93%D7%99%D7%99%D7%9D%2C%20%D7%9E%D7%94%D7%91%D7%99%D7%AA%20%D7%91%D7%92%27%D7%90%D7%91%D7%9C%D7%99%D7%94%2C%20%D7%93%D7%A8%D7%9A%20%D7%90%D7%95%D7%94%D7%9C%20%D7%91%D7%9E%D7%97%D7%A0%D7%94%20%D7%94%D7%A2%D7%A7%D7%95%D7%A8%D7%99%D7%9D%20%D7%91%D7%90%D7%9C-%D7%9E%D7%95%D7%95%D7%90%D7%A1%D7%99%20%D7%95%D7%A2%D7%93%20%D7%9C%D7%A2%D7%99%D7%A8%20%D7%A2%D7%96%D7%94%20%D7%94%D7%97%D7%A8%D7%91%D7%94.%20%D7%96%D7%94%20%D7%A1%D7%99%D7%A4%D7%95%D7%A8%20%D7%94%D7%A2%D7%A7%D7%99%D7%A8%D7%94%20%D7%A9%D7%9C%20%D7%A0%D7%99%D7%91%D7%90%D7%9C%2C%20%D7%90%D7%97%D7%AA%20%D7%9E%D7%A9%D7%A0%D7%99%20%D7%9E%D7%99%D7%9C%D7%99%D7%95%D7%9F%20%D7%AA%D7%95%D7%A9%D7%91%D7%99%20%D7%A2%D7%96%D7%94%2C%20%D7%A9%D7%91%D7%A9%D7%A0%D7%AA%D7%99%D7%99%D7%9D%20%D7%94%D7%90%D7%97%D7%A8%D7%95%D7%A0%D7%95%D7%AA%20%D7%A2%D7%A7%D7%A8%D7%95%20%D7%A9%D7%95%D7%91%20%D7%95%D7%A9%D7%95%D7%91%20%D7%91%D7%A0%D7%99%D7%A1%D7%99%D7%95%D7%9F%20%D7%9C%D7%9E%D7%A6%D7%95%D7%90%20%D7%9E%D7%A7%D7%95%D7%9D%20%D7%91%D7%98%D7%95%D7%97%20https%3A%2F%2Fwww.btselem.org%2Fthe_displacement_journey_of_nibal_al_hisi%2F" target="_blank" class="share-btn dontinflect" aria-label="Share on Bluesky">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>
  </a>
  <a href="https://twitter.com/intent/tweet?text=%D7%A2%D7%9D%20%D7%AA%D7%99%D7%A0%D7%95%D7%A7%D7%AA%20%D7%91%D7%99%D7%93%D7%99%D7%99%D7%9D%2C%20%D7%9E%D7%94%D7%91%D7%99%D7%AA%20%D7%91%D7%92%27%D7%90%D7%91%D7%9C%D7%99%D7%94%2C%20%D7%93%D7%A8%D7%9A%20%D7%90%D7%95%D7%94%D7%9C%20%D7%91%D7%9E%D7%97%D7%A0%D7%94%20%D7%94%D7%A2%D7%A7%D7%95%D7%A8%D7%99%D7%9D%20%D7%91%D7%90%D7%9C-%D7%9E%D7%95%D7%95%D7%90%D7%A1%D7%99%20%D7%95%D7%A2%D7%93%20%D7%9C%D7%A2%D7%99%D7%A8%20%D7%A2%D7%96%D7%94%20%D7%94%D7%97%D7%A8%D7%91%D7%94.%20%D7%96%D7%94%20%D7%A1%D7%99%D7%A4%D7%95%D7%A8%20%D7%94%D7%A2%D7%A7%D7%99%D7%A8%D7%94%20%D7%A9%D7%9C%20%D7%A0%D7%99%D7%91%D7%90%D7%9C%2C%20%D7%90%D7%97%D7%AA%20%D7%9E%D7%A9%D7%A0%D7%99%20%D7%9E%D7%99%D7%9C%D7%99%D7%95%D7%9F%20%D7%AA%D7%95%D7%A9%D7%91%D7%99%20%D7%A2%D7%96%D7%94%2C%20%D7%A9%D7%91%D7%A9%D7%A0%D7%AA%D7%99%D7%99%D7%9D%20%D7%94%D7%90%D7%97%D7%A8%D7%95%D7%A0%D7%95%D7%AA%20%D7%A2%D7%A7%D7%A8%D7%95%20%D7%A9%D7%95%D7%91%20%D7%95%D7%A9%D7%95%D7%91%20%D7%91%D7%A0%D7%99%D7%A1%D7%99%D7%95%D7%9F%20%D7%9C%D7%9E%D7%A6%D7%95%D7%90%20%D7%9E%D7%A7%D7%95%D7%9D%20%D7%91%D7%98%D7%95%D7%97.&url=https%3A%2F%2Fwww.btselem.org%2Fthe_displacement_journey_of_nibal_al_hisi%2F" target="_blank" class="share-btn dontinflect" aria-label="Share on X">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  </a>
</div>


{.meta}
[](svg/#permanent_impermanence.svg/-1.58,-1.98,6.47/+IMG-20250910-WA0107.jpg,+nibal_rita_nov_25.jpg)
[](map/#31.42216,34.36628,9.79,40.0,0.0/~labels_he)
**המסע של ניבאל וריתא טרם נגמר.**  

בצלם ימשיך לשמור על קשר עם ניבאל. אם יחול שינוי במצבה — נעדכן עליו בניוזלטר שלנו:

<div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
<div id="mc_embed_signup">
    <form action="https://btselem.us5.list-manage.com/subscribe/post?u=920751e31402107695c00c26f&amp;id=19d0d9bede&amp;f_id=00cfe2e4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll"><h3>הרשמה לניוזלטר</h3>
            <div class="indicates-required"><span class="asterisk">*</span>שדות חובה</div>
            <div class="mc-field-group"><label for="mce-EMAIL">כתובת אימייל:<span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group"><label for="mce-FNAME">שם פרטי:</label><input type="text" name="FNAME" class=" text" id="mce-FNAME" value=""></div><div class="mc-field-group"><label for="mce-LNAME">שם משפחה:</label><input type="text" name="LNAME" class=" text" id="mce-LNAME" value=""></div>
<div hidden=""><input type="hidden" name="tags" value="20413,4403872"></div>
        <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div><div aria-hidden="true" style="position: absolute; left: -5000px;display: none;"><input type="text" name="b_920751e31402107695c00c26f_19d0d9bede" tabindex="-1" value=""></div><div class="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="עדכנו אותי"></div>
    </div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
<script type="text/javascript" src="/src/mailchimp-script.js"></script>
  </div>


{.meta thumb closing}
[](fg:blank)
[](map/#31.42216,34.36628,9.79,40.0,0.0/~labels_he)

<a href="https://www.btselem.org/hebrew/gaza_strip/202512_no_place_under_heaven_forced_displacement_in_the_gaza_strip_2023_2025" target="blank" class="dontinflect thumb">
לפרסום המלא על העברה בכפייה ברצועת עזה:
    <strong>
    ״אין מקום מתחת לשמיים״
    </strong>
</a>

- <a href="https://www.btselem.org/hebrew/gaza_strip/202512_no_place_under_heaven_forced_displacement_in_the_gaza_strip_2023_2025#legality_of_displacement" target="blank" class="dontinflect">חוקיות הפינוי</a>
- <a href="https://www.btselem.org/hebrew/gaza_strip/202512_no_place_under_heaven_forced_displacement_in_the_gaza_strip_2023_2025#displacement_waves" target="blank" class="dontinflect">גלי העקירה וה"אזורים ההומניטריים"</a>
- <a href="https://www.btselem.org/hebrew/gaza_strip/202512_no_place_under_heaven_forced_displacement_in_the_gaza_strip_2023_2025#evacuation_orders" target="blank" class="dontinflect">צווי הפינוי וה"מסדרונות הבטוחים"</a>
- <a href="https://www.btselem.org/hebrew/gaza_strip/202512_no_place_under_heaven_forced_displacement_in_the_gaza_strip_2023_2025#living_conditions" target="blank" class="dontinflect">תנאי החיים במתחמי העקורים</a>
- <a href="https://www.btselem.org/hebrew/gaza_strip/202512_no_place_under_heaven_forced_displacement_in_the_gaza_strip_2023_2025#strikes_on_idp_sites" target="blank" class="dontinflect">הפצצות במתחמי העקורים</a>
- <a href="https://www.btselem.org/hebrew/gaza_strip/202512_no_place_under_heaven_forced_displacement_in_the_gaza_strip_2023_2025#civilian_space_erasure" target="blank" class="dontinflect">מחיקת המרחב האזרחי</a>


{.meta closing}
[](fg:blank)
[](map/#31.42216,34.36628,9.79,40.0,0.0/~labels_he,~Gaza_border_dash,~Gaza_border_base)

## צילומים ווידאו
- באדיבות ניבאל אל-היסי
- Activestills
- REUTERS
- דובר צה״ל

## מידע גיאוגרפי
- Mapbox.com
- ESRI Wayback
- Gazamap.com

## עיצוב ופיתוח מוצר
- <a href="http://mushon.com" target="blank" class="dontinflect">מושון זר-אביב</a>, סטודיו שועל
- Built on top of <a href="https://uclab.fh-potsdam.de/inflect/" target="blank" class="dontinflect">!nflect</a>
